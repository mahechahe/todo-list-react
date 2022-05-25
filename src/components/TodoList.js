import React from 'react';
import '../styles/TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className='TodoListContainer'>
      {props.error && props.onError()}
      {props.loading && props.OnLoading()}

      {(!props.loading && !props.totalTodos ) && props.onEmptyTodos()}


      <ul>
        {props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
