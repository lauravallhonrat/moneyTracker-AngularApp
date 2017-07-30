import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListIncComponent } from './list-inc/list-inc.component';
import { ListExpComponent } from './list-exp/list-exp.component';
import { AddIncComponent } from './add-inc/add-inc.component';
import { AddExpComponent } from './add-exp/add-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ListIncComponent,
    ListExpComponent,
    AddIncComponent,
    AddExpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
