import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  shoppingListClicked : Boolean= false;

  isShoppingListClicked(shoppingListClicked: Boolean) {
    this.shoppingListClicked = shoppingListClicked;
  }
}
