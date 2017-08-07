import { Component, OnInit } from '@angular/core';

import {Transaction} from '../transactions.model';
import {TransactionService} from '../transactions.service'

import { Subscription } from 'rxjs/Subscription';

// we imported the model that we will call.

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactionAddedS: Subscription;

  transactions: Transaction[];
  // transactions is a given name, Transaction[] refers to the Transaction class name from the transaction.model.ts
  // we create a new Transaction with the different elements we defined in the model.

  constructor(private transactionService: TransactionService) { 
    this.transactionAddedS = this.transactionService.getTransactionAdded().subscribe(data => {
      console.log("Received transaction", data);
      this.transactions.push(data)
    })
  }

  ngOnInit() {
    this.transactionService.getTransactions()
      .subscribe((response) => {
        this.transactions = response;
      });

    
  }

  // onTransactionAdded(transaction:Transaction){
  //   this.transactions.push(transaction);
  // }

}
