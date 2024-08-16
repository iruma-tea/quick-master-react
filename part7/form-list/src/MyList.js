import { useState } from "react";

export default function MyList() {
  const [form, setForm] = useState({
    fruit: ["apple", "melon"],
  });

  function handleChangeList(e) {
    const data = [];
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: data,
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
        size="5"
        multiple={true}
        onChange={handleChangeList}
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
