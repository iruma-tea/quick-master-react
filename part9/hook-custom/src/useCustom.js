import { useReducer } from "react";

export default function useCustom(init) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "PLUS":
          return { count: state.count + action.step };
        case "MINUS":
          return { count: state.count - action.step };
        case "RESET":
          return { count: init };
        default:
          return state;
      }
    },
    {
      count: init,
    }
  );

  function increment() {
    dispatch({ type: "PLUS", step: 5 });
  }

  function decrement() {
    dispatch({ type: "MINUS", step: 5 });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return [state, increment, decrement, reset];
}
