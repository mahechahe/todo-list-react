import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({search, setSerchValue, loading}) {

  const OnSearchValueChange = (event) => {
    console.log(event.target.value);
    setSerchValue(event.target.value)
  }

  return (
    <input className="TodoSearch" placeholder="Cebolla" value={search}
    onChange={OnSearchValueChange} disabled={loading}/>
  );
}

export { TodoSearch };  
