import { Component } from '@angular/core';
import { Panel } from './panel';
const gems =[
  {
    id: 1,
    name: "PRISMATIC",
    description: "Nostrud dolor dolore elit dolor exercitation tempor. Sint ea amet fugiat pariatur ipsum irure adipisicing commodo. Officia quis nostrud eu cupidatat dolor minim deserunt dolore adipisicing amet tempor velit laboris. Quis nostrud ullamco aliqua quis esse consequat culpa exercitation consequat. Sint ut occaecat consequat dolor. Consectetur do reprehenderit ea commodo qui consectetur ut mollit.",
    picture: "http://lorempixel.com/400/200/"
  },
  {
    id: 2,
    name: "MOLTONIC",
    description: "Officia velit in excepteur minim sunt cupidatat. Culpa amet commodo laboris do id adipisicing mollit ad veniam duis ut quis enim. Incididunt tempor nisi non laboris minim nulla eiusmod et esse incididunt adipisicing id deserunt magna. Dolor nisi veniam eiusmod incididunt aute eiusmod pariatur culpa. Enim id exercitation ea veniam. Fugiat consectetur qui aliqua occaecat laboris exercitation proident culpa commodo proident.",
    picture: "http://lorempixel.com/400/200/"
  },
  {
    id: 3,
    name: "VENOFLEX",
    description: "Esse amet consectetur aliqua voluptate officia. Aliqua adipisicing amet Lorem qui Lorem fugiat officia nulla laboris officia ad. Voluptate tempor dolor ex officia. Nisi dolore laborum duis adipisicing dolor officia nostrud enim ut sunt ex ut. Veniam ex adipisicing duis amet dolor duis fugiat et qui ex ea est adipisicing anim. Eiusmod sit labore nisi mollit.",
    picture: "http://lorempixel.com/400/200/"
  }
];
@Component({
  moduleId: module.id,
  selector: 'store',
  templateUrl: 'store.component.html',
  directives: [Panel]
})

export class StoreComponent {
 store = gems;

}
