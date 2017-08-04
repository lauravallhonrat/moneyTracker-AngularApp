import { Component, OnInit, Input, Output } from '@angular/core';
import {MdSelectModule} from '@angular/material';


@Component({
  selector: 'app-overlay-exp', 
  templateUrl: './overlay-exp.component.html',
  styleUrls: ['./overlay-exp.component.css']
})

// @Input() visible;

export class OverlayExpComponent implements OnInit {

  // visible: Boolean;

  selectedCategory: string;
  selectedAccount: string;
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

  constructor() { }

  ngOnInit() {
  }

}
