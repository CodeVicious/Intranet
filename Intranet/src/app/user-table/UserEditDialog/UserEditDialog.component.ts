import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface DialogData {
  description: string;
  user: User;
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
    this.userEditform = fb.group({
      'id': data.user.id,
      'username': data.user.username,
      'nome': data.user.name,
      'cognome': data.user.surname,
      'email': data.user.email,
      'telefono': data.user.telephone,
      'cell': data.user.mobile,
      'pw': data.user.password
    });
  }

  ngOnInit() {
    this.userEditform.controls['id'].disable();
    this.userEditform.controls['username'].disable();
    this.userEditform.controls['email'].disable();

  }

  onKOClick(): void {
    this.dialogRef.close();
  }
  onOKClick(): void {
    this.dialogRef.close(this.userEditform.value);
  }

}
