const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const recipeSchema = new Schema(
  {
    tile: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    ingredients: {
      type: [String],
      required: true,

    },
   difficulty : {
      type: String,
      required: true,
      enum : ['simple', 'hard'],
    }
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe ;
