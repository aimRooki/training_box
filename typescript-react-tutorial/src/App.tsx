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
arrayUni = [0, 1, 2, "Hello"];

// リテラルとユニオンタイプを組み合わせた例
let company: "Facebook" | "Google" | "Amazone";
company = "Amazone";

let memory: 256 | 512;
memory = 512;

// typeof　を使用した型継承
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

// typeofを使用して型推論のstringを継承。ただし基本的にはプロパティの方に明示的に型をつけるべき
let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };
// できるが、ちゃんと書くなら　こう↓
type CAR = {
  toyota: string
};
let carType: CAR = { toyota: "small cat" };
let newCar: typeof carType = { toyota: "big cat" };

// keyof インターセクションタイプ（objectで定義した型）で指定したものをユニオンタイプとして指定できる
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
