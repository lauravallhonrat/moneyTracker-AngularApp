import { Component, OnInit,Input } from '@angular/core';
import {Transaction} from '../../transactions.model';
import {TransactionService} from '../../transactions.service';

@Component({
  selector: 'app-transactions-items',
  templateUrl: './transactions-items.component.html',
  styleUrls: ['./transactions-items.component.css']
})
export class TransactionsItemsComponent implements OnInit {
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

  // whichIcon(category) {
  //   switch (category) {
  //     case "Food":
  //       '<i class="fa fa-cutlery" aria-hidden="true"></i>'
  //       break;
  //     case "Transportation":
  //       '<i class="fa fa-car" aria-hidden="true"></i>'
  //       break;
  //     case "Social":
  //       '<i class="fa fa-glass" aria-hidden="true"></i>'
  //       break;
  //     case "Clothing":
  //       '<i class="fa fa-shopping-bag" aria-hidden="true"></i>'
  //       break;
  //     case "Rent":
  //       '<i class="fa fa-home" aria-hidden="true"></i>'
  //       break;
  //     case "Utilities":
  //       '<i class="fa fa-plug" aria-hidden="true"></i>'
  //       break;
  //     case "Health":
  //       '<i class="fa fa-heartbeat" aria-hidden="true"></i>'
  //       break;
  //     case "Others":
  //       '<i class="fa fa-gift" aria-hidden="true"></i>'
  //       break;
  //     case "Salary":
  //       '<i class="fa fa-suitcase" aria-hidden="true"></i>'
  //       break;
  //     case "Freelance":
  //       '<i class="fa fa-thums-up" aria-hidden="true"></i>'
  //       break;
  //     case "Other":
  //       '<i class="fa fa-star" aria-hidden="true"></i>'
  //       break;
    
  //     default:
  //     '<i class="fa fa-star" aria-hidden="true"></i>'
  //       break;
  //   }
  //}

  
}
