export default function MyArticle(props) {
  return (
    <>
      <dt>
        <a href={props.url}>{props.title}</a>
      </dt>
      <dd>{props.description}</dd>
    </>
  );
}
