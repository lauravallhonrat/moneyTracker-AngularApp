import { Component, OnInit, EventEmitter,Output } from '@angular/core';
//import eventEmitter and output from core
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //call new even emitter for click event
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
    onSelect(feature : string){
      this.featureSelected.emit(feature);
    }
}
