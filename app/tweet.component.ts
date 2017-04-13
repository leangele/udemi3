import {Component, Input} from '@angular/core';
@Component({
    selector:'tweet',
    template:`
    <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" [src]="data.imageUrl" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ data.author }}<span class="gray">{{data.handle}}
                </span></h4>
                <p>{{data.body}}</p>
                <favorite [quantity]="data.totalLikes" [isFavorite]="data.iLike"></favorite>
            </div>
        </div>
    `,
    styles:[`
    .gray{
         color: #ccc;
    }
     .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `]
})
export class TweetComponent{
    @Input() data;
    constructor(){
        console.log(this.data);
    }
    
}