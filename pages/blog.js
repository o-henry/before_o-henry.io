import { MDXProvider } from "@mdx-js/react";
import BlogPage from "../components/blog";
import { blogs } from "../lib/getall.post";

const components = { code: (props) => <pre style={{}} {...props} /> };

function Blogs() {
  return (
    <>
      <MDXProvider components={components}>
        <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
          <section>
            {blogs.map((blog) => (
              <BlogPage key={blog.link} blog={blog} />
            ))}
          </section>
        </div>
      </MDXProvider>
    </>
  );
}

export default Blogs;
