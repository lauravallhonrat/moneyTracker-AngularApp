import {Transaction} from './transactions.model';
import {EventEmitter,Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {

constructor(private http: Http) { }

//getThoseTransactions = new EventEmitter<Transaction>();


// private transactions: Transaction[] = [
// new Transaction ('some category', 34, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("11/11/2093")),
// new Transaction ('some other category', 5334, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("03/06/2093"))
// ];


getTransactions() {
    // return this.http.get('http://localhost:3000/transactions')
    //     .map((res) => res.json());
    return this.http.get('http://localhost:3000/transactions')
        .map((response) => {
            return (<any>response.json()).map(item => {
                return new Transaction(item.category, item.amount, item.date, item.icon,item.account,item.transactionType);
            });
        });
}


}