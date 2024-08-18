import { useNavigate } from "react-router-dom";

// export default function MyHello(props) {
//   return <div>Hello, react!!</div>;
// }

export default function MyHello() {
  const navigate = useNavigate();
  function onClick() {
    navigate("/");
  }

  return (
    <div>
      <p>Hello, React!!</p>
      <input type="button" value="トップへ移動" onClick={onClick} />
    </div>
  );
}
