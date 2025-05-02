"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/typography";
import GeometricDecoration from "@/components/GeometricDecoration";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -left-40 opacity-30 -rotate-12" />
      
      <SectionTitle>{t.projects.title}</SectionTitle>
      
      <div className="flex justify-center items-center">
        {t.status}
      </div>
    </div>
  );
}