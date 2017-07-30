import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './add-features/buttons/buttons.component';
import { ListIncComponent } from './list-features/list-inc/list-inc.component';
import { ListExpComponent } from './list-features/list-exp/list-exp.component';
import { AddIncComponent } from './add-features/add-inc/add-inc.component';
import { AddExpComponent } from './add-features/add-exp/add-exp.component';

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
