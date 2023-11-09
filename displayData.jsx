import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { render } from '@testing-library/react';    

const base_url = 'https://api.spoonacular.com/recipes/'
const api_key = '/information?&apiKey=bdc9aef3ddca425c98ab27d03f7745ca'

function DisplayData(props) {
    const [recipeSummary, setRecipeSummary] = useState()
    const [recipeImage, setRecipeImage] = useState()
    const [allTitle, setAllTitle] = useState()
    const recipeData = props.data[0]

    const lookupRecipe = (id) =>{
        let fullURL = base_url+id+api_key
        fetch(fullURL)
        .then(response => response.json())
        .then(data => {
            var attributes = data
            console.log(attributes)
            setTitle(attributes)
            setSummary(attributes)
            setImage(attributes)
        })
    }

  
    const setTitle = (data) =>(
        setAllTitle(data.title)
    )
    const setSummary = (data) =>(
        setRecipeSummary(data.instructions)
    )

    const setImage = (data) =>(
        setRecipeImage(data.image)
    )

    const userClick = (recipeID) => () =>{
        lookupRecipe(recipeID)
      }

    return (
        <div>
            <ul>
                
            {recipeData.map((dataItem) => (
                <div key={dataItem.id}>
                <li onClick={userClick(dataItem.id)}>{dataItem.title}</li>
                </div>
            ))}
            </ul>

    
            <h2 id='recipe_title'>{allTitle}</h2>
            <div id='output_container'>
                
                <img id='recipe_img' src={recipeImage}></img>
                
                <div id='recipe_data'>{recipeSummary}</div>
            </div>    
            
         
            
        </div>
    )
 
}

export default DisplayData;
