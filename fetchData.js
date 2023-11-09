import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import DisplayData from './displayData';

const base_url = 'https://api.spoonacular.com/recipes/complexSearch?query='
const api_key = '&apiKey=bdc9aef3ddca425c98ab27d03f7745ca'

//let results = {}//this is an array of objects    


function FetchData() {

  const [recipeClicked, setRecipeClicked] = useState(0)

  const [result, setResult] = useState([{}])
    
    function fethAPI (url){   
        fetch(url)
        .then(response => response.json())
        .then(data => {
            var attributes = data.results
            addData(attributes)    
        })
    
    }

    function addData(attributes){
      //console.log(attributes[0].id)
      //const newData = {id:attributes[0].id, title:attributes[0].title, image:attributes[0].image}
      //console.log(newData)
      
      //console.log(result)

      //for(let i = 0; i<attributes.length;i++){
      //  let test ={id:attributes[i].id, title:attributes[i].title, image:attributes[i].image}
        //console.log(test)
       setResult([...result, attributes])
      //}

    }
    //console.log(result)
   
    function creatURL(){
        let input = document.getElementById('search').value
        const full_url = base_url+input+api_key
        fethAPI(full_url)
    }
    
    const userClick = (recipeID) => () =>{
      setRecipeClicked(recipeID)
    }

    /*function displayResults(recipes){
      const recipeList = recipes.map((recipe) => <li key={recipe.id} onClick={userClick(recipe.id)}>{recipe.title}</li>)
      return (render(
        <div>
         <ul>
          {recipeList}
         </ul>
        </div>
      ))}
  */

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or perform an action
   
    };

   
       
     return (
      
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Ingredient</label>
          <input type="text" id="search" name="name" />
          <p>{recipeClicked}</p>  
        </div>

        
        <button type="submit" onClick={creatURL}>Submit</button>
        <DisplayData data={result} />
      </form>
      
      
    );



  }

export default FetchData;
