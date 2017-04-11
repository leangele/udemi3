import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './Favorite.component';
import { VoteComponent } from './vote.component';
@NgModule({
  imports:      [ 
    BrowserModule,
      FormsModule ],
  declarations: [ 
    AppComponent,
    FavoriteComponent,
    VoteComponent,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
