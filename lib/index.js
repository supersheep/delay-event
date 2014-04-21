// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes
'use strict';

var $ = require("jquery");

var MultiEvent = function (fn, time, opt) {
    var self = this;

    this.fn = fn;
    this.time = time;

    opt = opt || {};

    this._triggerEvent = function (e) {
        e.preventDefault();
        var elem = this,
            type = e.type;

        function funcwrap() {
            return self.fn.call(elem, e);
        }

        clearTimeout(self.timer);

        self.timer = setTimeout(function () {
            funcwrap.call(elem);
        }, self.time);

    };

    this._stopperEvent = function (e) {
        clearTimeout(self.timer);
    };
    return this
};

MultiEvent.prototype.trigger = function (elems, type) {
    elems = $(elems);
    elems.on(type, this._triggerEvent);
    return this;
};

MultiEvent.prototype.stopper = function (elems, type) {
    elems = $(elems);
    elems.on(type, this._stopperEvent);
    return this;
};

MultiEvent.prototype.removeTrigger = function (elems, type) {
    elems = $(elems);
    elems.off(type, this._triggerEvent);
    return this;
};

MultiEvent.prototype.removeStopper = function (elems, type) {
    elems = $(elems);
    elems.off(type, this._stopperEvent)
    return this;
}

module.exports = function(fn, time, opt){
    return new MultiEvent(fn, time, opt);
}