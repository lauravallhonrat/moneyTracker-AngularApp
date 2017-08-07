import { Component, OnInit,Input } from '@angular/core';
import {Transaction} from '../../transactions.model';
import {TransactionService} from '../../transactions.service';



@Component({
  selector: 'app-transactions-items',
  templateUrl: './transactions-items.component.html',
  styleUrls: ['./transactions-items.component.css']
})

export class TransactionsItemsComponent implements OnInit {

  // deleteThing: boolean = false;
  // showThing:boolean = true;
  deleteThat: boolean = true;
  showThat: boolean = false;
  
  showDelete(){
    console.log("click bande");
    this.deleteThat = !this.deleteThat;
    this.showThat = !this.showThat;
  }
  nope(){
    console.log("nope");
    this.deleteThat = !this.deleteThat;
    this.showThat = !this.showThat;
  }

  deleteTransaction(){
    console.log("should delete that transaction");
  }

  @Input() transaction: Transaction;
  //transaction coming from transaction model
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  onSelected(){
    //this.transactionSelected.emit();//call emit when emitEmitter is used
    //this.transactionService.getThoseTransactions.emit(this.transaction);
  }

  
}
