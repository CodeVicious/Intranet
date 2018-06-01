import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import { IntranetComponent } from './intranet/intranet.component';
import { SignIntComponent } from './user/sign-int/sign-int.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    IntranetComponent,
    SignIntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
