import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[jidaiClickOutside]'
})
export class ClickOutsideDirective {
  @Output() public clickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    return this._elementRef.nativeElement.contains(targetElement);
  }
}
