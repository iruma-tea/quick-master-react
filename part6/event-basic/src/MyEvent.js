export default function MyEvent(props) {
  function show(e) {
    console.log(`${props.greet}, ${e.target.value}!!`);
  }

  return (
    <form>
      <label htmlFor="txtName">名前:</label>
      <input type="text" name="txtName" id="txtName" onChange={show} />
    </form>
  );
}
