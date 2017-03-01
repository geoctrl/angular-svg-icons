# Angular Svg Icons

Easily use icons in your Angular app with this component. It uses the `<use>` element to duplicate SVG's without manipulating the DOM (the browser does all the work).

## Install

`npm install angular2-svg-icons --save`

Then add it to the modules that require it:

    import { IconModule } from 'angular2-svg-icons';
    
    @NgModule({
      imports: [IconModule]
    })
    export class SomeModule {}

## Symbol Requirement

You must add all your symbols to your page prior to using this component. For example, you can create a `svg-symbols.ts` file that has all your symbols with the appropriate `id` as the name:

    export const svgSymbols = `
    <svg style="display: none">
        <symbol id="search" d="path-stuff"></symbol>
    </svg>`;
    
Then add this to your application. For example, you can add it to your root component:

    import { Component } from '@angular/core';
    import { svgSymbols } from './components/icons/svg-symbols';
    
    @Component({
      selector: 'app',
      template: `
    ${svgSymbols}
    <rest-of-your-app></rest-of-your-app>`,
    })
    export class RootComponent { }

**NOTE:** It's recommended to hide the `<svg>` or else the entire sheet will be displayed when added to your app.

## Use

    <icon i="search"></icon>

The `i` attribute is the name (id) of the icon. The above code generates the following:

    <svg class="icon"
         x="0" y="0"
         xmlns="http://www.w3.org/2000/svg"
         width="24px"
         height="24px"
         preserveAspectRatio="xMidYMin">
        <use xlink:href="baseUrl/#search" />
    </svg>

### Easy svg to symbol creation

[build-svg-sheet](https://github.com/geoctrl/build-svg-sheet)

I built a Gulp task that takes in an icon json file and then produces an `svg-symbols.ts` file for you. The repo houses all the svg icons, so all you have to do is specify the list of icons you want in your json file: `["search","home","person"]`.

This is pretty specific to my needs (and uses material icons), but you can fork it to create your own.

### Styling

I purposefully left out styles -- the generated icons have an `icon` class so you can style them however you want. Just be aware of the limitations of the `<use>` element ([A guide to SVG <use> elements](http://taye.me/blog/svg/a-guide-to-svg-use-elements/))

    // example of changing color and size
    // remember to style the <icon> element as well
    icon {
        width: 24px;
        height: 24px;
        display: inline-block;
    
        svg {
            fill: #404040;
            width: 24px;
            height: 24px;
        }
    }