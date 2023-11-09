import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import DisplayData from './displayData';

const base_url = 'https://api.spoonacular.com/recipes/complexSearch?query='
const api_key = '&apiKey=bdc9aef3ddca425c98ab27d03f7745ca'

//let results = {}//this is an array of objects    


function FetchData() {
  const [result, setResult] = useState([])
    
    function fethAPI (url){   
        fetch(url)
        .then(response => response.json())
        .then(data => {
            var attributes = data.results
            addData(attributes)    
        })
    }

    function addData(attributes){
       setResult([...result, attributes])
    }
   
    function creatURL(){
        let input = document.getElementById('search').value
        const full_url = base_url+input+api_key
        fethAPI(full_url)
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();
    };

   
     return (
      <form onSubmit={handleSubmit}>
        <div class='main_container'>
          <h1>FORK IT!</h1>
          <input placeholder='Search by ingredient' type="text" id="search" name="name" /> 
          <button id='submit' type="submit" onClick={creatURL}>Submit</button>

        {result.length > 0 ? (
            <DisplayData data={result} />
        ) : (
            <p></p>
        )}

        </div>
      </form>
    );
  }

export default FetchData;
