import { Ingredient } from '../shared/shopping.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredient[];

    constructor(name: string, descp: string, imagePath: string, ingredient: Ingredient[]) {
        this.name = name;
        this.description = descp;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}