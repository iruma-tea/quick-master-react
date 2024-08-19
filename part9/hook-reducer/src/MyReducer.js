import { useReducer } from "react";

export default function MyReducer() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "PLUS":
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    {
      count: 0,
    }
  );

  function increment() {
    dispatch({ type: "PLUS" });
  }

  return (
    <>
      <input type="button" value="カウント" onClick={increment} />
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
