import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function isCurrent(link) {
  // return link.isActive ? { backgroundColor: "Yellow" } : undefined;
  return link.isActive ? "current" : undefined;
}

export default function App() {
  return (
    <>
      <ul>
        <li>
          {/* <NavLink style={isCurrent} to="/"> */}
          <NavLink className={isCurrent} end to="/">
            トップ
          </NavLink>
        </li>
        <li>
          {/* <NavLink style={isCurrent} to="/hello"> */}
          <NavLink className={isCurrent} to="/hello">
            Hello
          </NavLink>
        </li>
        <li>
          {/* <NavLink style={isCurrent} to="/article"> */}
          <NavLink className={isCurrent} to="/article">
            公開記事
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
