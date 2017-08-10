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

  transactions = [];
  transactionsName = [];
  tempArr = [];
  charObj = {};
  totalSum = 0;

  ngOnInit() {
      let user = JSON.parse(localStorage.getItem("user"));
   
      this.transactionService.getTransactions()
      .subscribe(res => {
      this.transactions = this.transactionService.get()
      this.charObj = this.transactionService.getCategoryNames()  
      console.log("COMPONENTTTTTT", this.charObj);
      this.getCategoryNames()
      });

  }

  getCategoryNames() {

    console.log("OBJECT ON COMPONENT", this.charObj["amount"]);

    this.doughnutChartData = this.charObj["amount"]
    this.charObj["labels"].forEach((arr) => {
      this.doughnutChartLabels.push(arr)
    })
    console.log("DOUGHNUT", this.doughnutChartData, this.doughnutChartLabels);
    
  }

   // ============= DONUT ============== //
  
 
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public doughnutChartColors: any[] = [{ 
    backgroundColor: ["#681150", "#B72935", "#CC3335", "#EA5127", "#FF673A", "#FFA439", "#F0DB4A", "#AED87C", "#68BB6D", "#2FA46C" ], 
    borderColor: ["#F2FEF1", "#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1","#F2FEF1"],
    
  }];
 
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];

  public chartHovered(e: any): void {
    console.log(e);
  }

}
