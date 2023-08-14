import { useSearchParams } from "react-router-dom";

export default function MyArticle() {
  const [params, setParams] = useSearchParams();
  return <div>No. {params.get("id")}の記事情報です！</div>;
}
