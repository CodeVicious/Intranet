import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  componentName: String;

  constructor(@Inject('API_URL') apiUrl: string) {
    this.componentName = 'User Component';
   }

  ngOnInit() {
  }

}
