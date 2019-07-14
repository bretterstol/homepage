import React, {useReducer} from 'react';

import Clock from './Clock';
import GoogleSearch from './GoogleSearch';
import TodoList from './TodoList';
import reducer, {initialState} from '../store/reducer';
import Context from '../context';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
    <div className="App">
      <hr />
      <h1> APP </h1>
      <hr />
      <Clock />
      <hr />
      <GoogleSearch />
      <hr />
      <TodoList />
    </div>
    </Context.Provider>
  );
}

export default App;
