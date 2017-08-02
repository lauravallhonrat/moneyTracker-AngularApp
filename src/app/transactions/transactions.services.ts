
import {Transaction} from './transactions.model';

export class TransactionService {
private transactions: Transaction[] = [
new Transaction ('some category', 34, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("11/11/2093")),
new Transaction ('some other category', 5334, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtbljyNDGAqvVwzfKo5tk4jtnZubU4SHrKtB7wl7S0qALzD2AUg', new Date("03/06/2093"))
];


getTransactions() {
return this.transactions.slice();
// splice returns a new array
}

}