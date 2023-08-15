import { MyAppProvider } from "./MyAppContext";
import "./App.css";
import MyCount2 from "./MyCount2";

export default function MyCount1() {
  return (
    <MyAppProvider>
      <div className="border">
        MyCount1
        <MyCount2 />
      </div>
    </MyAppProvider>
  );
}
