import React from 'react';
import {TodoContext} from '../TodoContext'
import '../styles/TodoSearch.css';

function TodoSearch() {

  const {search, setSerchValue} = React.useContext(TodoContext)

  const OnSearchValueChange = (event) => {
    console.log(event.target.value);
    setSerchValue(event.target.value)
  }

  return (
    <input className="TodoSearch" placeholder="Cebolla" value={search}
    onChange={OnSearchValueChange}/>
  );
}

export { TodoSearch };  
