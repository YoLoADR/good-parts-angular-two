"use strict";
var Panel = (function () {
    function Panel(stars, body, author) {
        this.stars = stars;
        this.body = body;
        this.author = author;
    }
    Panel.prototype.getRate = function () {
        return this.stars;
    };
    Panel.prototype.getReviews = function () {
        return this.body;
    };
    Panel.prototype.getAuthor = function () {
        return this.author;
    };
    Panel.prototype.setRate = function (stars) {
        this.stars = stars;
    };
    Panel.prototype.setReviews = function (body) {
        this.body = body;
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