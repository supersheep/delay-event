# delay-event

In many situations, we may need to trigger a event after a certain time, and cancel it with another event.

Typically, let's say we have a menu, and we want the menu item to expand only when we stay on it for a moment, instead of expand an packup frequently on mouseenter and mouseleave.

## Installation

`cortex install delay-event --save`

## Usage

```js
// menu example
var menu = $(".menu");
function expand(){
    console.log("expand",this,e);
}

delay(expand,200)
    .trigger(menu,"mouseenter");
    .stopper(menu,'mouseleave');
```

```js
// input suggest example
var input = $(".input");
function suggest(){
    console.log("suggest",this,e);
}
delay(suggest,200)
    .trigger(input,"keyup");
```

## API

### delayEvent(handler, time)

    returns a new DelayEvent(handler, time) instance

### Class: delayEvent.DelayEvent()


    - handler `Function` The event handler that would be triggered.
    - time `Number` The delay time in millisecond


### delayEvent.trigger(elem,eventType)

    - elem `DOMElement`
    - eventType `String`

    add a trigger element-event pair for a `DelayEvent` instance.

### delayEvent.removeTrigger(elem,eventType)

    - elem `DOMElement`
    - eventType `String`

    remove a trigger element-event pair for a instance.

### delayEvent.stopper(elem,eventType)

    - elem `DOMElement`
    - eventType `String`

    add a timer cleaner for a instance.

### delayEvent.removeStopper

    remove a timer cleaner for a instance.