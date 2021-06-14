import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() shoppingListClicked = new EventEmitter<Boolean>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipes() {
    this.shoppingListClicked.emit(false);
  }

  onClickShoppingList() {
    this.shoppingListClicked.emit(true);
  }
}
