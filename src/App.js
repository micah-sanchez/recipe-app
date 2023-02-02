import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

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
    setFormData({...initialFormData});
    console.log(formData)

      
    console.log("submitted")
  }
  
  const handleFormChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList />
      <RecipeCreate submitManager={submitManager} handleFormChange={handleFormChange}/>
    </div>
  );
}

export default App;
