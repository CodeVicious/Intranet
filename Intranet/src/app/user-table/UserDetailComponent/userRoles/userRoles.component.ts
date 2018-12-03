import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../services/message.service';
import { RolesService } from '../../../services/roles.service';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-userRoles',
  templateUrl: './userRoles.component.html',
  styleUrls: ['./userRoles.component.scss']
})
export class UserRolesComponent implements OnInit {
  userRole: Role;
  roles: Role[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private roleService: RolesService    
  ) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe(data => this.roles = data);
  }

}
