import { getPostBySlug } from "@/lib/mdxParser";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
    return null;
  }
  const { frontMatter, content } = post;

  return (
    <article className="mx-auto px-5">
      <header className="flex flex-col items-center border-b-2 font-mono font-extrabold">
        <h1 className="text-center text-6xl text-blue-500">
          {frontMatter.title}
        </h1>
        <p className="text-lg text-gray-500">{frontMatter.date}</p>
        <div className="flex flex-wrap justify-center">
          {frontMatter.tags?.map((tag: string) => (
            <Link
              className="mr-2 rounded-xl text-lg text-blue-500"
              key={tag}
              href={`/tags/${tag}`}
              passHref
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>
      <section className="prose dark:prose-dark">
        <MDXRemote source={content} />
      </section>
    </article>
  );
}
