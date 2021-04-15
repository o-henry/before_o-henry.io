import Metadata from "./metadata";

function ProjectPost({ children, meta }) {
  return (
    <>
      <Metadata meta={meta} post />
      <article>{children}</article>
    </>
  );
}

export default ProjectPost;
