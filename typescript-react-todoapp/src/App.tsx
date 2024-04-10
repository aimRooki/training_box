import React from 'react';
import './destyle.scss';
import './App.scss';
import Header from './component/header/header'
import TodoList from './component/todo-list/todo-list'

function App() {
  return (
    <div className="App">
      <div className="todo-wrap">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
