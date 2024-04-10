import React from 'react';
import './todo-list.scss';

const TodoList = () => {
  return (
    <div className="todo-list">
        <ul>
            <li>
                <dl>
                    <div className="form-box">
                        <dt className="todo-title">todoTitle</dt>
                        <dd className="todo-description">todoDescription</dd>
                        <p className="todo-status">todoStatus</p>
                        </div>
                    <button className="btn_remove" type="button">削除</button>
                </dl>
            </li>
        </ul>
    </div>
  );
}

export default TodoList;
