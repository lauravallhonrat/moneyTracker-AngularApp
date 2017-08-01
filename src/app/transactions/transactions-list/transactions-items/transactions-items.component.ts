import { Component, OnInit,Input } from '@angular/core';
//import input decorator
import {Transaction} from '../transactions.model';
//import transaction type from transactions model file

@Component({
  selector: 'app-transactions-items',
  templateUrl: './transactions-items.component.html',
  styleUrls: ['./transactions-items.component.css']
})
export class TransactionsItemsComponent implements OnInit {
  //transaction of type transaction (coming from the transaction model file)
  //input decorator gets the data from outside
  //this will be defined on the transaction list html file
@Input() item: Transaction;
// This item here is used in trans-list-comp-html in the ngFor
// I ADDED THAT !!!!!!


  @Input() transaction: Transaction;
  constructor() { }

  ngOnInit() {
  }

}
