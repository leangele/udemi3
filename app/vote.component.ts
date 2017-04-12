import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'vote',
    template:`
    <div class="voter">
            <i class="glyphicon glyphicon-menu-up vote-button" [class.blue]="voteUp" (click)="onClick($event,+1)"></i>
            <span>{{votes}}</span>
           <i class="glyphicon glyphicon-menu-down vote-button" [class.blue]="voteDown" (click)="onClick($event,-1)"></i>
       </div>
    `,
    styles:[`
        .voter{
        width:20px;
        text-align:center;
        color=#999
        }
        .vote-button{
            cursor:pointer;
        }
        .blue{
         color: blue;
        }
    `]
})

export class VoteComponent{
    
    @Input("init-Votes") initVotes=10;    
    @Input("votes")votes=this.initVotes;
    voteUp=false;
    voteDown=false;
    maxUp=1;
    minDown=-1;
    @Output() change=new EventEmitter();
    onClick($event,vote){
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
        this.change.emit({newValue:this.votes});
    }
   
}