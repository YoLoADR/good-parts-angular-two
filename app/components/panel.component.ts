import { Component, OnInit } from '@angular/core';
import { StoreComponent } from './store.component';
@Component({
  moduleId: module.id,
  selector: 'panel',
  templateUrl: 'panel.component.html'
})

export class PanelComponent implements OnInit{
  tab = 1;
  ngOnInit(){
    this.tab = 1
  };
  selectTab(setTab: any) {
    this.tab = setTab
  };
  isSelected(checkTab: any) {
    return this.tab === checkTab
  };

}
