import { Component, OnInit,Input } from '@angular/core';
import {Transaction} from '../transactions/transactions.model';
import {TransactionService} from '../transactions/transactions.service'
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }
@Input() transaction: Transaction;
transactions: Transaction[];
  ngOnInit() {
        let user = JSON.parse(localStorage.getItem("user"))
    // this.transactionService.getTransactions(user)
    //   .subscribe((_transactions) => {
    //     this.transactions = _transactions;
    //   });
  }

public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['food','utilities','clothes','party'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81], label: 'Series A'}
  ];



   // Doughnut
  public doughnutChartLabels:string[] = ['food','utilities','clothes','party'];
  public doughnutChartData:number[] = [30,50,25,75];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
