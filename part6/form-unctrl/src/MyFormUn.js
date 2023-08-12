import { useRef } from "react";

export default function MyFormUn() {
  const name = useRef(null);
  const email = useRef(null);

  function show() {
    console.log(`name: ${name.current.value}`);
    console.log(`email: ${email.current.value}`);
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前:</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={name}
          defaultValue="山田太郎"
        />
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input
          type="mail"
          name="email"
          id="email"
          ref={email}
          defaultValue="tyamada@example.com"
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
