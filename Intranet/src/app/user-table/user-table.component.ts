import { Component, OnInit, ViewChild, Inject, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { merge, of as observableOf, Observable } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { ModalDialogPopupComponent } from './modalDialogPopup/modalDialogPopup.component';
import { UserEditDialogComponent } from './UserEditDialog/UserEditDialog.component';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  telephone: string;
  mobile: number;

  displayedColumns: string[] = ['id', 'name', 'surname', 'username', 'email', 'telephone', 'mobile', 'actions'];
  data: User[] = [];

  componentName: String;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject('API_URL') private apiUrl: string) {
    this.componentName = "Gestione Utenti"
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.userService!.getUsers
            ('', this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

  onEditClicked(user: User) {
    const dialogRef = this.dialog.open(UserEditDialogComponent,
      {
        width: '450px',        
        data: {
          description: 'Modifica utente',
          user: user,
          isEdit: true          
        }
      });

      dialogRef.afterClosed().subscribe(result => {    
        console.log(result);    
        if (result){
          user.name = result.name;
          user.surname = result.surname;
          user.telephone = result.telephone;
          user.mobile = result.mobile;
          user.password = result.password;

          this.userService.updateUser(user).pipe(
            map(() => { this.sort.sortChange.emit() }),
            map(() => { this.snackBar.open(`Utente ${user.id}: - ${user.name} - ${user.surname}`, "AGGIORNATO!", { duration: 2000 }) })
          ).subscribe();
        }
      });
  }

  onDeleteClicked(user: User) {
    const dialogRef = this.dialog.open(ModalDialogPopupComponent,
      {
        width: '350px',
        data: {
          title: "ATTENZIONE Operazione irreversibile",
          body: `Sei sicuro di voler elimare l'utente [${user.id}] ${user.name} - ${user.surname} ?`
        }
      });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result == "OK")
        this.userService.deleteUser(user).pipe(
          map(() => { this.sort.sortChange.emit() }),
          map(() => { this.snackBar.open(`Utente ${user.id}: - ${user.name} - ${user.surname}`, "ELIMINATO!", { duration: 2000 }) })
        ).subscribe();
    });
  }

  onNewUserClick(){
    const dialogRef = this.dialog.open(UserEditDialogComponent,
      {
        width: '450px',        
        data: {
          description: 'Modifica utente',
          user: null,
          isEdit: false          
        }
      });

      dialogRef.afterClosed().subscribe(result => {    
        console.error(result);    
        if (result){            
            this.userService.addUser(result).pipe(
            map(() => { this.sort.sortChange.emit() }),
            map(() => { this.snackBar.open(`Utente ${result.id}: - ${result.name} - ${result.surname}`, "INSERITO!", { duration: 2000 }) })
          ).subscribe();
        }
      });
  }
}
