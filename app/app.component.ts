  import { Component } from '@angular/core';
  @Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
  })
  export class AppComponent {
    title = "hola mundo";
    isActive = false;
      post={
      isFavorite: true,
      quantity:50
    }
  }
