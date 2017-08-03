import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { TransactionsItemsComponent } from './transactions/transactions-list/transactions-items/transactions-items.component';
import { BudgetsListComponent } from './budgets/budgets-list/budgets-list.component';
import { BudgetsItemsComponent } from './budgets/budgets-list/budgets-items/budgets-items.component';
import { FoxComponent } from './fox/fox.component';
import { ChartsListComponent } from './charts/charts-list/charts-list.component';
import { ChartsItemsComponent } from './charts/charts-list/charts-items/charts-items.component';
import { OverlayExpComponent } from './overlay/overlay-exp/overlay-exp.component';
import { OverlayIncComponent } from './overlay/overlay-inc/overlay-inc.component';
import { TransactionsPopUpComponent } from './transactions/transactions-pop-up/transactions-pop-up.component';
import { DdDirective } from './dd.directive';
import { TransactionsComponent } from './transactions/transactions.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdDatepickerModule, MdNativeDateModule, MaterialModule, MdCheckboxModule} from '@angular/material';

import { SidebarModule } from 'ng-sidebar';
import{TransactionService} from './transactions/transactions.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent }
  //{ path: 'users', component: UsersComponent } //localhost:4200/users
  // path I choose and component name as well
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionsListComponent,
    TransactionsItemsComponent,
    BudgetsListComponent,
    BudgetsItemsComponent,
    FoxComponent,
    ChartsListComponent,
    ChartsItemsComponent,
    OverlayExpComponent,
    OverlayIncComponent,
    TransactionsPopUpComponent,
    DdDirective,
    TransactionsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MaterialModule,
    SidebarModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
