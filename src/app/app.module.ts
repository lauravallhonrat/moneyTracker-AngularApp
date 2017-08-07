import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDatepickerModule, MdNativeDateModule, MaterialModule, MdCheckboxModule } from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
//components
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
//services
import { TransactionService } from './transactions/transactions.service';
import { SessionService } from './session.service';
import { ChartsComponent } from './charts/charts.component';



const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'transactions', component: HomeComponent, canActivate: [SessionService]},
  { path: '**', redirectTo: '' },

  //{ path: 'transactions',  component: TransactionsListComponent },
  // { path: 'phones/new',  component: AddPhoneComponent, canActivate: [SessionService] },
  // { path: 'phones/:id', component: PhonesDetailsComponent, canActivate: [SessionService] }
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
    SignupComponent,
    HomeComponent,
    ChartsComponent
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
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    MdSidenavModule,
    ChartsModule
  ],
  providers: [SessionService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
