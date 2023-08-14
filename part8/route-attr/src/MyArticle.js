import { useParams } from "react-router-dom";

export default function MyArticle() {
  const params = useParams();
  return <div>No. {params.id}の記事情報です！</div>;
}
