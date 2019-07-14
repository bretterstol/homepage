import { ADD_TODO, REMOVE_TODO } from "./types";

export const initialState = {
    todoList: []
};

export default  function (state = initialState, action){
    console.log(action)
    switch(action.type){
        case ADD_TODO: return {...state, todoList: [...state.todoList, {id: action.id, text: action.value}]}
        case REMOVE_TODO: return {...state, todoList: state.todoList.filter(({id}) => id !== action.id)}
        default: return state;
    }
}