import { Component, OnInit, EventEmitter,Output } from '@angular/core';
//import eventEmitter and output decorator from core
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //call new even emitter for click event and adds output decorator, the click event contains expense keyword (which will be called on the app component later on)
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
    onSelect(feature : string){
      this.featureSelected.emit(feature);
    }
}
