import Link from 'next/link';
import { getTagCounts } from '@/lib/tagUtils';

export default function TagsPage() {
  const tagCounts = getTagCounts();

  return (
    <main>
      <h1>Tags</h1>
      <div className="tags-list">
        {Object.entries(tagCounts).map(([tag, count]) => (
          <Link className="tag-button" key={tag} href={`/tags/${tag}`}>
            #{tag} ({count})
          </Link>
        ))}
      </div>
    </main>
  );
}
