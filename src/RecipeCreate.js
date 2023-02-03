import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormData})

  const submitManager = (event) => {
    event.preventDefault();
    setRecipes(recipes => [...recipes, formData])
    setFormData({...initialFormData});
    console.log(recipes)
  }
  
  const handleFormChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  //hello

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitManager}>
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
              value={formData.name}
              required={true}
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
              value={formData.cuisine}
              required={true}
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
              value={formData.photo}
              required={true}
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
              value={formData.ingredients}
              required={true}
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
              value={formData.preparation}
              required={true}
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
