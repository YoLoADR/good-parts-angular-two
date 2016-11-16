import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StoreComponent } from './components/store.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StoreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
