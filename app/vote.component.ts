import { Component } from '@angular/core';

@Component({
    selector:'vote',
    template:`
    <div style="width=20px">
            <i class="glyphicon glyphicon-menu-up" [class.blue]="voteUp" (click)="onClick($event,+1)"></i>
            <span>{{votes}}</span>
           <i class="glyphicon glyphicon-menu-down" [class.blue]="voteDown" (click)="onClick($event,-1)"></i>
       </div>
    `,
    styles:[`
        .glyphicon{
            cursor:pointer;
        }
        .blue{
         color: blue;
        }
    `]
})

export class VoteComponent{
    
    initVotes=10;    
    votes=this.initVotes;
    voteUp=false;
    voteDown=false;
    maxUp=1;
    minDown=-1;
    onClick($event,vote){
        this.votes = this.votes+vote;
        if(this.initVotes+this.maxUp<=this.votes)
            this.votes = this.votes+vote;

        
        if (this.votes==this.initVotes) {
            this.voteUp=false;
            this.voteDown=false;
        }
        else{
            if (vote>0){
                this.voteUp=true;
                this.voteDown=false;
            }else{
                this.voteUp=false;
                this.voteDown=true;
            }
        }
    }
   
}