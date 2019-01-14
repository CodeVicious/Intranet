import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { UserPerf } from '../models/userperf';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { merge,of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { UserEditDialogComponent } from '../user-table/UserEditDialog/UserEditDialog.component';
import { ModalDialogPopupComponent } from '../user-table/modalDialogPopup/modalDialogPopup.component';
import { UserPerfService } from '../services/userperf.service';

@Component({
  selector: 'app-UserPerformanceTable',
  templateUrl: './UserPerformanceTable.component.html',
  styleUrls: ['./UserPerformanceTable.component.scss']
})
export class UserPerformanceTableComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  id: number;    
	anno: number;
	inizio_incarico: Date;
	fine_incarico: Date;
	giorni_lavorati: number;
	cp: Boolean;
	responsabilita_speciali: string;
	nome: string;
	cognome: string;
  do: string;
  note_Informative_1: string;
	note_Informative_2: string;
	percentuale_comando_effettivo: number;
	percentuale_do: number;
	presenza_giuridicav: number;
	capitolo_standard: string;
	capitolo_oneri_standard: string;
	capitolo_irap_standard: string;


  displayedColumns: string[] =  ["id", "anno", "inizio_incarico", "fine_incarico", "giorni_lavorati", "cp", 
  "responsabilita_speciali", "nome", "cognome", "do", "note_Informative_1", "note_Informative_2", "percentuale_comando_effettivo", 
  "percentuale_do", "presenza_giuridica", "capitolo_standard", "capitolo_oneri_standard", "capitolo_irap_standard", "actions"];
  data: UserPerf[] = [];

  componentName: String;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserPerfService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject('API_URL') private apiUrl: string) {
    this.componentName = "Gestione Performance Utenti"
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

  onEditClicked(user: UserPerf) {
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
          



          this.userService.updateUser(user).pipe(
            map(() => { this.sort.sortChange.emit() }),
            map(() => { this.snackBar.open(`Utente ${user.id}: - ${user.nome} - ${user.cognome}`, "AGGIORNATO!", { duration: 2000 }) })
          ).subscribe();
        }
      });
  }

  onDeleteClicked(user: UserPerf) {
    const dialogRef = this.dialog.open(ModalDialogPopupComponent,
      {
        width: '350px',
        data: {
          title: "ATTENZIONE Operazione irreversibile",
          body: `Sei sicuro di voler elimare l'utente [${user.id}] ${user.nome} - ${user.cognome} ?`
        }
      });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result == "OK")
        this.userService.deleteUser(user).pipe(
          map(() => { this.sort.sortChange.emit() }),
          map(() => { this.snackBar.open(`Utente ${user.id}: - ${user.nome} - ${user.cognome}`, "ELIMINATO!", { duration: 2000 }) })
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
