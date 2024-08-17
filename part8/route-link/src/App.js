import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">トップ</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/article">公開記事</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
