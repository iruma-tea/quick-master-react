import { useState, useEffect } from "react";

export default function MyState(props) {
  const [count, setCount] = useState(0);

  // コンポーネントの(再)描画時に実行
  useEffect(() => {
    console.log(`${count}回、クリックされました。`);
  });

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <input type="button" value="カウント" onClick={increment} />
      <p>{count}回、クリックされました。</p>
    </>
  );
}
