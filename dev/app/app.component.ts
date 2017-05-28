import { Component } from '@angular/core';
import { svgSymbols } from './svg-symbols';

@Component({
  selector: 'app',
  template: `
${svgSymbols}
<div>app!</div>
<icon name="language-typescript"></icon>
<icon name="castle"></icon>
<icon name="account"></icon>
`,

})
export default class {}