import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {Transaction} from '../transactions.model';
import {TransactionService} from '../transactions.service'

// we imported the model that we will call.

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.getTransactions()
      .subscribe((response) => {}, (err) => {
        console.log('error on tr.list, get transactions not working!')
      });

  }

  // onTransactionAdded(transaction:Transaction){
  //   this.transactions.push(transaction);
  // }

}
