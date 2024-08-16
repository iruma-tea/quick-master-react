import { useState } from "react";

export default function MyChild(props) {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);

    props.onUpdate();
  }

  return <input type="button" value={count} onClick={increment} />;
}
