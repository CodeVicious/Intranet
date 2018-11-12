import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';


import {UserComponent} from './user/user.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {IntranetComponent} from './intranet/intranet.component';
import {SignIntComponent} from './user/sign-int/sign-int.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {UserTableComponent} from './user-table/user-table.component';
import {IntranetMaterialModule} from './material-module';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      IntranetComponent,
      SignIntComponent,
      MainDashboardComponent,
      UserTableComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      LayoutModule,
      IntranetMaterialModule
   ],
   providers: [
      provide
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
