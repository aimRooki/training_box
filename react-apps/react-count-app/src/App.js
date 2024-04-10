import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>カウント: {count}</p>
      <Button
        btn_click={() => { setCount(count + 1) }}
        btn_txt="カウント＋"/>
      <br/>
      <Button
        btn_click={() => { setCount(count - 1) }}
        btn_txt="カウント−"/>  
    </div>
  );
}

// function Button (props) {
//   return (
//     <button onClick = {props.btn_click}>{props.btn_txt}</button>
//   )
// }

export default App;
