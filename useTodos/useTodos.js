import {useState, useEffect, useReducer } from 'react'
import {todoReducer} from './todoReducer'
export const useTodos = (initialState) => {

    
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])


    const handleDeleteTodo = (id)=>{
        const action = {
            type:'[TODO] Delete Todo',
            payload:id
        }
        dispatch(action);
        console.log(id);
    }

    const handleNewTodo = (todo)=>{
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action)
        console.log('todos=>',todos)
    }

    const handleToggleTodo = (id)=>{
        console.log(id);
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }
    
  return {
    todos,
    all:todos.length,
    pending:todos.filter(todo=>!todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo
   }
}
