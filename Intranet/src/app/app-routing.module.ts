/**
 * New typescript file
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet/intranet.component';

import {UserComponent} from './user/user.component';
 

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: '', component: IntranetComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
