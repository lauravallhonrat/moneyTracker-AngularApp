import { Component,OnInit, EventEmitter,Output } from '@angular/core';
import {MdSidenavModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedOverlay = 'expense';
//loads overlay expenses html

@Output() featureSelected = new EventEmitter<string>();

onSelect(feature : string){
      this.featureSelected.emit(feature);
    }

// private visible: boolean = false;
//     // when MyBComponent emits event change visible value (which is then passed to MyAComponent)
//     changeVisible() {
//     if (this.visible === false) {
//     this.visible = true;
//     } else {
//         this.visible = false;
//         }      
//     }

  onNavigate(overlay: string){
    this.loadedOverlay = overlay;
  }



  // private _opened: boolean = false;

  // private _toggleSidebar() {
  //   this._opened = !this._opened;
  // }
  
}

