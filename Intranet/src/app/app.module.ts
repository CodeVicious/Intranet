import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

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
import { UserRolesComponent } from './user-table/UserDetailComponent/userRoles/userRoles.component';
import { UserSectorsComponent } from './user-table/UserDetailComponent/userSectors/userSectors.component';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { RolesService } from './services/roles.service';
import { SectorsService } from './services/sectors.service';
import { UserPerformanceTableComponent } from './UserPerformanceTable/UserPerformanceTable.component';
import { SchedaPerformanceComponent } from './UserPerformanceTable/SchedaPerformance/SchedaPerformance.component';
import { UserPerfService } from './UserPerformanceTable/services/userPerf.service';
import { SchedaPerformanceFormComponent } from './UserPerformanceTable/SchedaPerformanceForm/SchedaPerformanceForm.component';
import { SchedaPerfromanceUserHeaderComponent } from './UserPerformanceTable/SchedaPerfromanceUserHeader/SchedaPerfromanceUserHeader.component';


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
      UserRolesComponent,
      UserSectorsComponent,
      jqxTreeComponent,
      UserPerformanceTableComponent,
      UserDetailComponentComponent,
      SchedaPerformanceComponent,
      SchedaPerformanceFormComponent,
      SchedaPerfromanceUserHeaderComponent
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
      FontAwesomeModule,
      FlexLayoutModule
   ],
   providers: [
      UserService,
      RolesService,
      SectorsService,
      MessageService,
      UserPerfService,
      { provide: 'API_URL', useValue: 'http://localhost:8080/api' }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
