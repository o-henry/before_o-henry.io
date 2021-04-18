import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import BlogPage from "../components/blog";
import { blogs } from "../lib/getall.post";

const components = {
  img: Image,
  code: (props) => <pre style={{}} {...props} />,
};

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
