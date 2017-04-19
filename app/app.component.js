"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.task = {
            title: "review application",
            assignee: null
        };
        this.course = {
            title: "angular 2 for beginners",
            rating: 4.9745,
            student: 5981,
            price: 99.95,
            releaseDate: new Date(2016, 3, 1)
        };
        this.postArticle = {
            title: "angular 2 tutorial for beginner ",
            body: "\n      This comes on top of award winning coverage of core C# features, \n      both old and new, that have made the previous editions of this book so popular.\n      Readers will gain a solid foundation of object-oriented development techniques, \n      attributes and reflection,\n      generics and collections as well as numerous advanced topics not found in other texts \n      (such as CIL opcodes and emitting dynamic assemblies).\n      "
        };
        this.viewMode = 'map';
        this.courses = ['Course1', 'Course2', 'Course3'];
        this.title = 'hola mundo';
        this.isActive = true;
        this.post = {
            initVotes: 50,
            Votes: 50
        };
    }
    AppComponent.prototype.eventVote = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onclick = function ($event, value) {
        this.viewMode = value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <ul class=\"nav nav-pills\">\n\t    <li [class.active]=\"viewMode=='map'\">\n    \t  <a (click)=\"viewMode = 'map'\">\n        \tMap view\n        </a>\n      </li>\n      <li [class.active]=\"viewMode=='list'\">\n        <a (click)=\"viewMode = 'list'\">\n        \tList view\n        </a>\n      </li>\n    </ul>\n    <div [ngSwitch]=\"viewMode\">\n        <template [ngSwitchCase]=\"'map'\" >\n          Map View Content\n        </template>\n        <template [ngSwitchCase]=\"'list'\">\n          List View Content\n        </template>\n    </div>\n\n    <ul>\n      <li *ngFor='let course of courses, let i=index'>{{i+1}}-{{course}} </li>\n     \n    </ul>\n\n    <div>\n      {{course.title|uppercase|lowercase}}\n      <br/>\n      {{course.rating | number:'2.2-2'}}\n      <br/>\n      {{course.student | number}}\n      <br/>\n      {{course.price| currency: 'USD':true:'2.2-2'}}\n      <br/>\n      {{course.releaseDate |date:'MMM yyyy'}}\n      <br/>\n      {{course|json}}\n      \n    </div>\n    <div>\n    {{postArticle.title}}\n    <br/>\n    {{postArticle.body| summary:10}}\n    </div>\n    <favorite [isFavorite]=true ></favorite>\n\n    <div>\n      <button\n          [ngStyle]=\"{backgroundColor:isActive?'blue':'gray',\n        color:isActive?'white':'black',\n        fontWeight:isActive?'bold':'normal'}\"\n      >Submit</button>\n    </div>\n    <div>\n      <ul>\n        <li>\n          Title:{{task.title}}\n        </li>\n        <li>\n          Assigned to:{{task.assignee?.name}}\n        </li>\n      </ul>\n    </div>\n    <bs-panel>\n      <div class=\"heading\">the head!</div>\n      <div class=\"body\">this is the body!</div>\n      <div class=\"body\">this is other body!</div>\n    </bs-panel>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map