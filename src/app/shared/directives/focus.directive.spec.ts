import { EventEmitter } from "@angular/core";
import { FocusDirective } from "./focus.directive";

describe("FocusDirective", () => {
  const mockElementRef = {
    nativeElement: {
      focus: () => {}
    }
  };

  const emitter = new EventEmitter<boolean>();

  it("should create an instance", () => {
    const directive = new FocusDirective(mockElementRef as any);
    expect(directive).toBeTruthy();
  });

  it("should change focus to input when event triggered", () => {
    spyOn(mockElementRef.nativeElement, "focus");
    const directive = new FocusDirective(mockElementRef as any);
    directive.eventFocus = emitter;

    directive.ngOnInit();
    emitter.emit(true);

    expect(directive["elementRef"].nativeElement.focus).toHaveBeenCalledTimes(1);
  });
});
