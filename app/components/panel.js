"use strict";
var Panel = (function () {
    function Panel(rate, reviews, author) {
        this.rate = rate;
        this.reviews = reviews;
        this.author = author;
    }
    Panel.prototype.getRate = function () {
        return this.rate;
    };
    Panel.prototype.getReviews = function () {
        return this.reviews;
    };
    Panel.prototype.getAuthor = function () {
        return this.author;
    };
    Panel.prototype.setRate = function (rate) {
        this.rate = rate;
    };
    Panel.prototype.setReviews = function (reviews) {
        this.reviews = reviews;
    };
    Panel.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Panel.prototype.toString = function () {
        return this;
    };
    return Panel;
}());
exports.Panel = Panel;
//# sourceMappingURL=panel.js.map