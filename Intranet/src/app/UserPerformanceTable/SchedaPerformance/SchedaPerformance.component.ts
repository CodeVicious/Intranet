import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserPerfService } from '../../services/userperf.service';
import { MessageService } from '../../services/message.service';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchedaUser } from '../../models/schedaUser';

@Component({
  selector: 'app-SchedaPerformance',
  templateUrl: './SchedaPerformance.component.html',
  styleUrls: ['./SchedaPerformance.component.scss']
})
export class SchedaPerformanceComponent implements OnInit {

  componentName: String;
  schedaUtente: FormGroup;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private http: HttpClientXsrfModule,
    private messageService: MessageService,
    private userService: UserPerfService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    @Inject('API_URL') private apiUrl: string) {
    this.componentName = "Scheda Performance Utente "
    this.schedaUtente = this.createFormGroupScheda(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroupScheda(formBuilder: FormBuilder) {
    return formBuilder.group({
      id: '',
      nome: '',
      cognome: '',
      settore: '',
      categoria: '',

      areaA: formBuilder.group({
        descrizione_obiettivo_1: '',
        descrizione_obiettivo_2: '',
        descrizione_obiettivo_3: '',
        indicatore_desc_1: '',
        indicatore_desc_2: '',
        indicatore_desc_3: '',
        peso_1: '',
        peso_2: '',
        peso_3: '',
        raggiungimento_1: '',
        raggiungimento_2: '',
        raggiungimento_3: ''
      }),
      areaB: formBuilder.group({
        comp_1: '',
        comp_2: '',
        comp_3: '',
        comp_4: '',
        relaz_1: '',
        relaz_2: '',
        relaz_3: '',
        relaz_4: '',
        del_saper_1: '',
        del_saper_2: '',
        del_saper_3: '',
        del_saper_: ''
      }),

    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: SchedaUser = Object.assign({}, this.schedaUtente.value);
    
    // Do useful stuff with the gathered data
    console.log(result);
  }

}
