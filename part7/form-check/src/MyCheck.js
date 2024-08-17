import { useState } from "react";

export default function MyCheck() {
  const [form, setForm] = useState({
    send: true,
  });

  function handleChangeCheck(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }

  function show() {
    console.log(`メール送付： ${form.send ? "有効" : "無効"}`);
  }
  return (
    <form>
      <label htmlFor="send">メール送付？：</label>
      <input
        id="send"
        name="send"
        type="checkbox"
        checked={form.send}
        onChange={handleChangeCheck}
      />
      <br />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
