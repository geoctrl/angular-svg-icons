(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "@angular/platform-browser", "@angular/platform-browser-dynamic", "@angular/core", "@angular/common", "@angular/http", "@angular/router", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/operator/debounce", "rxjs/add/operator/distinctUntilChanged", "rxjs/add/operator/map", "rxjs/add/operator/switchMap", "rxjs/add/operator/toPromise"], function (require, exports) {
    "use strict";
    // angular 2
    require("@angular/platform-browser");
    require("@angular/platform-browser-dynamic");
    require("@angular/core");
    require("@angular/common");
    require("@angular/http");
    require("@angular/router");
    // rxjs statics
    require("rxjs/add/observable/throw");
    // rxjs operators
    require("rxjs/add/operator/catch");
    require("rxjs/add/operator/debounce");
    require("rxjs/add/operator/distinctUntilChanged");
    require("rxjs/add/operator/map");
    require("rxjs/add/operator/switchMap");
    require("rxjs/add/operator/toPromise");
});
