import { Component,OnInit, EventEmitter,Output, Input } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
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
  logout(){
    this.session.logout();
  }

  onSelect(feature : string){
    this.featureSelected.emit(feature);
  }
  // onNavigate(overlay: string){
  //   this.loadedOverlay = overlay;
  // }

  onHide() {
    this.overlayIncIsHidden = true;
    this.overlayIsHidden = true;
  }

  // ======= THE TOGGLING ======== // 

  overlayIsHidden = true;
  overlayIncIsHidden = true;
  //loads overlay expenses html - PAS EFFACER

  toggle_class(){
    this.overlayIsHidden = !this.overlayIsHidden;
    this.overlayIncIsHidden = true;
  }

  loadedOverlayInc = 'income';
  //loads overlay inc html - PAS EFFACER

  toggle_classInc(){
    this.overlayIncIsHidden = !this.overlayIncIsHidden;
    this.overlayIsHidden = true;
  }

}
