export default function MyEvent(props) {
  function show(e, suffix) {
    console.log(`${props.greet}, ${e.target.value}${suffix}`);
  }

  return (
    <form>
      <label htmlFor="name">名前：</label>
      <input id="txtName" type="text" onChange={(e) => show(e, "さん")} />
    </form>
  );
}
