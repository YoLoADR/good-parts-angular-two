import { Component, OnInit, Input } from '@angular/core';
import { Panel }    from './panel';

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
    this.review = {};
  };

  selectTab(setTab: any) {
    this.tab = setTab
  };

  isSelected(checkTab: any) {
    return this.tab === checkTab
  };

  selectReviews(review: any){
    this.review = review;
    console.log("review", review)
  }

  selectCurrentReviews(currentReviews :any){
    console.log("currentReviews", currentReviews);
  }

  @Input('master') masterName: string;
  @Input('product') currentProduct: string;

}
