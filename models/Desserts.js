const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const dessertSchema = new Schema(
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
   difficulty : {
      type: String,
      required: true,
      enum : ['simple', 'hard'],
    }
  }
);

const Dessert = model("dessert", dessertSchema);

module.exports = Dessert ;