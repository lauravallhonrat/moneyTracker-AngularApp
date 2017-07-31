export class Transaction {
    public category: Array<string>;
    public amount: number;
    public iconPath: string;
    public date: Date;

    constructor(category: Array<string>, amount: number, iconPath: string, date: Date) {
        this.category = category;
        this.amount = amount;
        this.iconPath = iconPath;
        this.date = date;
    }
}