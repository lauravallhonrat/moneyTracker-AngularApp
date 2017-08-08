import { Component, OnInit } from '@angular/core';
import { Transaction } from "./transactions.model";
import {TransactionService} from "./transactions.service"

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  // getThoseTransactions: Transaction;
  //getThoseTransactions: Transaction;
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {

  }

}
