import { createContext, useState } from "react";
import "./App.css";
import MyCount2 from "./MyCount2";

// contextオブジェクトを用意
export const MyAppContext = createContext();

export default function MyCount1() {
  const [count, setCount] = useState(0);
  const c = { count, setCount };

  return (
    <MyAppContext.Provider value={c}>
      <div className="border">
        MyCount1
        <MyCount2 />
      </div>
    </MyAppContext.Provider>
  );
}
