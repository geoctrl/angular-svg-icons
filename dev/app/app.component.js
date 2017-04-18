var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "@angular/core", "./icons/svg-symbols"], function (require, exports) {
    "use strict";
    const core_1 = require("@angular/core");
    const svg_symbols_1 = require("./icons/svg-symbols");
    let default_1 = class {
    };
    default_1 = __decorate([
        core_1.Component({
            selector: 'app',
            template: `
${svg_symbols_1.svgSymbols}
<div>This is the App</div>
<icon i="search"></icon>
<icon i="home"></icon>
<icon i="person"></icon>
`,
        }),
        __metadata("design:paramtypes", [])
    ], default_1);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
});
