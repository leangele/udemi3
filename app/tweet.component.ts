import {Component} from "@angular/core";
import { FavoriteComponent } from './Favorite.component';
@Component({
    selector:"tweet",
    template:`
    <div *ngFor="let tweettotal of tweetsTotal">
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" [src]="image" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{author}}<span class="gray">{{tweeterHandler}}</span></h4>
                <p>{{tweet}}</p>
                <favorite [quantity]="" ></favorite>
            </div>
        </div>
    </div>
    `,
})

export class TweetComponent{
    like = false;
    
    tweetsTotal: [{
        image: "http://lorempixel.com/100/100/people?1", 
        author:"author1",
        tweeterHandler:"@tweet1",
        countLikes:5,
        tweet:"short Message" },{
        image: "http://lorempixel.com/100/100/people?1", 
        author:"author2",
        tweeterHandler:"@tweet2",
        countLikes:9,
        tweet:"short Message" },{
        image: "http://lorempixel.com/100/100/people?1", 
        author:"author3",
        tweeterHandler:"@tweet3",
        countLikes:1,
        tweet:"short Message" }]
}