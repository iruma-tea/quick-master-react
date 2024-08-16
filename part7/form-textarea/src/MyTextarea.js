import { useState } from "react";

export default function MyTextarea() {
  const [form, setForm] = useState({
    memo: "Reactは人気のフレームワーク・・・",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function show() {
    console.log(`メモ： ${form.memo}`);
  }

  return (
    <form>
      <label htmlFor="memo">メモ：</label>
      <textarea
        id="memo"
        name="memo"
        cols="30"
        rows="7"
        value={form.memo}
        onChange={handleChange}
      ></textarea>
      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
