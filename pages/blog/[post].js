import ReactMarkdown from "react-markdown";
import { postSlugs, postForSlug } from "../../posts";

function Post({ frontmatter, content }) {
  if (!frontmatter) return <></>;

  return (
    <div>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <ReactMarkdown source={content} />
      </article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
