import { getAllPosts } from "@/lib/mdxParser";

type TagPageProps = {
  params: {
    tag: string;
  };
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const posts = getAllPosts();

  const filteredPosts = posts.filter((post) =>
    post.frontMatter.tags.includes(tag)
  );

  if (filteredPosts.length === 0) {
    return <p>No posts found for #{tag}</p>;
  }

  return (
    <main>
      <h1 className="p-3 font-mono text-5xl font-extrabold text-blue-500">
        {tag}
      </h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>
              <h3>{post.frontMatter.title}</h3>
              <p>{post.frontMatter.date}</p>
              <div>
                {post.frontMatter.tags.map((tag: string) => (
                  <span key={tag} className="tag">
                    # {tag}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
