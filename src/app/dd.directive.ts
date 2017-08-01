import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DdDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
