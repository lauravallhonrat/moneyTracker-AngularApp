import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(
  	private session: SessionService,
  	private router: Router,
  ) { }
  ngOnInit() {
  }
//this for navigation expenses/income
  loadedOverlay = 'expense';
//loads overlay expenses html


  onNavigate(overlay: string){
    this.loadedOverlay = overlay;
  }

}
