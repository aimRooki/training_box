import React from 'react'

// ここでファイル内で定義した関数の（他ファイルで読み込まれた値のために使用する）型を定義
interface Props {
    text: string
}

// React.FC はconstによる型定義でコンポーネントに対して定義できる型　必須
// <Props>でファイル内で定義した型を定義
// 引数の（props）は読み込み先の値をpropsとして引き渡している
const TestComponent: React.FC<Props> = (props) => {
  return (
    // 引数のpropsで渡ってきた値の中のtextパラメータを指定して表示
    <div><h1>{props.text}</h1></div>
  )
}

export default TestComponent