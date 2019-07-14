import React, {useState} from 'react';
import uuid from 'uuid';
import useAppContext from './hooks';
import { addTodo, removeTodo } from '../store/actions';

function TodoList(){
    const [text, setText] = useState("");

    const {state, dispatch} = useAppContext();
    const todo = state.todoList;
    const updateText = (event) => {
        const {value} = event.target;
        setText(value);
    }

    const updateList = (event) => {
        const {key} = event;
        if(key === "Enter"){
            const item = {
                id: uuid(),
                text
            };
            dispatch(addTodo(item));
        }
    }

    const removeItem = (id) => () => {
        dispatch(removeTodo(id));
    }


    const saveList = () => {
        console.log(todo);
    }

    return(
        <div>
            <div>
                Fyll inn det du skal gjøre
            </div>
            <div>
                <input type="text" onChange={updateText} value={text} onKeyPress={updateList}/>
            </div>
                <ul>
                    {
                        todo.map(item => {
                            const {id, text} = item;
                            return(
                                <li key={id} onClick={removeItem(id)}>
                                    {text}
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={saveList}>Save List</button>
                </div>
        </div>
    )

}

export default TodoList;