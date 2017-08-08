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

  constructor() { }

  ngOnInit() {
  }

}
