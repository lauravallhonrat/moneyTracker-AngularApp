import { 
  Component, 
  OnInit, 
  HostListener, 
  Directive, 
  HostBinding, 
  Output, 
  Input, 
  EventEmitter 
} from '@angular/core';

import { NgForm } from '@angular/forms';
import contactList from './contacts';
import AppComponent from '../../app.component'

@Component({
  selector: 'app-overlay-inc',
  templateUrl: './overlay-inc.component.html',
  styleUrls: ['./overlay-inc.component.css']
})
export class OverlayIncComponent 
implements OnInit {

  contacts: Object[];
  emiContact: Object = {};

  toggleVar: false;
  @Output() hide = new EventEmitter<boolean>();

  close_classInc() {
    this.hide.emit(this.toggleVar);
  }

  submitForm(myForm: NgForm) {
    console.log("Received form", myForm.value.selectedDate);
    // process form submitting
    myForm.reset();
    // close form modal
  }

  // constructor (@Host() app: AppComponent) {}

  ngOnInit() {
    this.contacts = contactList;
    this.selectedDate = new Date();
  }

  addContact(){
    // console.log("Add contact has been called");
    // add contact to contacts list
    this.contacts.push(this.emiContact);
    // clear inputs
    this.emiContact= {}; // creating a new object
  }

// ====== DATA ====== //

  public selectedCategory: string;
  public selectedAccount: string;
  public selectedAmount: any;
  public selectedDate: Date;

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
}
