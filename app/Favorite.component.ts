import { Component,Input } from '@angular/core';
@Component({
    selector:'favorite',
    template:`
    <i class="glyphicon glyphicon-heart" 
        [class.highlighted]="isFavorite" 
        (click)="onClick()"></i>
        <span>{{quantity}}</span>

    `,
    styles:[`
    .glyphicon-heart{
        color:#ccc;
        cursor: pointer;
    }
    .highlighted{
        color:deeppink; 
    }
         
    `]
})
export class FavoriteComponent{
    @Input() quantity=3;
    @Input() isFavorite=false;
    onClick(){
        this.isFavorite=!this.isFavorite;
        this.quantity+=this.isFavorite?1:-1;
    }
}