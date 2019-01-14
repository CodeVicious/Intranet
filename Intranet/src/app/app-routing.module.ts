/**
 * New typescript file
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet/intranet.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailComponentComponent } from './user-table/UserDetailComponent/UserDetailComponent.component';
import { UserPerformanceTableComponent } from './UserPerformanceTable/UserPerformanceTable.component';
import { SchedaPerformanceComponent } from './UserPerformanceTable/SchedaPerformance/SchedaPerformance.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainDashboardComponent },
  { path: 'user', component: UserTableComponent },
  { path: 'user/:id', component: UserDetailComponentComponent },
  { path: 'performance', component: UserPerformanceTableComponent },
  { path: 'performance/:id', component: UserPerformanceTableComponent },
  { path: 'performance/:userid/add', component: SchedaPerformanceComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
