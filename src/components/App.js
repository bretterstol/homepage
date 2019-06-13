import React from 'react';

import Clock from './Clock';
import GoogleSearch from './GoogleSearch';
import TodoList from './TodoList';

function App() {
  return (
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
  );
}

export default App;
