import { createContext, useState } from "react";

export const MyAppContext = createContext();

export function MyAppProvider(props) {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <MyAppContext.Provider value={value}>
      {props.children}
    </MyAppContext.Provider>
  );
}
