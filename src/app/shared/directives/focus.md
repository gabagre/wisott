# Focus Directive

## BLUF

The focus directive is useful for forcing browser focus to a specific element.

## Use cases

Use to enhance accessibility, or just when you need the browser focus to be somewhere specific.

## Usage

In template:
```
<input type="text" wisFocus [eventFocus]="focusTrigger">
```
In component:
```
eventTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();

trigger() {
  this.eventTrigger.emit(true);
}
```