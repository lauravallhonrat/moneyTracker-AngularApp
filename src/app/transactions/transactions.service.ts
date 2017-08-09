import {Transaction} from './transactions.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TransactionService {

	private transactions: Array<any> = [];
	private balance = 0;

constructor(
	private http: Http,
	private session: SessionService
) {
}

get(): Array<any> {
	   return this.transactions; 
}

getBalance(): number {
	return this.balance
}

calculateBalance() {
	this.balance = 0;
this.transactions.forEach((transaction)=>{
			this.balance = this.balance + transaction.amount
			console.log("balance inside", this.balance);
			
		})
}

getTransactions() {
	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
	let options = new RequestOptions({ headers: headers });
	  
	return this.http.get(`http://localhost:3000/api/transactions`, options)
        .map((response) => {
						  console.log("THE good RESPONSE", response);

		this.transactions = response.json();
		this.calculateBalance();
            // return (<any>response.json()).map(item => {
            //     return new Transaction(item.category, item.amount, item.date,item.account,item.transactionType, item.icon);
            // }); // ORDER MATTERS
        });
}


add(transaction) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
	let options = new RequestOptions({ headers: headers });
	return this.http.post(`http://localhost:3000/api/transactions`, transaction, options)
	  .map(res => {
		  this.transactions.push(res.json());
			this.calculateBalance();
	  });
  }

edit(transaction) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.put(`http://localhost:3000/api/transactions/${transaction._id}`, transaction, options)
  		.map( (res) => res.json());
  }

remove(transaction) {

  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.delete(`http://localhost:3000/api/transactions/${transaction._id}`, options)
  		.map((response) => {
			  console.log("THE RESPONSE", response);
			  
		this.transactions = response.json();
		this.calculateBalance();
		});
}

}