"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("morrow-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  function changeTheme() {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("morrow-theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={changeTheme}
      className="grid size-10 place-items-center rounded-full border border-current transition duration-300 hover:-rotate-12 hover:bg-[#151515] hover:text-white dark:hover:bg-[#c8ff3d] dark:hover:text-[#151515]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted && isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
