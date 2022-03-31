import React from 'react';
import '../styles/TodoItem.css';
import { TaskDelete } from './TodoIcon';
import { BsCheckLg } from "react-icons/bs";

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}>
        <BsCheckLg className={`ButtonCheck ${props.completed && 'ButtonCheckCompleted'}`}></BsCheckLg>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        <TaskDelete></TaskDelete>
      </span>
    </li>
  );
}

export { TodoItem };
