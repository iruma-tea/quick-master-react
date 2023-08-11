import MyNew from "./MyNew";

export default function MyArticle(props) {
  function renderIfNew(isNew) {
    if (isNew) {
      return <MyNew />;
    }
  }
  return (
    <>
      <dt>
        <a href={props.url}>{props.title}</a>
        {renderIfNew(props.isNew)}
      </dt>
      <dd>{props.description}</dd>
    </>
  );
}
