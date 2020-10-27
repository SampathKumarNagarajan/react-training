import { ADD_TODO, GET_TODO, DELETE_TODO } from './ActionTypes.js';

export const addTodo = title => ({
    type: ADD_TODO,
    payload: {
        title
    }
})

export const getTodo = () => ({
    type: GET_TODO,
})

export const deleteTodo = title => ({
    type: DELETE_TODO,
    payload: {
        title
    }
})