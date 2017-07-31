import { Component, OnInit } from '@angular/core';

import {Transaction} from './transactions.model';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: Transaction[] = [
    new Transaction ('some category', 34, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("MM/dd/yyyy"))
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
