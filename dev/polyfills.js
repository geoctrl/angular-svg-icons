(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "core-js/client/shim", "reflect-metadata"], function (require, exports) {
    "use strict";
    require("core-js/client/shim");
    require("reflect-metadata");
    require('zone.js/dist/zone');
    if (process.env.ENV === 'build') {
    }
    else {
        // development
        Error['stackTraceLimit'] = Infinity;
        require('zone.js/dist/long-stack-trace-zone');
    }
});
