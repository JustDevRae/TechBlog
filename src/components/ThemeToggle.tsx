"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Light from "../../public/images/light.svg";
import Dark from "../../public/images/dark.svg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="rounded-md bg-gray-200 p-2 hover:ring-2 hover:ring-gray-300 dark:bg-gray-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Image src={Dark} alt="darkmode" width={20} height={20} />
      ) : (
        <Image src={Light} alt="lightmode" width={20} height={20} />
      )}
    </button>
  );
}
