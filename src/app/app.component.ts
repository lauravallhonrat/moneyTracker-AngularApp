import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedOverlay = 'expense';
//loads overlay expenses html

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

