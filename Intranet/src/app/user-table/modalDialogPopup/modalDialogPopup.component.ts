import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  title: string;
  body: string;
}

@Component({
  selector: 'app-modalDialogPopup',
  templateUrl: './modalDialogPopup.component.html',
  styleUrls: ['./modalDialogPopup.component.scss']
})
export class ModalDialogPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalDialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onKOClick(): void {
    this.dialogRef.close('KO');
  }
  onOKClick(): void{
    this.dialogRef.close('OK');
  }
}
