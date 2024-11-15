import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // NOTE: MDX 및 기타 파일 확장자를 페이지로 인식하도록 설정
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
  // NOTE: 추후 remark 및 rehype 플러그인을 추가할 예정
});

export default withMDX(nextConfig);
