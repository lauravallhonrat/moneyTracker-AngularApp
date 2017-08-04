import { Component,OnInit, EventEmitter,Output, Input } from '@angular/core';
import {MdSidenavModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() featureSelected = new EventEmitter<string>();

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

  loadedOverlay = 'expense';
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

export default AppComponent;

