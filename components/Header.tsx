"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { CodeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { name: t.navigation.home, path: "/" },
    { name: t.navigation.about, path: "/about" },
    { name: t.navigation.projects, path: "/projects" },
    { name: t.navigation.resume, path: "/resume" },
    { name: t.navigation.experience, path: "/experience" },
    { name: t.navigation.testimonials, path: "/testimonials" },
    { name: t.navigation.contact, path: "/contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="h-10 w-10 rounded border border-amber-500/70 flex items-center justify-center">
            <CodeIcon className="h-6 w-6 text-amber-500" />
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-500",
                    isActive(item.path) ? "text-amber-500" : "text-foreground/70"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}