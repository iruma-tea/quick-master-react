import { useState } from "react";

export default function MyState(props) {
  const [count, setCount] = useState(0);

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
