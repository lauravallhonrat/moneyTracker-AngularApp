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
   //let user = JSON.parse(localStorage.getItem("user"))
    this.transactionService.add(myForm.value).subscribe((res) => {
    //   //  this.router.navigate(['/transactions'])		//fix this refresh transactions component
    });
    
  	//  console.log("Received form", myForm.value.selectedDate, myForm.value.selectedAccount,myForm.value.selectedAmount,myForm.value.selectedCategory);
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
    {value: 'Main', viewValue: 'Main'},
    {value: 'Cash', viewValue: 'Cash'}
  ];

  categories = [
    {value: 'Food', viewValue: 'Food'},
    {value: 'Transportation', viewValue: 'Transportation'},
    {value: 'Social', viewValue: 'Social'},
    {value: 'Clothing', viewValue: 'Clothing'},
    {value: 'Rent', viewValue: 'Rent'},
    {value: 'Utilities', viewValue: 'Utilities'},
    {value: 'Health', viewValue: 'Health'},
    {value: 'Other', viewValue: 'Other'}
  ];

  categoriesInc = [
    {value: 'Salary', viewValue: 'Salary'},
    {value: 'Freelance', viewValue: 'Freelance'},
    {value: 'Other', viewValue: 'Other'}
  ];

  icon = [
    {value: '0a', viewValue: '<i class="fa fa-cutlery" aria-hidden="true"></i>'},
    {value: '1a', viewValue: '<i class="fa fa-car" aria-hidden="true"></i>'},
    {value: '2a', viewValue: '<i class="fa fa-glass" aria-hidden="true"></i>'},
    {value: '3a', viewValue: '<i class="fa fa-shopping-bag" aria-hidden="true"></i>'},
    {value: '4a', viewValue: '<i class="fa fa-home" aria-hidden="true"></i>'},
    {value: '5a', viewValue: '<i class="fa fa-plug" aria-hidden="true"></i>'},
    {value: '6a', viewValue: '<i class="fa fa-heartbeat" aria-hidden="true"></i>'},
    {value: '7a', viewValue: '<i class="fa fa-gift" aria-hidden="true"></i>'}
  ];

  iconInc = [
    {value: '8a', viewValue: '<i class="fa fa-suitcase" aria-hidden="true"></i>'},
    {value: '9a', viewValue: '<i class="fa fa-thumbs-up" aria-hidden="true"></i>'},
    {value: '10a', viewValue: '<i class="fa fa-star" aria-hidden="true"></i>'}
  ];


  // reset(form: ngForm){
  //   form.resetForm({ selectedAmount: this.selectedAmount });
  //   form.resetForm({ selectedAccount: this.selectedAccount });
  //   form.resetForm({ selectedCategory: this.selectedCategory });
  //   form.resetForm({ selectedDate: this.selectedDate });
  // }
  encapsulation: ViewEncapsulation.Native
}
