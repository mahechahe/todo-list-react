import React  from "react";
import { TodoList } from '../components/TodoList';
import { useTodos } from './useTodos';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../modal';
import { TodoForm } from "../TodoForm";
import {PageLoading} from '../components/pageLoading';
import {TodoHeader} from '../components/TodoHeader';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';

function App(){

    const {
        state,
        stateUpdaters,
    } = useTodos();

    const {
        error,
        loading,
        totalTodos,
        completedTodos,
        search,
        searchedTodos,
        openModal, 
    } = state;

    const {
        setSerchValue,
        completeTodo,
        deleteTodo,
        addTodo,
        setOpenModal,
    } = stateUpdaters;

    return(
        <React.Fragment>

            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                    
                />
                <TodoSearch
                    search={search}
                    setSerchValue={setSerchValue}
                />
            </TodoHeader>

            <TodoList   
                error={error}
                searchedTodos={searchedTodos}
                loading={loading}
                totalTodos={totalTodos}
                searchText={search}

                onError={() => <p>Hubo un error</p>}

                OnLoading={() => <PageLoading
                    loading={loading}
                />}

                onEmptyTodos={() => <p>Crea tu primer TODOs</p>}

                onEmptySearchResults={(searchText) => {
                    return <p>No hay resultados para {searchText}</p>
                }}  

            >
                {todo => (<TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                 />)}

            </TodoList>
            
       
               
            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />

        </React.Fragment>
    )
}

export {App};