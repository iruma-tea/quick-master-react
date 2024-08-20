import useCustom from "./useCustom";

export default function MyCustom() {
  const [state, increment, decrement, reset] = useCustom(0);

  return (
    <>
      <input type="button" value="カウントアップ" onClick={increment} />
      <input type="button" value="カウントダウン" onClick={decrement} />
      <input type="button" value="リセット" onClick={reset} />
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
