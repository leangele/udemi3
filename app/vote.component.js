"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    }
    VoteComponent.prototype.onClick = function ($event, vote) {
        this.votes = this.votes + vote;
        if (this.initVotes + this.maxUp <= this.votes)
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
    };
    return VoteComponent;
}());
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: "\n    <div style=\"width=20px\">\n            <i class=\"glyphicon glyphicon-menu-up\" [class.blue]=\"voteUp\" (click)=\"onClick($event,+1)\"></i>\n            <span>{{votes}}</span>\n           <i class=\"glyphicon glyphicon-menu-down\" [class.blue]=\"voteDown\" (click)=\"onClick($event,-1)\"></i>\n       </div>\n    ",
        styles: ["blue{ color: red;}\n    "]
    })
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map