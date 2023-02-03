import React from "react";

function RecipeList({recipes}) {

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
        <button name="delete">Delete</button>
      </td>
      
    </tr>
    )
  })
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {recipeListComponents}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
