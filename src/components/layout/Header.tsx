import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-bold hover:opacity-80">
          Rae.
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="/aboutme" className="hover:text-blue-500">
            About Me
          </Link>
          <Link href="/tags" className="hover:text-blue-500">
            Tags
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
