import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserPerfService } from '../../services/userperf.service';

import { MessageService } from '../../services/message.service';
import { HttpClientXsrfModule } from '@angular/common/http';

@Component({
  selector: 'app-SchedaPerformance',
  templateUrl: './SchedaPerformance.component.html',
  styleUrls: ['./SchedaPerformance.component.scss']
})
export class SchedaPerformanceComponent implements OnInit {

  componentName: String;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private http: HttpClientXsrfModule,
    private messageService: MessageService,
    private userService: UserPerfService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject('API_URL') private apiUrl: string) {
    this.componentName = "Scheda Performance Utente "
  }

    ngOnInit() {
  }

}
