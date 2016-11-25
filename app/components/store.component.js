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
var gems = [
    {
        id: 1,
        name: "PRISMATIC",
        description: "Nostrud dolor dolore elit dolor exercitation tempor. Sint ea amet fugiat pariatur ipsum irure adipisicing commodo. Officia quis nostrud eu cupidatat dolor minim deserunt dolore adipisicing amet tempor velit laboris. Quis nostrud ullamco aliqua quis esse consequat culpa exercitation consequat. Sint ut occaecat consequat dolor. Consectetur do reprehenderit ea commodo qui consectetur ut mollit.",
        picture: "http://lorempicsum.com/simpsons/627/200/3",
        about: "Dolor nostrud pariatur laborum laborum reprehenderit fugiat nulla commodo laboris. Do labore exercitation culpa reprehenderit. Veniam aliqua duis pariatur velit fugiat ex ad.\r\n",
        address: "741 Miller Avenue, Mulino, Oklahoma, 536",
        reviews: [
            {
                stars: 5,
                body: "Hello, Tania Petty! You have 3 unread messages.",
                author: "taniapetty@crustatia.com",
            },
            {
                stars: 1,
                body: "Pariatur cupidatat ipsum enim sit anim",
                author: "anthonyprice@isoswitch.com",
            }
        ]
    },
    {
        id: 2,
        name: "MOLTONIC",
        description: "Officia velit in excepteur minim sunt cupidatat. Culpa amet commodo laboris do id adipisicing mollit ad veniam duis ut quis enim. Incididunt tempor nisi non laboris minim nulla eiusmod et esse incididunt adipisicing id deserunt magna. Dolor nisi veniam eiusmod incididunt aute eiusmod pariatur culpa. Enim id exercitation ea veniam. Fugiat consectetur qui aliqua occaecat laboris exercitation proident culpa commodo proident.",
        picture: "http://lorempicsum.com/futurama/627/200/3",
        about: "Deserunt culpa excepteur commodo irure laborum commodo. Duis aute non consectetur anim mollit do voluptate adipisicing in ullamco. Sit dolor eiusmod et veniam.\r\n",
        address: "153 Fountain Avenue, Crown, Federated States Of Micronesia, 6450",
        reviews: [
            {
                stars: 4,
                body: "Hello, Gonzalez Ellis! You have 2 unread messages.",
                author: "gonzalezellis@ecraze.com",
            },
            {
                stars: 2,
                body: "Nostrud irure ex exercitation Lorem ea minim sunt dolore",
                author: "blanchardmerritt@isoswitch.comm",
            }
        ]
    },
    {
        id: 3,
        name: "VENOFLEX",
        description: "Esse amet consectetur aliqua voluptate officia. Aliqua adipisicing amet Lorem qui Lorem fugiat officia nulla laboris officia ad. Voluptate tempor dolor ex officia. Nisi dolore laborum duis adipisicing dolor officia nostrud enim ut sunt ex ut. Veniam ex adipisicing duis amet dolor duis fugiat et qui ex ea est adipisicing anim. Eiusmod sit labore nisi mollit.",
        picture: "http://lorempicsum.com/rio/627/200/3",
        about: "Id et labore nisi laborum sint ut labore qui in anim. Aliquip laboris officia cillum aute irure consequat nisi. Nisi ipsum qui quis ipsum est dolore nisi qui commodo non amet nisi. Culpa cupidatat laboris exercitation esse qui anim.\r\n",
        address: "798 Howard Alley, Wawona, New Mexico, 3863",
        reviews: [
            {
                stars: 3,
                body: "Hello, Naomi Humphrey! You have 1 unread messages.",
                author: "naomihumphrey@kyaguru.com",
            },
            {
                stars: 5,
                body: "Ipsum consectetur nulla esse esse.",
                author: "faulknerhopkins@isoswitch.com",
            },
            {
                stars: 4,
                body: "Officia aute elit qui culpa esse velit et.",
                author: "concepcionhunter@isoswitch.com",
            }
        ]
    }
];
var StoreComponent = (function () {
    function StoreComponent() {
        this.store = gems;
        this.master = 'Master';
    }
    StoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'store',
            templateUrl: 'store.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map