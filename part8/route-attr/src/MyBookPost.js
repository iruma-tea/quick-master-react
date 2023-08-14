import { useActionData, Form } from "react-router-dom";

export default function MyBookPost() {
  const errs = useActionData();
  const e_title = errs?.get("title");
  const e_price = errs?.get("price");

  return (
    <Form method="POST">
      <div>
        <label htmlFor="title">書名:</label>
        <input type="text" name="title" id="title" size="30" />
        {e_title && <span>{e_title}</span>}
      </div>
      <div>
        <label htmlFor="price">価格:</label>
        <input type="number" name="price" id="price" />円
        {e_price && <span>{e_price}</span>}
      </div>
      <div>
        <button type="submit">登録</button>
      </div>
    </Form>
  );
}
