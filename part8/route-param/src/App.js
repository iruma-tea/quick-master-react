import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function isCurrent({ isActive }) {
  return isActive ? "current" : undefined;
}

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink end className={isCurrent} to="/">
            トップ
          </NavLink>
        </li>
        <li>
          <NavLink className={isCurrent} to="/hello">
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink className={isCurrent} to="/article/13">
            公開記事No.13
          </NavLink>
        </li>
        <li>
          <NavLink className={isCurrent} to="/article/108">
            公開記事No.108
          </NavLink>
        </li>
        <li>
          <NavLink className={isCurrent} to="/article?id=108">
            公開記事（クエリ対応）
          </NavLink>
        </li>
        <li>
          <NavLink className={isCurrent} to="/search/react/router">
            検索結果
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
