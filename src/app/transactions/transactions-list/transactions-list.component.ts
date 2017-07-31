import { Component, OnInit } from '@angular/core';

import {Transaction} from './transactions.model';
// we imported the model that we will call.

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: Transaction[] = [
    new Transaction ('some category', 34, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("11/11/2093")),
    new Transaction ('some other category', 5334, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("03/06/2093"))
  ];
  // transactions is a given name, Transaction[] refers to the Transaction class name from the transaction.model.ts
  // we create a new Transaction with the different elements we defined in the model.
  // we will use them in the HTML

  constructor() { }

  ngOnInit() {
  }

}
