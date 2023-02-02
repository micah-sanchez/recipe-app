import React, { useState } from "react";

function RecipeCreate() {

  //hello

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
          <td>
            <label name="name">
              <input
              name="name"
              id="name"
              placeholder="Name"
              type="text"
              />
            </label>
          </td>
          <td>
            <label name="cuisine">
              <input
              name="cuisine"
              id="cuisine"
              placeholder="Cuisine"
              type="text"
              />
            </label>
          </td>
          <td>
            <label name="photo">
              <input
              name="photo"
              id="photo"
              placeholder="URL"
              type="url"
              />
            </label>
          </td>
          <td>
            <label name="ingredients">
              <input
              name="ingredients"
              id="ingredients"
              placeholder="Ingredients"
              type="text"
              />
            </label>
          </td>
          <td>
            <label name="preparation">
              <input
              name="preparation"
              id="preparation"
              placeholder="Preparation"
              type="text"
              />
            </label>
          </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
