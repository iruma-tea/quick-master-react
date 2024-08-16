import MyNew from "./MyNew";

export default function MyArticle(props) {
  return (
    <>
      <dt>
        <a href={props.url}>{props.title}</a>
        {props.isNew ? <MyNew /> : null}
      </dt>
      <dd>{props.description}</dd>
    </>
  );
}
