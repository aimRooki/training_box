// import { useState } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import AddTask from './components/addTask';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className='task'>
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App
