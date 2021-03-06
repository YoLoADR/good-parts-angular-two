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
var PanelComponent = (function () {
    function PanelComponent() {
        this.tab = 1;
        this.review = {};
    }
    PanelComponent.prototype.ngOnInit = function () {
        this.tab = 1;
        this.review = {};
    };
    ;
    PanelComponent.prototype.selectTab = function (setTab) {
        this.tab = setTab;
    };
    ;
    PanelComponent.prototype.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };
    ;
    PanelComponent.prototype.selectReviews = function (review) {
        this.review = review;
        console.log("review", review);
    };
    PanelComponent.prototype.selectCurrentReviews = function (currentReviews) {
        console.log("currentReviews", currentReviews);
    };
    __decorate([
        core_1.Input('master'), 
        __metadata('design:type', String)
    ], PanelComponent.prototype, "masterName", void 0);
    __decorate([
        core_1.Input('product'), 
        __metadata('design:type', String)
    ], PanelComponent.prototype, "currentProduct", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel',
            templateUrl: 'panel.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map