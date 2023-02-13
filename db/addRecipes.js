const mongoose = require("mongoose");

const Recipe = require("../models/recipe.model");

let recipes = [
  {
    title: "molokhya",
    ingredients: ["molokhya leaves"],
    difficulty: "simple",
  },
  {
    title: "rokak",
    ingredients: ["rokak", "la7ma"],
    difficulty: "hard",
  },
];


// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
'mongodb+srv://asmaa:asmaa@cluster0.6avacaz.mongodb.net/project2?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI)
  .then(async (x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
    console.log("hhelo")
await Recipe.insertMany(recipes)
.then((theRecipes) => {
    console.log("buuh")
    theRecipes.forEach((recipe) => {
        console.log(recipe.title)
    })
} )
.catch(err => {
    console.log(err)
})
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
