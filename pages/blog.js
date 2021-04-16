import BlogPage from "../components/blog";
import { blogs } from "../lib/getall.post";

function Blogs() {
  return (
    <>
      <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
        <section>
          {blogs.map((blog) => (
            <BlogPage key={blog.link} blog={blog} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Blogs;
