import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private elementRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set show(times: number) {
    this.viewContainer.clear();
    for (let i = 1; i <= times; i++) {
      this.viewContainer.createEmbeddedView(this.elementRef,{});
    }
  }
}
