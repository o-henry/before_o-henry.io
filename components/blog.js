import Link from "next/link";
import Metadata from "./metadata";

function BlogPage({ blog }) {
  const {
    link,
    module: { meta },
  } = blog;

  return (
    <article>
      <Metadata meta={meta} />
      <Link href={`/blog${link}`}>
        <a>Read more &rarr;</a>
      </Link>
    </article>
  );
}

export default BlogPage;
