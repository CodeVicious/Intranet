import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {IntranetComponent} from './intranet/intranet.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {UserTableComponent} from './user-table/user-table.component';
import {IntranetMaterialModule} from './material-module';
import { MessagesComponent } from './messages/messages.component';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { SearchBoxContainerComponent } from './user-table/SearchBoxContainer/SearchBoxContainer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalDialogPopupComponent } from './user-table/modalDialogPopup/modalDialogPopup.component';
import { UserEditDialogComponent } from './user-table/UserEditDialog/UserEditDialog.component';
import { UserDetailComponentComponent } from './user-table/UserDetailComponent/UserDetailComponent.component';


@NgModule({
   entryComponents: [
      ModalDialogPopupComponent,
      UserEditDialogComponent      
   ],
   declarations: [
      AppComponent,
      IntranetComponent,      
      MainDashboardComponent,
      UserTableComponent,
      MessagesComponent,
      SearchBoxContainerComponent,
      ModalDialogPopupComponent,
      UserEditDialogComponent,
      UserDetailComponentComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      LayoutModule,
      IntranetMaterialModule,      
      FontAwesomeModule
   ],
   providers: [
    UserService,
    MessageService,
    { provide: "API_URL", useValue: "http://localhost:8080/api" }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
