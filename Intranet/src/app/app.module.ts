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


import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserTableComponent } from './user-table/user-table.component';

import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IntranetComponent,
    SignIntComponent,
    MainDashboardComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
