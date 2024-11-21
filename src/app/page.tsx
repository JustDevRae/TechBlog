import { getAllPosts } from "@/lib/mdxParser";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">My Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.frontMatter.title}
            date={post.frontMatter.date}
            tags={post.frontMatter.tags}
          />
        ))}
      </div>
    </div>
  );
}
