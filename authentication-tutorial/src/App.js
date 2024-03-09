import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register  from "./Register";
import Login from "./Login";
import Mypage from "./Mypage";
import './App.css';

const App = () => {
  return (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/`} element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
