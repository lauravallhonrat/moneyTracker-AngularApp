import { Component, OnInit,Input } from '@angular/core';
import{Transaction} from '../transactions.model'
@Component({
  selector: 'app-transactions-pop-up',
  templateUrl: './transactions-pop-up.component.html',
  styleUrls: ['./transactions-pop-up.component.css']
})
export class TransactionsPopUpComponent implements OnInit {
  @Input() transaction: Transaction;
  constructor() { }

  ngOnInit() {
  }

}
