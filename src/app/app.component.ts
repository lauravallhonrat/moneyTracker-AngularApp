import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedOverlay = 'expense';
//loads overlay expenses html
  onNavigate(overlay: string){
    this.loadedOverlay = overlay;
  }
}
