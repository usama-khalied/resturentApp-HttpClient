import { Directive , ElementRef  } from '@angular/core';

@Directive({
  selector: '[appPracdirective]'
})
export class PracdirectiveDirective {

  constructor(private el : ElementRef) {
   this.el.nativeElement.style.color="red" 
   }
   
}
