import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppComponent }  from './app.component';
import { StoreComponent } from './components/store.component';
import { PanelComponent } from './components/panel.component';
import { PanelFormComponent } from './components/panel-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StoreComponent, PanelComponent, PanelFormComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
