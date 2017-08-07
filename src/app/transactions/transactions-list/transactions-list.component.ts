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
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    this.transactionService.getTransactions(user)
      .subscribe((response) => {
        console.log("transactionslist",response)
        this.transactions = response.transactions;
      });
  }

  onTransactionAdded(transaction:Transaction){
    this.transactions.push(transaction);
  }

}
