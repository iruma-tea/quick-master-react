import { useState } from "react";

export default function MySelect() {
  const [form, setForm] = useState({
    fruit: "apple",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function show() {
    console.log(`好きな果物： ${form.fruit}`);
  }

  return (
    <form>
      <label htmlFor="fruit">好きな果物：</label>
      <select
        id="fruit"
        name="fruit"
        value={form.fruit}
        onChange={handleChange}
      >
        <option value="apple">リンゴ</option>
        <option value="orange">オレンジ</option>
        <option value="melon">メロン</option>
        <option value="grape">葡萄</option>
        <option value="strawberry">苺</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
