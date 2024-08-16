export default function MyEvent(props) {
  function show(e) {
    console.log(`${props.greet}, ${e.target.value}`);
  }

  return (
    <form>
      <label htmlFor="txtName">名前：</label>
      <input id="txtName" type="text" onChange={show} />
    </form>
  );
}
