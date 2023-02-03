import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const recipeListComponents = recipes.map((recipe, index) => {
    return (
    <tr key ={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} style={{objectFit: 'scale-down', width: '100%', height: '100%'}}/>
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => {deleteHandler(index)}}>Delete</button>
      </td>
      
    </tr>
    )
  });

  const deleteHandler = (arrayIndex) => {
    console.log("clicked", arrayIndex)
    recipes.splice(arrayIndex, 1);
    //console.log(recipes)
    setRecipes(prev => [...recipes]);
  }



  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} recipeListComponents={recipeListComponents}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
