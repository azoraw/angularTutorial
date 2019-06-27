import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective implements OnChanges {

  @Input() set appSetColor(value) {
    this.renderer.setStyle(this.el.nativeElement, 'background', value)
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { console.log('set color works') }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
