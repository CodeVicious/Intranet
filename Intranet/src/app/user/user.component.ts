import { Component, OnInit, Inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  componentName: String;

  constructor(    
    @Inject('API_URL') apiUrl: string) {
    this.componentName = 'User Component';    
   }

  

}
