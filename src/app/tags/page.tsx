import Link from "next/link";
import { getTagCounts } from "@/lib/tagUtils";

export default function TagsPage() {
  const tagCounts = getTagCounts();

  return (
    <main className="flex flex-col">
      <h1 className="p-3 font-mono text-5xl font-extrabold text-blue-500">
        Tags
      </h1>
      <div className="flex flex-wrap gap-x-2 p-2">
        {Object.entries(tagCounts).map(([tag, count]) => (
          <Link
            className="mb-2 mr-2 mt-1 rounded-xl font-mono text-lg font-extrabold text-blue-500"
            key={tag}
            href={`/tags/${tag}`}
          >
            <span>{tag}</span>
            <span className="text-black dark:text-gray-400">({count})</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
