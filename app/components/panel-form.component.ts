import { Component, Input } from '@angular/core';
import { Panel }    from './panel';

@Component({
  moduleId: module.id,
  selector: 'panel-form',
  templateUrl: 'panel-form.component.html'
})

export class PanelFormComponent {
  tabOfReviews = [];
  rates = [1,2,3,4,5];
  //données fictives
  model = new Panel(1, "Génial j'adore Yoh", "yohann.atticot@gmail.com");
  submitted = false;
  @Input('review') review: string;
  onSubmit(){this.submitted = true;}
  newPanel() {
    this.model = new Panel(this.model.rate, this.model.reviews, this.model.author);
    this.tabOfReviews.push(this.model);
    console.log("review", this.review);
    console.log("tabOfReviews", this.tabOfReviews);
  }

/*  if(!review){model = new Panel(review.stars, review.body, review.author)}*/

  //TODO: Supprime ça lorsque nous avons terminé
  get diagnostic(){return JSON.stringify(this.model);}

}
