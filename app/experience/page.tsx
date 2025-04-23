"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/typography";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GeometricDecoration from "@/components/GeometricDecoration";

export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -right-40 opacity-30 rotate-12" />
      
      <SectionTitle subtitle={t.experience.subtitle}>{t.experience.title}</SectionTitle>
      
      <div className="max-w-6xl mx-auto">
        <ExperienceTimeline />
      </div>
    </div>
  );
}