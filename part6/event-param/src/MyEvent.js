export default function MyEvent(props) {
  function show(e, suffix) {
    console.log(`${props.greet}, ${e.target.value} ${suffix}!!`);
  }

  return (
    <form>
      <label htmlFor="txtName">名前:</label>
      <input
        type="text"
        name="txtName"
        id="txtName"
        onChange={(e) => show(e, "さん")}
      />
    </form>
  );
}
