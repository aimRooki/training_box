import './destyle.css';
import './App.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const initialTodo = [
    {
      todoTitle:'初期テキスト1',
      todoDescription:'初期テキストの説明1',
      todoStatus: '未着手',
      taskUUID: 1
    },
    {
      todoTitle:'初期テキスト2',
      todoDescription:'初期テキストの説明2',
      todoStatus: '進行中',
      taskUUID: 2
    },
    {
      todoTitle:'初期テキスト3',
      todoDescription:'初期テキストの説明3',
      todoStatus: '完了',
      taskUUID: 3
    }
  ]
  const [todos, setTodos] = useState(initialTodo)
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDescription, setTodoDescription] = useState('')
  const [todoStatus, setTodoStatus] = useState('未着手')
  
  // useEffect(() => {
  //   console.log(todos)
  // }, [todos])

  const handleNewTitle = (event) => {
    // ここで入力テキストを保持/更新
    setTodoTitle(event.target.value)
  }
  const handleNewDescription = (event) => {
    // ここで入力テキストを保持/更新
    setTodoDescription(event.target.value)
  }
  const handleNewStatus = (event) => {
    // ここで選択ステータスを保持/更新
    setTodoStatus(event.target.value)
  }
  const handleSubmit = (event) => {
    // デフォルトのイベント動作をキャンセル
    event.preventDefault()
    // 入力テキストが空であれば動作終了
    console.log('submit 空欄 動作終了')
    if ( todoTitle === '' || todoDescription === '' ) return
    console.log('submit テキストあり')

    // taskUUIDIncremeant()
    setTodos(todos => [...todos,{todoTitle, todoDescription, todoStatus, taskUUID: uuidv4() }])
    // クリック後に入力欄のテキストを初期化
    setTodoTitle('')
    setTodoDescription('')
    setTodoStatus('未着手')
    document.getElementById('select').selectedIndex = 0
  }
  
  const handleDelete = (taskUUID) => {
    console.log("taskUUID" + taskUUID)
    const newTodos = todos.filter((todos) => todos.taskUUID !== taskUUID);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <div className="todo-box">
        <div className="todo-list">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <dl>
                  <div className="form-box">
                    <dt className="todo-title">{todo.todoTitle}</dt>
                    <dd className="todo-description">{todo.todoDescription}</dd>
                    <p className="todo-status">{ todo.todoStatus }</p>
                  </div>
                  <button className="btn_remove" type="button" onClick={() => handleDelete(todo.taskUUID)}>削除</button>
                </dl>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-input">
          <form onSubmit={ handleSubmit }>
            <label htmlFor="todoTitleText">task title</label>
            <input value={ todoTitle } onChange={ handleNewTitle } type="text" id="todoTitleText" name="task_name" />
            <label htmlFor="todoDescriptionText">task description</label>
            <input value={ todoDescription } onChange={ handleNewDescription } type="text" id="todoDescriptionText" name="task_description" />
            <select id="select" onChange={ handleNewStatus } name="task_status">
              <option value="未着手">未着手</option>
              <option value="進行中">進行中</option>
              <option value="完了">完了</option>
            </select>

            <button className="btn_submit" type="submit">作成</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
