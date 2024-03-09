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


// keyof
// インターセクションタイプ（objectで定義した型）で指定したものをユニオンタイプとして指定できる
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";


// typeof + keyof
// typeofで型継承を行いつつ、keyofでユニオン型の指定とした組み合わせ
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";


// enum 
// 列挙型、こうする事であらかじめ指定した値しか入れられない
enum OS {
  windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id:1,
  OSType: OS.windows,
};
const PC2: PC = {
  id:2,
  OSType: OS.Mac,
};


// 型の互換性
// 
const comp1 = "test";
let comp2:string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3; 抽象度の高い型を割り当てる事はできな

let funcComp1 = (x:number) => {};
let funcComp2 = (x:string) => {};
// funcComp1 = funcComp2; 型の互換性がない
// funcComp2 = funcComp1; 型の互換性がない

// Generics ジェネリックス
// 汎用性あり。ただし考えなしに多用も厳禁　エイリアスのTは決まりがあるわけではないTやUが多く使われる
interface GEN<T>{
  item: T;
};
const gen0: GEN<string> = { item: "hello" };
const gen1: GEN<number> = { item: 10 };
// defaultの型を指定も可能
interface GEN1<T = string>{
  item: T;
};
const gen3: GEN1 = { item: "hello" };
// defaultの型指定も制限する事が可能
interface GEN2<T extends string | number>{
  item: T;
};
const gen4: GEN2<string> = { item: "hello" }
const gen5: GEN2<number> = { item: 3 };

function funcGen<T>(props: T) {
  return {item: props}
};
const gen6 = funcGen("test"); // 型推論でも可能だが、やっぱ明示したい
const gen7 = funcGen<string>("test"); // 明示したい
const gen8 = funcGen<string | null>("test"); //ユニオンでも可能
// defaultの型指定も制限する事が可能
function funcGen1<T extends string | null>(props: T) {
  return {value: props};
};
const gen9 = funcGen1("hello");
const gen10 = funcGen1(null);
// Propsも型制限の指定とする事ができる
interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen11 = funcGen3({price: 10});
// アロー関数として記述も可能。大事
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
}
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
