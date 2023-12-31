import { useContext } from "react";
import { MyAppContext } from "./MyCount1";

export default function MyCount3() {
  const { count, setCount } = useContext(MyAppContext);
  return (
    <div className="border">
      MyCount3
      <div>
        <input
          type="button"
          value="カウント"
          onClick={() => setCount(count + 1)}
        />
        <p>{count}回、クリックされました。</p>
      </div>
    </div>
  );
}
