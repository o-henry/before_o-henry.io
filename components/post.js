import Metadata from "./metadata";

function Post({ children, meta }) {
  return (
    <>
      <Metadata meta={meta} project blog />
      <article>{children}</article>
    </>
  );
}

export default Post;
