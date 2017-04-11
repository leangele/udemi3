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
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.quantity = 3;
        this.isFavorite = false;
    }
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        this.quantity += this.isFavorite ? 1 : -1;
    };
    return FavoriteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "quantity", void 0);
__decorate([
    core_1.Input('is-Favorite'),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "isFavorite", void 0);
FavoriteComponent = __decorate([
    core_1.Component({
        selector: 'favorite',
        templateUrl: 'app/favorite.template.html',
        styles: ["\n    .glyphicon-heart{\n        color:#ccc;\n        cursor: pointer;\n    },  \n    .highlighted{}\n        color:deeppink;  \n    "]
    })
], FavoriteComponent);
exports.FavoriteComponent = FavoriteComponent;
//# sourceMappingURL=Favorite.component.js.map