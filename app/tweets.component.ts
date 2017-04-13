import {Component} from "@angular/core";
import { FavoriteComponent } from './Favorite.component';
import { TweetService } from "./tweet.service";

@Component({
    selector:"tweets",
    template:`
    <div *ngFor="let tweet of tweets">
        <tweet [data]='tweet'></tweet>
    </div>
    `,
})

export class TweetsComponent{
   
    tweets;
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();

    }
}