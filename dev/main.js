(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "@angular/core", "@angular/platform-browser-dynamic", "./app/root.module"], function (require, exports) {
    "use strict";
    const core_1 = require("@angular/core");
    const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    // import root ngModule
    const root_module_1 = require("./app/root.module");
    if (process.env.ENV === 'build') {
        core_1.enableProdMode();
    }
    function main() {
        return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(root_module_1.default);
    }
    exports.main = main;
    if (document.readyState === 'complete') {
        main();
    }
    else {
        document.addEventListener('DOMContentLoaded', main);
    }
});
