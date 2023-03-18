import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myClass]'
})
export class MyClassDirective {

  constructor(private element:ElementRef) { }

  @Input("myClass") set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
