import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './Favorite.component';
import { VoteComponent } from './vote.component';
import { TweetsComponent } from './tweets.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanel} from './bootstrap.panel.component';
@NgModule({
  imports:      [ 
    BrowserModule,
      FormsModule ],
  declarations: [ 
    AppComponent,
    FavoriteComponent,
    VoteComponent,
    TweetsComponent,
    TweetComponent,
    SummaryPipe,
    BootstrapPanel
    ],
  providers:[TweetService,],    
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
