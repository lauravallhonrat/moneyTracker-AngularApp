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
import contactList from './contacts';
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
 
  // contacts: Object[];
  // emiContact: Object = {};
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
   let user = JSON.parse(localStorage.getItem("user"))
    console.log("form",myForm.value);
    this.transactionService.add(myForm,user)
  		.subscribe((res)=>{
  			console.log(res)
        this.router.navigate(['/transactions'])		//fix this refresh transactions component
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
  //   this.contacts = contactList;
  //   this.selectedDate = new Date();
  }




  accounts = [
    {value: 'main-0', viewValue: 'Main'},
    {value: 'cash-1', viewValue: 'Cash'}
  ];

  categories = [
    {value: '0', viewValue: 'Food'},
    {value: '1', viewValue: 'Transportation'},
    {value: '2', viewValue: 'Social'},
    {value: '3', viewValue: 'Clothing'},
    {value: '4', viewValue: 'Rent'},
    {value: '5', viewValue: 'Utilities'},
    {value: '6', viewValue: 'Health'},
    {value: '7', viewValue: 'Other'}
  ];

  // reset(form: ngForm){
  //   form.resetForm({ selectedAmount: this.selectedAmount });
  //   form.resetForm({ selectedAccount: this.selectedAccount });
  //   form.resetForm({ selectedCategory: this.selectedCategory });
  //   form.resetForm({ selectedDate: this.selectedDate });
  // }
  encapsulation: ViewEncapsulation.Native
}
