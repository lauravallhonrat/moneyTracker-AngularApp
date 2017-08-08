import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {

  regular : boolean = false;
  hover : boolean = true;

  onHover() {
    this.regular = !this.regular;
    this.hover = !this.hover;
    console.log("hover");
  }
  onOut() {
    this.regular = !this.regular;
    this.hover = !this.hover;
    console.log("out");
  }

  constructor() { }

  ngOnInit() {
  }

}
