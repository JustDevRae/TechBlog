import { getPostBySlug } from "@/lib/mdxParser";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  // 게시글 데이터 가져오기
  const post = await getPostBySlug(slug);

  // 게시글이 존재하지 않으면 404 페이지 표시
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
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="post-content">
        {/* MDX 본문 렌더링 */}
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
