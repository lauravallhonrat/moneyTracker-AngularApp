import { Component, OnInit,EventEmitter,Output } from '@angular/core';

import {Transaction} from '../transactions.model';

// we imported the model that we will call.

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  //create new event emitter passing transaction as a type
  @Output() transactionWasSelected = new EventEmitter<Transaction>();
  
  // transactions is a given name, Transaction[] refers to the Transaction class name from the transaction.model.ts
  // we create a new Transaction with the different elements we defined in the model.
  // we will use them in the HTML
  // clicked(event) {
  //     console.log('p clicked!');
      
  //   }
  constructor() { }

  ngOnInit() {
  }
  //define the type always (the one coming from the model that's making the connection between components) and then define the output
  onTransactionSelected(transaction: Transaction){
    this.transactionWasSelected.emit(transaction);//
  }

}
