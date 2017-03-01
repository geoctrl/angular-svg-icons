import { Component } from '@angular/core';
import { svgSymbols } from './icons/svg-symbols';

@Component({
  selector: 'app',
  template: `
${svgSymbols}
<div>This is the App</div>
<icon i="search"></icon>
<icon i="home"></icon>
<icon i="person"></icon>
`,

})
export default class {}