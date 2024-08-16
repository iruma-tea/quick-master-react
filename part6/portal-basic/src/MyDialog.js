import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

export default function MyDialog() {
  const [show, setShow] = useState(false);

  return (
    <form>
      <input
        type="button"
        value="ダイアログ開閉"
        onClick={() => setShow(!show)}
      />
      {show &&
        createPortal(
          <div className="panel">
            <p>Portalの例です。</p>
          </div>,
          document.getElementById("panel")
        )}
    </form>
  );
}
