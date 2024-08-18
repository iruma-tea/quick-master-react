import { useNavigate } from "react-router-dom";

export default function MyHello(props) {
  const navigate = useNavigate();

  function onClick() {
    navigate("/");
  }
  return (
    <div>
      <p>Hello, react!!</p>
      <input type="button" value="トップへ移動" onClick={onClick} />
    </div>
  );
}
