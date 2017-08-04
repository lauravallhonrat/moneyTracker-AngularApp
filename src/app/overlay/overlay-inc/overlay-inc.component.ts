import { Component, OnInit, HostListener, Directive,HostBinding, Output, Input, EventEmitter } from '@angular/core';
import contactList from './contacts';
import AppComponent from '../../app.component'

@Component({
  selector: 'app-overlay-inc',
  templateUrl: './overlay-inc.component.html',
  styleUrls: ['./overlay-inc.component.css']
})
export class OverlayIncComponent implements OnInit {

  contacts: Object[];
  emiContact: Object = {};

  toggleVar: false;
  @Output() hide = new EventEmitter<boolean>();

  submitForm(myForm) {
    console.log(myForm);
  }

  close_classInc() {
    this.hide.emit(this.toggleVar);
  }


  // constructor (@Host() app: AppComponent) {}

  ngOnInit() {
    this.contacts = contactList;
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
  public selectedDate: any;
  today = new Date();

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

}
