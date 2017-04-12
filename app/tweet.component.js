"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TweetComponent = (function () {
    function TweetComponent() {
        this.like = false;
    }
    return TweetComponent;
}());
TweetComponent = __decorate([
    core_1.Component({
        selector: "tweet",
        template: "\n    <div *ngFor=\"let tweettotal of tweetsTotal\">\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" [src]=\"image\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{author}}<span class=\"gray\">{{tweeterHandler}}</span></h4>\n                <p>{{tweet}}</p>\n                <favorite [quantity]=\"\" ></favorite>\n            </div>\n        </div>\n    </div>\n    ",
    })
], TweetComponent);
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map