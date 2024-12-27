import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  
  // State to hold the fetched joke
  const [joke, setJoke] = useState('');

  const newJokes = async () => {
   
      let response = await fetch(URL);
      let jsonResponse = await response.json();
       setJoke(jsonResponse) 
  };

  return (
    <div>
      <h1>Get Some Jokes</h1>
      <h4>{joke.setup}</h4>
      <h4>{joke.punchline}</h4>
      <Button variant="outlined" onClick={newJokes}>New Jokes</Button>
      
    </div>
  );
}
