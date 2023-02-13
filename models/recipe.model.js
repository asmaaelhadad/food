const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const recipeSchema = new Schema(
  {  owner : {
      type: Schema.Types.ObjectId ,
      ref : 'User'
},
    title: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    ingredients: {
      type: [String],
      required: true,

    },
   Dish : {
      type: String,
      required: true,
      enum : ['mainDish', 'dessert']
    },
   difficulty : {
      type: String,
      required: true,
      enum : ['simple', 'hard'],
    }
  }
);

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe ;
