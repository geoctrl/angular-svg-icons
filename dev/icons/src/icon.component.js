var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
let IconComponent = class IconComponent {
    constructor() {
        this.baseUrl = document.location.href;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IconComponent.prototype, "i", void 0);
IconComponent = __decorate([
    Component({
        selector: 'icon',
        template: `
<svg class="icon"
     x="0px" y="0px"
     xmlns="http://www.w3.org/2000/svg"
     width="24px"
     height="24px"
     preserveAspectRatio="xMidYMin"
     viewBox="0 0 24 24">
    <use [attr.xlink:href]="baseUrl+'#'+i" />
</svg>
`
    }),
    __metadata("design:paramtypes", [])
], IconComponent);
export { IconComponent };
