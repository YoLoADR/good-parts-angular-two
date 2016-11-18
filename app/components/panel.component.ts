import { Component } from '@angular/core';
import { StoreComponent } from './store.component';
@Component({
  moduleId: module.id,
  selector: 'panel',
  templateUrl: 'panel.component.html'
})

export class PanelComponent {
  ngOnInit() {
    this.tab = 1;
  }
  selectTab(setTab){
    this.tab = setTab;
  }
}
