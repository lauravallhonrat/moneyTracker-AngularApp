import { Component, OnInit } from '@angular/core';
import { Transaction } from "./transactions.model";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  selectedTransaction: Transaction;
  constructor() { }

  ngOnInit() {
  }

}
