import { Component, OnInit } from '@angular/core';
import { IngredientApiService } from '../../../../../shared/services/ingredient-api.service';
import { Ingredient } from '../../../../components/Type/Utils';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor(
    private ingredientAPI: IngredientApiService
  ) {

  }
  ingredients: Ingredient[] = [];
  ingredient: Ingredient = new Ingredient();


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.ingredientAPI.getData("ingredients").subscribe(res => {
      console.log(res);
      this.ingredients = res;
      console.log(this.ingredients);
    }, error => {
      console.error('Error fetching ingredients:', error);
    });
  }

  doDeleteIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredientAPI.doDeleteData(`ingredients/${ingredient.id}`).subscribe(res => {
      console.log('Ingredient deleted:', res);
      this.getAll();
    }, error => {
      console.error('Error deleting ingredient:', error);
    });
  }

  addIngredient(ingredient: Ingredient) {

    if (this.ingredient.id) {
      this.ingredientAPI.put(this.ingredient).subscribe((res) => {
        this.getAll()
      })
    } else {
      this.ingredientAPI.post(ingredient).subscribe(res => {
        this.getAll()
      })
    }
    this.ingredient = new Ingredient()
  }

  onEdit(data: Ingredient) {
    this.ingredient = data

  }



}