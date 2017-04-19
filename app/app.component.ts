  import { Component} from '@angular/core';
  @Component({
    selector: 'my-app',
    template:`
    <ul class="nav nav-pills">
	    <li [class.active]="viewMode=='map'">
    	  <a (click)="viewMode = 'map'">
        	Map view
        </a>
      </li>
      <li [class.active]="viewMode=='list'">
        <a (click)="viewMode = 'list'">
        	List view
        </a>
      </li>
    </ul>
    <div [ngSwitch]="viewMode">
        <template [ngSwitchCase]="'map'" >
          Map View Content
        </template>
        <template [ngSwitchCase]="'list'">
          List View Content
        </template>
    </div>

    <ul>
      <li *ngFor='let course of courses, let i=index'>{{i+1}}-{{course}} </li>
     
    </ul>

    <div>
      {{course.title|uppercase|lowercase}}
      <br/>
      {{course.rating | number:'2.2-2'}}
      <br/>
      {{course.student | number}}
      <br/>
      {{course.price| currency: 'USD':true:'2.2-2'}}
      <br/>
      {{course.releaseDate |date:'MMM yyyy'}}
      <br/>
      {{course|json}}
      
    </div>
    <div>
    {{postArticle.title}}
    <br/>
    {{postArticle.body| summary:10}}
    </div>
    <favorite [isFavorite]=true ></favorite>

    <div>
      <button
          [ngStyle]="{backgroundColor:isActive?'blue':'gray',
        color:isActive?'white':'black',
        fontWeight:isActive?'bold':'normal'}"
      >Submit</button>
    </div>
    <div>
      <ul>
        <li>
          Title:{{task.title}}
        </li>
        <li>
          Assigned to:{{task.assignee?.name}}
        </li>
      </ul>
    </div>
    <bs-panel>
      <div class="heading">the head!</div>
      <div class="body">this is the body!</div>
      <div class="body">this is other body!</div>
    </bs-panel>
    `
  })
  export class AppComponent {
    task={
      title:"review application",
      assignee:null
    };
    course={
      title:"angular 2 for beginners",
      rating:4.9745,
      student:5981,
      price:99.95,
      releaseDate:new Date(2016,3,1)
    };
    postArticle={
      title:"angular 2 tutorial for beginner ",
      body:`
      This comes on top of award winning coverage of core C# features, 
      both old and new, that have made the previous editions of this book so popular.
      Readers will gain a solid foundation of object-oriented development techniques, 
      attributes and reflection,
      generics and collections as well as numerous advanced topics not found in other texts 
      (such as CIL opcodes and emitting dynamic assemblies).
      `
    }
    viewMode='map';
    courses=['Course1','Course2','Course3']
    title = 'hola mundo';
    isActive = true;
      post={
      initVotes:50,
      Votes:50
    }
    eventVote($event){
      console.log($event);
    }
    onclick($event,value){
      this.viewMode=value
    }
  }
