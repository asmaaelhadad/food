const mongoose = require("mongoose");

const Recipe = require("../models/recipe.model");

let recipes = [
  {
    title: "molokhya",
    ingredients: ["molokhya leavs"],
    difficulty: "simple",
  },
  {
    title: "rokak",
    ingredients: ["rokak", "la7ma"],
    difficulty: "hard",
  },
];
console.log("hhelo")
Recipe.insertMany(recipes)
.then((theRecipes) => {
    console.log("buuh")
    theRecipes.forEach((recipe) => {
        console.log(recipe.title)
    })
} )
.catch(err => {
    console.log(err)
})