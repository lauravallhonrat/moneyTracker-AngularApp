import { 
  Component, 
  OnInit, 
  HostListener, 
  Directive, 
  HostBinding, 
  Output, 
  Input, 
  EventEmitter,
  ViewEncapsulation 
} from '@angular/core';

import { NgForm } from '@angular/forms';
import AppComponent from '../../app.component'
import { TransactionService } from '../../transactions/transactions.service';
import { Router } from '@angular/router';
import {Transaction} from '../../transactions/transactions.model';

@Component({
  selector: 'app-overlay-exp', 
  templateUrl: './overlay-exp.component.html',
  styleUrls: ['./overlay-exp.component.css']
})

export class OverlayExpComponent implements OnInit {

  constructor(
  	private transactionService: TransactionService,
  	private router: Router
  ) { }

  public selectedCategory: string;
  public selectedAccount: string;
  public selectedAmount: any;
  public selectedDate: any;
  today = new Date();
  transactions: Transaction[];

    toggleVar: false;
  @Output() hide = new EventEmitter<boolean>();

  close_classExp() {
    this.hide.emit(this.toggleVar);
    // I want to make the error message disappear if it was there and I close the exp overlay
    if (this.errorMessage==false) {
        this.errorMessage=true;
    }
    
  }

  submitForm(myForm: NgForm) {
    console.log("FORM", myForm.value);
    if (myForm.value.account != undefined && myForm.value.amount != undefined && myForm.value.category != undefined && myForm.value.selectedDate != undefined) {
      this.transactionService.add(myForm.value).subscribe((res) => { }, (err) => {
        console.log('error add() not working,check tr.service');
      });
      myForm.resetForm();
      console.log('reset from submit', myForm.value);
      this.close_classExp();
    }

    // else statement for error on the way
    else {
      this.errorMessageShown();
    }
    // THIS STUFF IS ORIGINALLY HERE FROM LAURA
    // myForm.resetForm();
    // console.log('reset from submit', myForm.value);
    // this.close_classExp();
  }

  errorMessage : boolean=true;

  errorMessageShown() {
    this.errorMessage = !this.errorMessage;
    console.log("The error message should be shown");
  }

  // ====== DATA ====== //

  accounts = [
    {value: 'Main', viewValue: 'Main'},
    {value: 'Cash', viewValue: 'Cash'}
  ];

  categories = [
    {value: '<div><i class="fa fa-cutlery" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Food<p></div>', viewValue: 'Food'},
    {value: '<div><i class="fa fa-car" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Transportation<p></div>', viewValue: 'Transportation'},
    {value: '<div><i class="fa fa-glass" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Social<p></div>', viewValue: 'Social'},
    {value: '<div><i class="fa fa-home" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Clothing<p></div>', viewValue: 'Clothing'},
    {value: '<div><i class="fa fa-home" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Rent<p></div>', viewValue: 'Rent'},
    {value: '<div><i class="fa fa-plug" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Utilities<p></div>', viewValue: 'Utilities'},
    {value: '<div><i class="fa fa-heartbeat" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Health<p></div>', viewValue: 'Health'},
    {value: '<div><i class="fa fa-gift" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Others<p></div>', viewValue: 'Others'}
  ];

  categoriesInc = [
    {value: '<div><i class="fa fa-briefcase" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Salary<p></div>', viewValue: 'Salary'},
    {value: '<div><i class="fa fa-thumbs-up" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Freelance<p></div>', viewValue: 'Freelance'},
    {value: '<div><i class="fa fa-star" aria-hidden="true"></i></div><div class="cat"><p>&nbsp; Other<p></div>', viewValue: 'Other'}
  ];

  ngOnInit() {
  }

}
