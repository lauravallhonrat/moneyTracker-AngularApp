import { Component,OnInit, EventEmitter,Output, Input } from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
import {MdSidenavModule} from '@angular/material';

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
 
}

export default AppComponent;

