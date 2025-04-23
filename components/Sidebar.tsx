"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/constants";
import { Instagram, Linkedin, Github, MessageSquare, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import LanguageSwitch from "./LanguageSwitch";

export default function Sidebar() {
  const { t, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const handleResumeClick = () => {
    const fileName = language === 'pt' ? 'Lucas_Colombo_Curriculo.pdf' : 'Lucas_Colombo_Resume.pdf';
    window.open(`/files/${fileName}`, '_blank');
  };

  const navItems = [
    { name: t.navigation.home, path: "/" },
    { name: t.navigation.about, path: "/about" },
    { name: t.navigation.projects, path: "/projects" },
    { name: t.navigation.experience, path: "/experience" },
    { name: t.navigation.testimonials, path: "/testimonials" },
    { name: t.navigation.contact, path: "/contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="w-[200px] fixed top-0 bottom-0 left-0 hidden md:flex flex-col justify-between py-8 border-r border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="w-full flex flex-col items-start px-6">
        <Link href="/" className="mb-16">
          <div className="h-10 w-10 rounded border border-amber-500/70 flex items-center justify-center">
            <span className="text-amber-500 font-bold">LC</span>
          </div>
        </Link>

        <nav className="w-full">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.path} className="w-full">
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm uppercase font-medium tracking-wider relative hover:text-amber-500 transition-colors block",
                    isActive(item.path) ? "text-amber-500" : "text-foreground/70",
                    isActive(item.path) ? "after:content-[''] after:absolute after:w-[3px] after:h-full after:bg-amber-500 after:-right-6 after:top-0" : ""
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <button
                onClick={handleResumeClick}
                className="text-sm uppercase font-medium tracking-wider relative hover:text-amber-500 transition-colors text-foreground/70 text-left w-full"
              >
                {t.navigation.resume}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="px-6 space-y-4">
        <LanguageSwitch />
        <button
          onClick={toggleTheme}
          className="w-full flex items-center space-x-2 bg-secondary/50 rounded-full px-3 py-1.5 text-sm hover:bg-amber-600/20 transition-colors"
        >
          {theme === "dark" ? (
            <>
              <Sun className="h-4 w-4" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}