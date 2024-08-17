import { useState } from "react";

export default function MyRadio() {
  const [form, setForm] = useState({
    sex: "female",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function show() {
    console.log(` メモ：${form.sex}`);
  }

  return (
    <form>
      <fieldset>
        <legend>性別：</legend>
        <label htmlFor="sex_male">男性</label>
        <input
          id="sex_male"
          name="sex"
          type="radio"
          value="male"
          checked={form.sex === "male"}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="sex_female">女性</label>
        <input
          id="sex_female"
          name="sex"
          type="radio"
          value="female"
          checked={form.sex === "female"}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="sex_other">その他</label>
        <input
          id="sex_other"
          name="sex"
          type="radio"
          value="other"
          checked={form.sex === "other"}
          onChange={handleChange}
        />
      </fieldset>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
