
import {ADD_TODO, REMOVE_TODO} from './types';

export const addTodo = (item) => ({
    type: ADD_TODO,
    id: item.id,
    value: item.text
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
})