import { useRouteError } from "react-router-dom";

export default function MyError(props) {
  const error = useRouteError();
  return <div>{error.message}</div>;
}
