import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    private recipes:Recipe[] = [
        new Recipe(
            'Burger',
            'This is simply a test',
            'assets/images/burger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe(
            'Pizza',
            'This is simply a test',
            'assets/images/pizza.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1),
            ])
    ];
    getRecipes() {
        return this.recipes;
    }
    getRecipe(index : number) {
        return this.recipes.slice()[index];
    }
}