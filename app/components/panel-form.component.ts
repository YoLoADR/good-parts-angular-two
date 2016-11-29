import {Component, Input, SimpleChanges} from '@angular/core';
import { Panel }    from './panel';

@Component({
  moduleId: module.id,
  selector: 'panel-form',
  templateUrl: 'panel-form.component.html'
})

export class PanelFormComponent {

  @Input() review: string;
  @Input() currentReviews: any;

  model : any;
  tabOfReviews : any = [];
  rates = [1,2,3,4,5];
  submitted = false;

  constructor(){
    this.model = {rate: 5, reviews:"Votre commentaire", author:"Votre noms"};
    console.log(this.model);
  }


 /* ngOnChanges(changes: SimpleChanges) : void {
    if(!this.review){
      this.model = {rate: changes.review.currentValue.stars, reviews:changes.review.currentValue.body, author:changes.review.currentValue.author};
    }
  }*/

  onSubmit(){
    this.submitted = true;
  }

  newPanel(data: any) {
    this.currentReviews.push(new Panel(data.rate, data.reviews, data.author));
    console.log("tabOfReviews", this.tabOfReviews);
  }

/*  if(!review){model = new Panel(review.stars, review.body, review.author)}  // console.log("review", this.review);*/

  //TODO: Supprime ça lorsque nous avons terminé
  get diagnostic(){return JSON.stringify(this.model);}

}
