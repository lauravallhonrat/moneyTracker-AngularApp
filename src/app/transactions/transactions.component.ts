import { Component, OnInit } from '@angular/core';
import { Transaction } from "./transactions.model";
import {TransactionService} from "./transactions.service"

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers : [TransactionService]
})
export class TransactionsComponent implements OnInit {

  selectedTransaction: Transaction;
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.transactionSelected
    .subscribe(
      (transaction: Transaction) =>{
        this.selectedTransaction = transaction;
      }
    );
  }

}
