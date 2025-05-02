"use client";

import Link from "next/link";
import { CodeIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 px-6 w-full items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="h-10 w-10 rounded border border-amber-500/70 flex items-center justify-center">
            <CodeIcon className="h-6 w-6 text-amber-500" />
          </div>
        </Link>

        <div className="flex items-center space-x-3">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}