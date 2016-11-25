import { Component, OnInit, Input } from '@angular/core';
import { StoreComponent } from './store.component';
@Component({
  moduleId: module.id,
  selector: 'panel',
  templateUrl: 'panel.component.html'
})

export class PanelComponent implements OnInit{
  tab = 1;
  review = {};
  ngOnInit(){
    this.tab = 1
  };
  selectTab(setTab: any) {
    this.tab = setTab
  };
  isSelected(checkTab: any) {
    return this.tab === checkTab
  };

  selectReviews(review: any){
    this.review = review;
    console.log("review", review);
  }
  @Input('master') masterName: string;
  @Input('product') currentProduct: string;

}
