"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-full p-1.5 bg-secondary/50 hover:bg-amber-600/20 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-amber-500" />
        ) : (
          <Moon className="h-5 w-5 text-amber-600" />
        )}
      </div>
    </button>
  );
}