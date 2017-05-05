import { Component } from '@angular/core';
import { svgSymbols } from './svg-symbols';

@Component({
  selector: 'app',
  template: `
${svgSymbols}
<div>app!</div>
<icon i="language-typescript"></icon>
<icon i="castle"></icon>
<icon i="account"></icon>
`,

})
export default class {}