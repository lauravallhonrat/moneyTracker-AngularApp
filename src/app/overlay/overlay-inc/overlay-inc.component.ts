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
  selector: 'app-overlay-inc',
  templateUrl: './overlay-inc.component.html',
  styleUrls: ['./overlay-inc.component.css']
})
export class OverlayIncComponent 
implements OnInit {

   constructor(
  	private transactionService: TransactionService,
  	private router: Router
  ) { }
 

// ====== DATA ====== //

  public selectedCategory: string;
  public selectedAccount: string;
  public selectedAmount: any;
  public selectedDate: Date;
  transactions: Transaction[];

  toggleVar: false;
  @Output() hide = new EventEmitter<boolean>();

  close_classInc() {
    this.hide.emit(this.toggleVar);
  }

  submitForm(myForm: NgForm) {
   
    console.log(myForm);
    this.transactionService.add(this.transactions)
  		.subscribe((res)=>{
  			console.log(res)
  			this.router.navigate(['/transactions'])		
      });
     
  	 console.log("Received form", myForm.value.selectedDate, myForm.value.selectedAccount,myForm.value.selectedAmount,myForm.value.selectedCategory);
    // process form submitting
    // myForm.reset();
    //resetThatStuff();
    // process form submitting
    //myForm.reset();
    // close form modal
    this.close_classInc();
  }
  // function resetThatStuff() {
  //   myForm.reset();
  // }

  // constructor (@Host() app: AppComponent) {}

  ngOnInit() {
  //   this.selectedDate = new Date();
  }




  accounts = [
    {value: 'main-0', viewValue: 'Main'},
    {value: 'cash-1', viewValue: 'Cash'}
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

  // reset(form: ngForm){
  //   form.resetForm({ selectedAmount: this.selectedAmount });
  //   form.resetForm({ selectedAccount: this.selectedAccount });
  //   form.resetForm({ selectedCategory: this.selectedCategory });
  //   form.resetForm({ selectedDate: this.selectedDate });
  // }
  encapsulation: ViewEncapsulation.Native
}
