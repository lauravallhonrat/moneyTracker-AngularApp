import {Transaction} from './transactions.model';
import {EventEmitter,Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {

constructor(private http: Http) { }

getThoseTransactions = new EventEmitter<Transaction>();

getTransactions() {
    // return this.http.get('http://localhost:3000/transactions')
    //     .map((res) => res.json());
    return this.http.get('http://localhost:3000/transactions')
        .map((response) => {
            return (<any>response.json()).map(item => {
                return new Transaction(item.category, item.amount, item.date,item.account,item.transactionType, item.icon);
            }); // ORDER MATTERS
        });
}

// addTransaction(transaction:Transaction){
//     this.transactions.push(transaction);
// }

// getSomeTransaction() {
//     return this.http.get('http://http://localhost:3000/transactions')
//       .map((res) => res.json());
//   }



}