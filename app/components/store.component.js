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
var gems = [
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
var StoreComponent = (function () {
    function StoreComponent() {
        this.store = gems;
    }
    StoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'store',
            templateUrl: 'store.component.html',
            directives: [panel_1.Panel]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map