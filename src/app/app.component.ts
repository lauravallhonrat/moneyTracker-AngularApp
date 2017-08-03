import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(
  	private session: SessionService,
  	private router: Router,
  ) { }
 
 
 //this for navigation expenses/income
  loadedOverlay = 'expense';
//loads overlay expenses html


  onNavigate(overlay: string){
    this.loadedOverlay = overlay;
  }



  // private _opened: boolean = false;

  // private _toggleSidebar() {
  //   this._opened = !this._opened;
  // }
  
}

