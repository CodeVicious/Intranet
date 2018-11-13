import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-SearchBoxContainer',
  template:` 
    <fa-icon class="sbcontainer" [icon]="faCoffee"></fa-icon>
    <ng-content></ng-content>
  `,
  styleUrls: ['./SearchBoxContainer.component.scss']
})

export class SearchBoxContainerComponent  {

  @Input() icon: string;
  @Output() value = new EventEmitter<string>();
  inputFocus = false;
  faCoffee = faCoffee;

   @HostBinding('class.focus')
  get focus() {
    console.log(this.inputFocus);
    return this.inputFocus;
  }

}
