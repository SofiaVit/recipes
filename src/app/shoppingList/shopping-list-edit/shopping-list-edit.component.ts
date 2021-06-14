import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../modules/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
