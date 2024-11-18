import Link from "next/link";
import { getAllPosts } from "@/lib/mdxParser";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div>
      <h1>My Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="post-item">
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.frontMatter.title}</h2>
              <p>{post.frontMatter.date}</p>
              <div>
                {post.frontMatter.tags.map((tag: string) => (
                  <span key={tag} className="tag">
                    # {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
