import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userRoles',
  templateUrl: './userRoles.component.html',
  styleUrls: ['./userRoles.component.scss']
})
export class UserRolesComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit() {
  }

}
