import React from 'react';
import './App.css';
import { Interface } from 'readline';

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username: string = "Hello";
let dummyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
};

let nameOBJ: NAME = {first:"Yamada", last: null};

// 関数の後に「： number」と定義する事で返り値にも明示的に型を記述可能
const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

// 型を結合する事も可能Intersection Typesと言う
type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}

// Union Types こうしておけば再代入時も型を制限できる
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
// 配列もこうやって書ける
arrayUni = [0, 1, 2, "Hello", true];

// リテラルとユニオンタイプを組み合わせた例
let company: "Facebook" | "Google" | "Amazone";
company = "Amazone";

let memory: 256 | 512;
memory = 12;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
