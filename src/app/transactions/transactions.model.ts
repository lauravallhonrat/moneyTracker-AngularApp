export class Transaction {
    public category: string;
    public amount: number;
    public iconPath: string;
    public date: Date;

    constructor(category: string, amount: number, iconPath: string, date: Date) {
        this.category = category;
        this.amount = amount;
        this.iconPath = iconPath;
        this.date = date;
    }
}