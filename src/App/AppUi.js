import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../modal';
import { TodoForm } from "../TodoForm";
import {PageLoading} from '../components/pageLoading';


function AppUi(){

    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext)

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            
            <TodoList>
                {error && <p>Hubo un error</p>}
                <PageLoading loading={loading}>
                    {loading && <p>Estamos cargando, no desesperes...</p>}
                </PageLoading>
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODOs</p>}
            
                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
               
            {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    )
}

export {AppUi};