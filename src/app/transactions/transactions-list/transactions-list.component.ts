import { Component, OnInit } from '@angular/core';

import {Transaction} from '../transactions.model';
import {TransactionService} from '../transactions.service'

// we imported the model that we will call.

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: Transaction[];
  // transactions is a given name, Transaction[] refers to the Transaction class name from the transaction.model.ts
  // we create a new Transaction with the different elements we defined in the model.

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions()
      .subscribe((_transactions) => {
        this.transactions = _transactions;
      });
  }

  onTransactionAdded(transaction:Transaction){
    this.transactions.push(transaction);
  }

}
