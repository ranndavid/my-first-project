import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../Type/Utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrl: './add-ingredient.component.css'
})
export class AddIngredientComponent {
  @Output() onAddIngredient: EventEmitter<Ingredient> = new EventEmitter();
  @Input() onEditIngredient: Ingredient = new Ingredient()

  constructor() {
    console.log(this.onEditIngredient, "eit ::");

  }

  // this.onAddIngredient()

  onSubmit(f: NgForm) {
    this.onAddIngredient.emit(this.onEditIngredient);
  }

  onReset() {
    this.onEditIngredient = new Ingredient();
  }

}
