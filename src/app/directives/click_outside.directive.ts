import { Directive, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Input() clickOutsideExceptions: any;
  @Output() public clickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    let clickedInside1 = this.clickOutsideExceptions.filter(e => e).some(e => {
      let exception = (e.nativeElement) ? e.nativeElement : e;
      return exception.contains(targetElement);
    });
    console.log(clickedInside1);
    let clickedInside2 = this._elementRef.nativeElement.contains(targetElement);
    console.log(clickedInside1, clickedInside2);
    if (!(clickedInside1 && clickedInside2)) {
      this.clickOutside.emit(null);
    }
  }
}
