import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const shincodeInfo = {
  name: "shincode",
  age: 24,
};

// useContextを使う例としてcreateContextというモジュールを準備
const ShinCodeContext = createContext(shincodeInfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // useContextを使うための記述
  <ShinCodeContext.Provider value={shincodeInfo}>
  {/* StrictModeはconsole.logが確認用に2回発生する */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShinCodeContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// useContextを使用したものをexport
export default ShinCodeContext;
