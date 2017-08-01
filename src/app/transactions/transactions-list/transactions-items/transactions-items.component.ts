import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
//import input decorator, event emitter, output
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
//new event emiter when you call on Selected (item html file)
//event emitter will not pass any information so we use void
//use Output decorator o we listen the element from outside
@Output() transactionSelected = new EventEmitter<void>(); 


  @Input() transaction: Transaction;
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.transactionSelected.emit();//call emit when emitEmitter is used
  }
}
