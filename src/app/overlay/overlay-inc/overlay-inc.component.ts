import { Component, OnInit } from '@angular/core';
import contactList from './contacts';

@Component({
  selector: 'app-overlay-inc',
  templateUrl: './overlay-inc.component.html',
  styleUrls: ['./overlay-inc.component.css']
})
export class OverlayIncComponent implements OnInit {

  contacts: Object[];
  emiContact: Object = {};

  constructor() { }

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

}
