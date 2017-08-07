import {Transaction} from './transactions.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransactionService {

	private transactionSubject = new Subject<any>();

constructor(
	private http: Http,
	private session: SessionService
) { }

//getThoseTransactions = new EventEmitter<Transaction>();

getTransactions() {
	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
	let options = new RequestOptions({ headers: headers });
	  
	return this.http.get(`http://localhost:3000/api/transactions`, options)
        .map((response) => {
		return response.json();
		
            // return (<any>response.json()).map(item => {
            //     return new Transaction(item.category, item.amount, item.date,item.account,item.transactionType, item.icon);
            // }); // ORDER MATTERS
        });
}
// getTransaction(id) {
//   	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
//   	let options = new RequestOptions({ headers: headers });
//   	return this.http.get(`http://localhost:3000/transactions/${id}`, options)
//   		.map((res) => res.json());
//   }

add(transaction) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
	let options = new RequestOptions({ headers: headers });
	  return this.http.post(`http://localhost:3000/api/transactions`, transaction.value, options)
	  .map((res) => {res.json()})
  }

edit(transaction) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.put(`http://localhost:3000/api/transactions/${transaction._id}`, transaction, options)
  		.map( (res) => res.json());
  }

remove(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.delete(`http://localhost:3000/api/transactions/${id}`, options)
  		.map( (res) => res.json());
  }

transactionAdded(obj: any) {
	console.log("Streaming", obj);
	this.transactionSubject.next({text: obj});
}

getTransactionAdded(): Observable<any> {
	return this.transactionSubject.asObservable();
}

// addTransaction(transaction:Transaction){
//     this.transactions.push(transaction);
// }

// getSomeTransaction() {
//     return this.http.get('http://http://localhost:3000/transactions')
//       .map((res) => res.json());
//   }



}