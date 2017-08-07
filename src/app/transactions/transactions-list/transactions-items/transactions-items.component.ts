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
  // deleteThat = true;
  
  // myFunction(){
  //   console.log("click bande");
  //   this.deleteIsHidden = false;
  //   this.showThing = false;
  // }
  // nope(){
  //   console.log("nope");
  //   this.deleteThing = false;
  //   this.showThing = true;
  //   console.log(this.deleteThing, this.showThing);
  // }

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
