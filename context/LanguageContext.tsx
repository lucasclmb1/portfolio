"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/i18n/translations";

type Languages = "en" | "pt";

type LanguageContextType = {
  language: Languages;
  t: Record<string, any>;
  changeLanguage: (lang: Languages) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>("pt");
  const [t, setT] = useState(translations.pt);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Languages | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
  }, []);

  const changeLanguage = (lang: Languages) => {
    setLanguage(lang);
    setT(translations[lang]);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};