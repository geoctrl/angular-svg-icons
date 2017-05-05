import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import './sass/main.scss';
import AppComponent from './app.component';

import { IconModule } from './icons/icon.module';

@NgModule({
  imports: [
    BrowserModule,
    IconModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export default class AppModule { }