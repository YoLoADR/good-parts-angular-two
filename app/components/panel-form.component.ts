import { Component, Input } from '@angular/core';
import { Panel }    from './panel';

@Component({
  moduleId: module.id,
  selector: 'panel-form',
  templateUrl: 'panel-form.component.html'
})

export class PanelFormComponent {
  @Input('review') review: string;

  model;
  tabOfReviews : any = [];
  rates = [1,2,3,4,5];
  submitted = false;

  constructor(){
    this.model = {rate: 1, reviews:"Hello", author:"Coucou"};
    console.log(this.model);
  }

  onSubmit(){this.submitted = true;}

  newPanel(data: any) {
    let new_review = new Panel(data.rate, data.reviews, data.author);
    this.tabOfReviews.push(new_review);
    console.log("new_review", new_review);
    console.log("tabOfReviews", this.tabOfReviews);
  }

/*  if(!review){model = new Panel(review.stars, review.body, review.author)}  // console.log("review", this.review);*/

  //TODO: Supprime ça lorsque nous avons terminé
  get diagnostic(){return JSON.stringify(this.model);}

}
