export class Transaction {
    public category: string;
    public amount: number;
    public icon: string;
    public date: Date;
    public transactionType: string;
    public account: string;

    constructor(category: string, amount: number, date: Date, transactionType: string, account: string, icon: string) {
        this.category = category;
        this.amount = amount;
        this.icon = icon;
        this.date = date;
        this.transactionType = transactionType;
        this.account = account;
    }

    getCategory(): string {
        return this.category;
    }
}