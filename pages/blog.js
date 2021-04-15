import React from "react";
import Link from "next/link";
import { posts } from "../posts";

export default function Posts({ posts }) {
  return (
    <>
      {/* <h1>{title}</h1>
      <p>{description}</p> */}
      <h1>BLOG</h1>
      <main>
        <PostList posts={posts} />
      </main>
    </>
  );
}

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>No posts found</p>;

  return (
    <div className="w-full">
      <ul className="mt-4">
        {posts.map((post) => {
          const { frontmatter, slug } = post;
          const { description, date, title } = frontmatter;

          return (
            <li
              key={slug}
              className="px-8 py-2 m-0 mt-4 border-b border-card-border hover:bg-gray-100"
            >
              <Link href={`/blog/${slug}`}>
                <a>
                  <div className="text-xl font-medium">{title}</div>
                  <p className="mt-2 mb-4 font-light">{description}</p>
                  <p className="text-sm font-hairline">{date}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postsData = posts();

  return {
    props: {
      posts: postsData,
    },
  };
}
