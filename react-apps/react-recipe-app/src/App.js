import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  const APP_ID = 'bf597ea9'
  const APP_KEY = 'bd2090af914558039624c244d6d3e7b7'
 
  const [search, setSearch] = useState("");

  const getRecipes = async () => {
    const response = await fetch('https://api.edamam.com/search?q="banana"&app_id=${APP_ID}&app_key=${APP_KEY}');
    const data = await response.json();
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    getRecipes();
  }, [])

  return (
    <div className="App">
      <form>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">検索</button>
      </form>
    </div>
  );
}

export default App;
