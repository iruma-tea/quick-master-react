import { useParams } from "react-router-dom";

export default function MyArticle() {
  const { id } = useParams();
  if (id <= 0 || id >= 1000) {
    throw new Error("idの値が不正です。");
  }
  return <div>No. {id}の記事情報です。</div>;
}
