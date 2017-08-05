import {Transaction} from './transactions.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {

constructor(private http: Http) { }

//getThoseTransactions = new EventEmitter<Transaction>();

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
getTransaction(transactionId) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get(`http://localhost:3000/transactions/${transactionId}`, options)
  		.map((res) => res.json() );
  }

addTransaction(transaction) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.post('http://localhost:3000/transactions', transaction, options)
  		.map((res) => res.json())
  }

editTransaction(transaction) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.put(`http://localhost:3000/transactions/${transaction._id}`, transaction, options)
  		.map( (res) => res.json());
  }

removeTransaction(transactionId) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.delete(`http://localhost:3000/transactions/${transactionId}`, options)
  		.map( (res) => res.json());
  }
// addTransaction(transaction:Transaction){
//     this.transactions.push(transaction);
// }

// getSomeTransaction() {
//     return this.http.get('http://http://localhost:3000/transactions')
//       .map((res) => res.json());
//   }



}