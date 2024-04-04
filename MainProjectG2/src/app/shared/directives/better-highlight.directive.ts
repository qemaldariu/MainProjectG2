import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';

  constructor(private elRef: ElementRef, private renderer:Renderer2) {
  }
ngOnInit() {
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','magenta')

}
@HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'
@HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','magenta')
  this.backgroundColor = this.highlightColor
}



  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor = this.defaultColor
  }
}
