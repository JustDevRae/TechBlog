import { getAllPosts } from "@/lib/mdxParser";


type TagPageProps = {
  params: {
    tag: string;
  };
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const posts = getAllPosts();

  // 선택한 태그에 해당하는 게시물 필터링
  const filteredPosts = posts.filter((post) =>
    post.frontMatter.tags.includes(tag)
  );

  if (filteredPosts.length === 0) {
    return <p>No posts found for #{tag}</p>;
  }

  return (
    <main>
      <h1>Posts tagged with #{tag}</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>
              <h3>{post.frontMatter.title}</h3>
              <p>{post.frontMatter.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
