import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MdSelectModule} from '@angular/material';


@Component({
  selector: 'app-overlay-exp', 
  templateUrl: './overlay-exp.component.html',
  styleUrls: ['./overlay-exp.component.css']
})

// @Input() visible;

export class OverlayExpComponent implements OnInit {

  public selectedCategory: string;
  public selectedAccount: string;
  public selectedAmount: any;
  public selectedDate: any;
  today = new Date();

    toggleVar: false;
  @Output() hide = new EventEmitter<boolean>();

  close_classExp() {
    this.hide.emit(this.toggleVar);
  }

  submitForm(myForm) {
    console.log(myForm);
    setTimeout(function() {
      this.selectedAmount = "";
    }, 500);
    this.close_classExp();
  }


  // ====== DATA ====== //

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

  constructor() { }

  ngOnInit() {
  }

}
