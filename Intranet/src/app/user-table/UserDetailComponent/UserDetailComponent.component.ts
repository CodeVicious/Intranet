import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-UserDetailComponent',
  templateUrl: './UserDetailComponent.component.html',
  styleUrls: ['./UserDetailComponent.component.scss']
})
export class UserDetailComponentComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = {    id: 9,  name: "gianni",
      surname: "codevio",
      username: "gcod",
      email: "jj",
      telephone: "jj",
      mobile: "jj",
      password:"jj"};
   // this.userService.getUser(id)
   //   .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

}
