import { Component,Input } from '@angular/core';
@Component({
    selector:'favorite',
    templateUrl:'app/favorite.template.html',
    styles:[`
    .glyphicon-heart{
        color:#ccc;
        cursor: pointer;
    },  
    .highlighted{}
        color:deeppink;  
    `]
})
export class FavoriteComponent{
    @Input() quantity=3;
    @Input('is-Favorite') isFavorite=false;
    onClick(){
        this.isFavorite=!this.isFavorite;
        this.quantity+=this.isFavorite?1:-1;
    }
}