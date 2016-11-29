"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var panel_1 = require('./panel');
var PanelFormComponent = (function () {
    function PanelFormComponent() {
        this.tabOfReviews = [];
        this.rates = [1, 2, 3, 4, 5];
        this.submitted = false;
        this.model = { rate: 5, reviews: "Votre commentaire", author: "Votre noms" };
        console.log(this.model);
    }
    /* ngOnChanges(changes: SimpleChanges) : void {
       if(!this.review){
         this.model = {rate: changes.review.currentValue.stars, reviews:changes.review.currentValue.body, author:changes.review.currentValue.author};
       }
     }*/
    PanelFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    PanelFormComponent.prototype.newPanel = function (data) {
        this.currentReviews.push(new panel_1.Panel(data.rate, data.reviews, data.author));
        console.log("tabOfReviews", this.tabOfReviews);
    };
    Object.defineProperty(PanelFormComponent.prototype, "diagnostic", {
        /*  if(!review){model = new Panel(review.stars, review.body, review.author)}  // console.log("review", this.review);*/
        //TODO: Supprime ça lorsque nous avons terminé
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PanelFormComponent.prototype, "review", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelFormComponent.prototype, "currentReviews", void 0);
    PanelFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel-form',
            templateUrl: 'panel-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PanelFormComponent);
    return PanelFormComponent;
}());
exports.PanelFormComponent = PanelFormComponent;
//# sourceMappingURL=panel-form.component.js.map