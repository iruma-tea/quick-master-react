import MyNew from "./MyNew";

export default function MyArticle(props) {
  function readerIfNew(isNew) {
    if (isNew) {
      return <MyNew />;
    }
  }
  return (
    <>
      <dt>
        <a href={props.url}>{props.title}</a>
        {readerIfNew(props.isNew)}
      </dt>
      <dd>{props.description}</dd>
    </>
  );
}
