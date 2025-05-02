"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center items-center">
      {t.status}
    </div>
  );
}