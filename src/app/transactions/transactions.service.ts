import { Transaction } from './transactions.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class TransactionService {

	public _subject = new Subject<Object>();
	public event = this._subject.asObservable();
	public publish(data: any) {
		console.log(data);
		this._subject.next(data);
	}

	private transactions: Array<any> = [];
	private balance = 0;
	private BASE_URL: string = 'http://localhost:3000';

	constructor(
		private http: Http,
		private session: SessionService
	) {
	}

	get(): Array<any> {
		return this.transactions;
	}


	getTransactions() {
		let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
		let options = new RequestOptions({ headers: headers });

		return this.http.get(`${this.BASE_URL}/api/transactions`, options)
			.map((response) => {
				console.log("THE good RESPONSE", response);

				this.transactions = response.json();
			});
	}


	add(transaction) {
		let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(`${this.BASE_URL}/api/transactions`, transaction, options)
			.map(res => {
				console.log("service", res)
				console.log("service", res.json())
				this.transactions.push(res.json().newTransactionEntry);
				this.publish(res.json().user)
				//publish->communication between sibling components
			});
	}

	edit(transaction) {
		let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
		let options = new RequestOptions({ headers: headers });
		return this.http.put(`${this.BASE_URL}/api/transactions/${transaction._id}`, transaction, options)
			.map((res) => res.json());
	}

	remove(transaction) {

		let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
		let options = new RequestOptions({ headers: headers });
		return this.http.delete(`${this.BASE_URL}/api/transactions/${transaction._id}`, options)
			.map((response) => {
				console.log("THE RESPONSE", response);

				this.transactions = response.json();

				//this.calculateBalance();
			});
	}
}