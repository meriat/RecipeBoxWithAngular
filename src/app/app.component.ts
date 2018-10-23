import { Component } from '@angular/core';
import { Recipe } from './models/recipe.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Recipe Box!';

orangeChickenIngredients: string[] = [
'Chicken',
'Special Sauce',
'Orange'
];

orangeChickenDirections: string[] = [
  'Saute the boneless Chicken',
  'Then add the sliced oranges',
  'Mix it with the special sauce',
  'Then add seasonings for more taste'
  ];

  adoboIngredients: string[] = [
    'Chicken',
    'Vinegar',
    'Soy-Sauce',
    'Seasonings'
    ];

  adoboDirections: string [] = [
    'Heat the vegetable oil in a large skillet over medium-high heat. Cook chicken pieces until golden brown on both sides, then remove. Stir in the onion and garlic; cook until they soften and brown, about 6 minutes.',
    'Pour in vinegar and soy sauce, and season with garlic powder, black pepper, and bay leaf. Add the browned chicken, increase the heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until the chicken is tender and cooked through, 35 to 40 minutes.'
  ];

  recipes: Recipe[] = [
    new Recipe('Orange Chicken', this.orangeChickenIngredients, this.orangeChickenDirections ),
    new Recipe('Adobo Chicken', this.adoboIngredients, this.adoboDirections )
  ];

}
