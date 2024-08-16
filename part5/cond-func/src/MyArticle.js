import MyNew from "./MyNew";

export default function MyArticle(props) {
  return (
    <>
      <dt>
        <a href={props.url}>{props.title}</a>
        {(() => {
          if (props.isNew) {
            return <MyNew />;
          }
        })()}
      </dt>
      <dd>{props.description}</dd>
    </>
  );
}
