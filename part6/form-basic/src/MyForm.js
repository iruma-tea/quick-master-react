import { useState } from "react";

export default function MyForm() {
  const [form, setForm] = useState({
    name: "山田太郎",
    email: "tyamada@example.com",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function show() {
    console.log(`name: ${form.name}`);
    console.log(`email: ${form.email}`);
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input
          type="mail"
          name="email"
          id="email"
          onChange={handleChange}
          value={form.email}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
    </form>
  );
}
