"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const PT_RESUME_TITLE = 'Lucas_Colombo_Curriculo.pdf';
const EN_RESUME_TITLE = 'Lucas_Colombo_Resume.pdf';

export default function Sidebar() {
  const { t, language } = useLanguage();
  const pathname = usePathname();

  const handleResumeClick = () => {
    const fileName = language === 'pt' ? PT_RESUME_TITLE : EN_RESUME_TITLE;
    window.open(`/files/${fileName}`, '_blank');
  };

  const navItems = [
    { name: t.navigation.home, path: "/" },
    { name: t.navigation.about, path: "/about" },
    { name: t.navigation.projects, path: "/projects" },
    { name: t.navigation.experience, path: "/experience" },
    { name: t.navigation.contact, path: "/contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="w-[200px] fixed top-0 bottom-0 left-0 hidden md:flex flex-col justify-between py-8 border-r border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="w-full flex flex-col items-start px-6">
        <nav className="w-full mt-16">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.path} className="w-full">
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm uppercase font-medium tracking-wider relative hover:text-amber-500 transition-colors block text-left",
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
    </div>
  );
}