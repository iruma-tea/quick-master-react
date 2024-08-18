import { NavLink, Outlet } from "react-router-dom";

function isCurrent(link) {
  return link.isActive ? { backgroundColor: "Yellow" } : undefined;
}

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink style={isCurrent} to="/">
            トップ
          </NavLink>
        </li>
        <li>
          <NavLink style={isCurrent} to="/hello">
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink style={isCurrent} to="/article">
            公開記事
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
