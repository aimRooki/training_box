import React from 'react';
// SubmitHandlerは、submitイベントに関する関数の型宣言に使う
// 公式は→　https://react-hook-form.com/ts
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';
import './style.css';

type FormInput = {
  name: string;
  age: string;
};

export default function App() {
  // useFormフックを使い、 register と handleSubmit というメソッドを取り出している。
  // register: フォームの各インプット要素をReact Hook Formに登録。これにより、各フィールドの値やエラー状態などをReact Hook Formが管理できる。
  // handleSubmit: フォームが送信されたときに実行される関数を指定する。これにより、フォームのデータを処理したり、送信したりするロジックを組み込むことが可能。
  // 変数 useFormを定義し、<> で型定義
  const { register, handleSubmit, formState: { errors } } 
  = useForm<FormInput>(
  // 初期値として、名前の入力欄に「山田太郎」・年齢の入力欄に「25」を与える
  { defaultValues: { name: "山田太郎", age: 25 } });

  // submitイベントが発生し、バリデーションチェックが問題なければ発生する
  // 今回はコンソールログを仕込む
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>名前
        {/* registerの第1引数の文字列は、name属性の値としても利用される。 */}
        {/* registerの第2引数には、バリデーションの種類を設定できる。 */}
        {/* requiredにtrueを設定すると、入力必須の状態になる。 */}
        {/* ...はスプレッド演算子 */}
        <input {...register("name", { required: true } )} />
      </label>
      {errors.name && <p className="error">名前欄の入力は必須です</p>}
      <label>年齢
        <input type="number" {...register("age", { 
          required: { value: true, message: "年齢欄の入力は必須です" },
          min: { value: 0, message: "入力できる最小値は0です" },
          max: { value: 150, message: "入力できる最大値は150です" }
       } )} />歳
      </label>
      {/* errors.age.messageを参照すると、バリデーションが失敗した項目のメッセージが取得できる */}
      {errors.age && <p className="error">{errors.age.message}</p>}
      <button>送信する</button>
    </form>
  );
}