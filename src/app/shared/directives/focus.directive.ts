import { Directive, OnInit, Input, EventEmitter, ElementRef } from "@angular/core";

@Directive({
  selector: "[wisFocus]"
})
export class FocusDirective implements OnInit {

  @Input() eventFocus: EventEmitter<boolean>;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.eventFocus.subscribe(event => {
      this.elementRef.nativeElement.focus();
    });
  }
}
