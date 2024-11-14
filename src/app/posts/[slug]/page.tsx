import { getPostBySlug } from "@/lib/mdxParser";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
    return null;
  }
  const { frontMatter, content } = post;

  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.date}</p>
      <div>
        {frontMatter.tags?.map((tag: string, index: number) => (
          <Link key={index} href={`/tags/${tag}`} passHref>
            <span className="tag cursor-pointer">#{tag}</span>
          </Link>
        ))}
      </div>
      <div className="post-content">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
