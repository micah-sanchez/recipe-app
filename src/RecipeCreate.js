import React, { useState } from "react";

function RecipeCreate({submitManager, handleFormChange}) {

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
              onChange={handleFormChange}
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
              onChange={handleFormChange}
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
              onChange={handleFormChange}
              />
            </label>
          </td>
          <td>
            <label name="ingredients">
              <textarea
              name="ingredients"
              id="ingredients"
              placeholder="Ingredients"
              type="text"
              rows="2"
              onChange={handleFormChange}
              />
            </label>
          </td>
          <td>
            <label name="preparation">
              <textarea
              name="preparation"
              id="preparation"
              placeholder="Preparation"
              type="text"
              rows="2"
              onChange={handleFormChange}
              />
            </label>
          </td>
            <td>
              <button type="submit" onClick={submitManager}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
