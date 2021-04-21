import BlogPreview from "../components/blog-preview";
import { getAllPosts } from "../lib/getall.post";

function BlogPage() {
  const blogs = getAllPosts();

  return (
    <>
      <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
        <section>
          {blogs.map((blog) => (
            <BlogPreview key={blog.link} blog={blog} />
          ))}
        </section>
      </div>
    </>
  );
}

export default BlogPage;
