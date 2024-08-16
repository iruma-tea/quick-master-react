import { useState } from "react";
import MyChild from "./MyChild";

export default function MyParent() {
  const [sum, setSum] = useState(0);

  function update() {
    setSum(sum + 1);
  }

  return (
    <>
      <MyChild onUpdate={update} />
      <MyChild onUpdate={update} />
      <p>現在のカウント合計: {sum}</p>
    </>
  );
}
