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
var VoteComponent = (function () {
    function VoteComponent() {
        this.initVotes = 10;
        this.votes = this.initVotes;
        this.voteUp = false;
        this.voteDown = false;
        this.maxUp = 1;
        this.minDown = -1;
        this.change = new core_1.EventEmitter();
    }
    VoteComponent.prototype.onClick = function ($event, vote) {
        this.votes = this.votes + vote;
        if (this.votes == this.initVotes) {
            this.voteUp = false;
            this.voteDown = false;
        }
        else {
            if (vote > 0) {
                this.voteUp = true;
                this.voteDown = false;
            }
            else {
                this.voteUp = false;
                this.voteDown = true;
            }
        }
        this.change.emit({ newValue: this.votes });
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input("init-Votes"),
    __metadata("design:type", Object)
], VoteComponent.prototype, "initVotes", void 0);
__decorate([
    core_1.Input("votes"),
    __metadata("design:type", Object)
], VoteComponent.prototype, "votes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "change", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: "\n    <div class=\"voter\">\n            <i class=\"glyphicon glyphicon-menu-up vote-button\" [class.blue]=\"voteUp\" (click)=\"onClick($event,+1)\"></i>\n            <span>{{votes}}</span>\n           <i class=\"glyphicon glyphicon-menu-down vote-button\" [class.blue]=\"voteDown\" (click)=\"onClick($event,-1)\"></i>\n       </div>\n    ",
        styles: ["\n        .voter{\n        width:20px;\n        text-align:center;\n        color=#999\n        }\n        .vote-button{\n            cursor:pointer;\n        }\n        .blue{\n         color: blue;\n        }\n    "]
    })
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map