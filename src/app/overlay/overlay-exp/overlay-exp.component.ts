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
  }

  submitForm(myForm) {
  this.transactionService.add(myForm.value).subscribe((res) => {}, (err) => {
      console.log('error add() not working,check tr.service');
      
    });
    this.close_classExp();
  }


  // ====== DATA ====== //

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


  ngOnInit() {
  }

}
