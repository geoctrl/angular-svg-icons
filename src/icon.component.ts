import { Component, Input } from '@angular/core';

@Component({
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
})
export class IconComponent {
  @Input() i: string;
  baseUrl = document.location.href;
}