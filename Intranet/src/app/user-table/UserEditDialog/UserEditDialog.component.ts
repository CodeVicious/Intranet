import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface DialogData {
  description: string;
  user: User;
  isEdit: boolean;
}

@Component({
  selector: 'app-UserEditDialog',
  templateUrl: './UserEditDialog.component.html',
  styleUrls: ['./UserEditDialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {
  userEditform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserEditDialogComponent>,    
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

    if(this.data.isEdit){
    this.userEditform = fb.group({
      'id': data.user.id,
      'username': data.user.username,
      'name': data.user.name,
      'surname': data.user.surname,
      'email': data.user.email,
      'telephone': data.user.telephone,
      'mobile': data.user.mobile,
      'password': data.user.password
    });
  }
  else{
    this.userEditform = fb.group({
    'id': 0,
    'username': [''],
    'name': [''],
    'surname': [''],
    'email': [''],
    'telephone': [''],
    'mobile': [''],
    'password': ['']
    });
  }
  }

  ngOnInit() {
    this.userEditform.controls['id'].disable();
    
    if(this.data.isEdit){    
    this.userEditform.controls['username'].disable();
    this.userEditform.controls['email'].disable();
    } 

  }

  onKOClick(): void {
    this.dialogRef.close();
  }
  onOKClick(): void {
    this.dialogRef.close(this.userEditform.value);
  }

}
