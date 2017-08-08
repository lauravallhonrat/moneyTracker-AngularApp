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


// ============= BAR CHART ============== //
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels:string[] = ['2 weeks ago', 'last week', 'this week'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Income'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Expense'}
  ];

  public barChartColors: any[] = [
    // backgroundColor: ["#681150", "#B72935", "#CC3335", "#EA5127", "#FF673A", "#FFA439", "#F0DB4A", "#AED87C", "#68BB6D", "#2FA46C" ], 
   { // first color
      backgroundColor: '#EA5127',
      borderColor: '#F2FEF1)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: '#AED87C',
      borderColor: '#F2FEF1',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];



   // ============= DONUT ============== //
  public doughnutChartLabels:string[] = ['food','utilities','clothes', "something","ufie","hfire", "7hcdi", "8hudiw", "9fioee", "10ufivehe"];
  public doughnutChartData:number[] = [30,50,25,75,45,32,89,22,36,64];
 
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public doughnutChartColors: any[] = [{ 
    backgroundColor: ["#681150", "#B72935", "#CC3335", "#EA5127", "#FF673A", "#FFA439", "#F0DB4A", "#AED87C", "#68BB6D", "#2FA46C" ], 
    borderColor: ["#F2FEF1", "#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1"],
    // pointBackgroundColor: ["#fff", "#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
    // pointHoverBackgroundColor: ["#fff", "#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"], 
    // pointHoverBorderColor:["#333", "#333","#333","#333","#333","#333","#333","#333","#333","#333"]
  }];
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
