import { useState, useEffect } from "react";

export default function MyInterval(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return <p>カウント：{count}</p>;
}
