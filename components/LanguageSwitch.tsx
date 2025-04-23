"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitch() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (lang: "en" | "pt") => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center space-x-2 bg-secondary/50 rounded-full px-3 py-1.5 text-sm hover:bg-amber-600/20 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span>{language === "pt" ? "Português" : "English"}</span>
      </button>
      
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 rounded-md shadow-lg bg-card border border-border z-50">
          <div className="py-1">
            <button
              onClick={() => selectLanguage("pt")}
              className={`block px-4 py-2 text-sm w-full text-left hover:bg-secondary ${
                language === "pt" ? "bg-secondary/70" : ""
              }`}
            >
              Português
            </button>
            <button
              onClick={() => selectLanguage("en")}
              className={`block px-4 py-2 text-sm w-full text-left hover:bg-secondary ${
                language === "en" ? "bg-secondary/70" : ""
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
}