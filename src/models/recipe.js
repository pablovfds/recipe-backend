const mongoose = require('../database');

const RecipeSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: [String],
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);