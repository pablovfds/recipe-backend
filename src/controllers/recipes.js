const Recipe = require('../models/recipe');

const {
    createRecipe
} = require('../validation/recipe');

exports.create = async (req, res) => {
    const {error} = createRecipe(req.body);

    if (error) return res.status(400).json(error.details[0]);

    const recipe = new Recipe({
        label: req.body.label,
        calories: req.body.calories,
        ingredients: req.body.ingredients,
        image: req.body.image
    });

    try {
        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.update = async (req, res) => {
    recipeSet = {};

    if (req.body.label) recipeSet.label = req.body.label;

    if (req.body.calories) recipeSet.calories = req.body.calories;

    if (req.body.ingredients) recipeSet.ingredients = req.body.ingredients;

    if (req.body.image) recipeSet.image = req.body.image;
    
    try {
        const recipe = await Recipe.updateOne(
            {_id: req.params.id}, 
            {
                $set: recipeSet
            }
        );

        res.json(recipe);
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getAll = async (req, res) => {
    console.log("_getAll")
    try {
        const recipe = await Recipe.find();
        res.json(recipe);
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getById = async (req, res) => {
    console.log("_getById")
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (recipe) {
            res.json(recipe);   
        } else {
            res.status(404).json({message: "Recipe not found!"});
        }
    } catch (error) {
        res.status(400).json(error)
    }  
}

exports.remove = async (req, res) => {
  console.log("_remove")  
  try {
    await Recipe.findByIdAndRemove(req.params.id);
    res.json({message: 'Recipe deleted!'});
} catch (error) {
    res.status(400).json(error)
}
}