import Portfolio from "./components/portfolio";
import { posts } from "./lib/getall.posts";

function Index() {
  return (
    <>
      <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
        <header style={{ fontFamily: "Rajdhani", fontWeight: "600" }}>
          SOME THINGS I'VE BUILT
        </header>
        <section>
          {posts.map((post) => (
            <Portfolio key={post.link} portfolio={post} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Index;
