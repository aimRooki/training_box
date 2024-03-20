import React, { useState } from 'react'

// ここでファイル内で定義した関数の（他ファイルで読み込まれた値のために使用する）型を定義
interface Props {
    text: string
}

// Objectの場合はこう これでジェネリックスに指定すればよい
interface UserData {
    id: number;
    name: string;
}

// React.FC はconstによる型定義でコンポーネントに対して定義できる型　必須
// <Props>でファイル内で定義した型を定義
// 引数の（props）は読み込み先の値をpropsとして引き渡している
const TestComponent: React.FC<Props> = (props) => {
  // useStateの型を定義する場合は初期値に合わせて推論してくれる  
  // ただし初期値の値以外の例えばnumberとnullとしたいならジェネリックスで以下のよう指定可能
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({ id: 1, name: "text" });

  const [inputData, setInputData] = useState("初期テキスト");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  setInputData(e.target.value);

  return (
    // 引数のpropsで渡ってきた値の中のtextパラメータを指定して表示
    <div>
        <h1>{props.text}</h1>
        <h1>{count}</h1>
        <input type="text" value={inputData} onChange={handleInputChange} />
        <h1>{inputData}</h1>
    </div>
  )
}

export default TestComponent