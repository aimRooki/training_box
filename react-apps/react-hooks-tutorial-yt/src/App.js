import { useReducer, useContext, useEffect, useRef, useState, useMemo, useCallback } from "react";
import ShinCodeContext from "./index";
import SomeChild from "./SomeChild";
import useLocalStorage from "./useLocalStorage";
import './App.css';

function App() {
  // useStateは状態の更新
  const [count, setCount] = useState(0); 
  const handleClick = () => {
    setCount(count + 1);
  }

  // useEffectは発火のタイミング　第二引数で発火タイミングを変更してる
  // 第二引数の配列の中に発火タイミングに合わせて動かした変数を入れてコントロール
  useEffect(() => {
    console.log("hello hooks"); // ref属性の情報を取る
  }, [count]);

  // useContextは定義したデータを自由に他コンポーネントへ出力可能
  // リコイルというライブラリで記述を減らせる
  const shincodeInfo = useContext(ShinCodeContext)

  // useRefは指定した事ができる
  // DOM操作と変数に値を格納しておくのに主に使う
  const ref = useRef();
  const handleRef = () => {
    console.log(ref.current.value); // これならinputに入力した情報を取れる
    console.log(ref.current.offsetHeight); // これならinputの高さを取れる
  }

  // useReducerは...変更前と関数実行後の変更をゴニョゴニョしてくれる？例として計算
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    } 
  }
  const [state, dispatch] = useReducer(reducer, 0);

  // useMemoはブラウザのメモリに保存する事ができる,重い処理を含む関数の場合、重い処理部分のみ走る必要があるのかないのかを判定し、不要なら処理をスキップできる
  const [count01,setCount01] = useState(0);
  const [count02,setCount02] = useState(0);
  // const square = () => {
  //   let i = 0;
  //   while (i > 2000000000000000) {
  //     i++;
  //   } 
  //   console.log("クリックされました");
  //   return count02 * count02;
  // };
  const square = useMemo(() => {
    let i = 0;
    while (i > 20000000000000000) {
      i++;
    } 
    console.log("クリックされました");
    return count02 * count02;
  }, [count02]);

  // useCallback 関数のメモ 重い関数や処理などのストッパーとして使用する事ができる
  const [counter, setCounter] = useState(0);
  // const showCount = () => {
  //   alert("これは重い処理です");
  // }
  const showCount = useCallback(() => {
    alert("これは重い処理です");
  }, [counter]);

  // カスタムフック 自由にフックが作れる 要するに関数コンポーネントを作るようなものなのかな
  // これはローカルストレージに年齢を保存するフック
  const [age, setAge] = useLocalStorage("age",24);

  return (
    <div className="App">
      {/* useState, useEffect */}
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{ count }</p>
      <hr />

      {/* useContext */}
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
      <hr />

      {/* useRef */}
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>
      <hr />

      {/* useReducer */}
      <h1>useReducer</h1>
      <p>カウント: {state}</p>
      <button onClick={() => dispatch({type : "increment"})}>+</button>
      <button onClick={() => dispatch({type : "decrement"})}>-</button>
      <hr />

      {/* useMemo */}
      <h1>useMemo</h1>
      <div>カウント1: {count01}</div>
      <div>カウント2: {count02}</div>
      <div>結果: {square}</div>
      <button onClick={() => setCount01(count01 + 1 )}>+</button>
      <button onClick={() => setCount02(count02 + 2 )}>+</button>
      <hr />

      {/* useCallback */}
      <h1>useCallback</h1>
      <SomeChild showCount={showCount} />
      <hr />

      {/* カスタムフック */}
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
      <hr />


    </div>
  );
}

export default App;
