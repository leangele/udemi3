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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TweetComponent = (function () {
    function TweetComponent() {
        console.log(this.data);
    }
    return TweetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "data", void 0);
TweetComponent = __decorate([
    core_1.Component({
        selector: 'tweet',
        template: "\n    <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" [src]=\"data.imageUrl\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    {{ data.author }}<span class=\"gray\">{{data.handle}}\n                </span></h4>\n                <p>{{data.body}}</p>\n                <favorite [quantity]=\"data.totalLikes\" [isFavorite]=\"data.iLike\"></favorite>\n            </div>\n        </div>\n    ",
        styles: ["\n    .gray{\n         color: #ccc;\n    }\n     .media {\n            margin-bottom: 20px;\n        }\n        \n        .media-object {\n            border-radius: 10px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], TweetComponent);
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map