import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

export default function PostCard({ slug, title, date, tags }: PostCardProps) {
  return (
    <Card className="">
      <Link href={`/posts/${slug}`} passHref>
        <CardHeader>
          <h2 className="text-xl font-semibold">{title}</h2>
        </CardHeader>
        <CardContent>
          <p className="flex flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="tag mr-2 text-blue-500">
                #{tag}
              </span>
            ))}
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">{date}</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
