import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StoreComponent } from './components/store.component';
import { PanelComponent } from './components/panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StoreComponent, PanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
