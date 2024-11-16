import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white p-5 shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between text-lg font-bold">
        <Link href="/" className="text-gray-900 dark:text-white">
          Rae.
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/aboutme" className="text-gray-900 dark:text-white">
            About Me
          </Link>
          <Link href="/tags" className="text-gray-900 dark:text-white">
            Tags
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
