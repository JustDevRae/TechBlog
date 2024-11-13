import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';


// NOTE: process.cwd()로 루티 디렉터리 경로를 가져오고, 여기에 src/posts폴더의 절대 경로를 얻는다.
const postsDirectory = path.join(process.cwd(), 'src/posts');

// NOTE: slug를 사용해 특정 MDX 파일의 경로를 찾고, 파일의 내용을 읽어 파싱하는 함수
export async function getPostBySlug(slug: string) {

  // NOTE: slug에 따라 src/posts/slug.mdx 파일의 전체 경로를 만든다.
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  // NOTE: fullPath 위치에 있는 파일을 읽고, UTF-8 형식의 문자열로 반환한다.
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // NOTE: gray-matter로 메타데이터와 컨텐츠를 파싱한다. 
  const { data, content } = matter(fileContents);

  // NOTE: MDX 컨텐츠를 next-mdx-remote로 파싱
  const mdxSource = await serialize(content);

  return {
    slug,
    frontMatter: data,
    content: mdxSource,
  };
}

// NOTE: 여러 개의 MDX 파일 목록을 가져오는 함수
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      frontMatter: data,
    };
  });
}