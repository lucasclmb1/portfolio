"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui/typography";
import AnimatedText from "@/components/AnimatedText";
import GeometricDecoration from "@/components/GeometricDecoration";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GeometricDecoration className="top-1/4 -right-40 opacity-30 rotate-45" />
      <GeometricDecoration className="bottom-0 -left-40 opacity-20 -rotate-12" />
      
      <div className="container max-w-6xl mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <AnimatedText 
              text={t.hero.title}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter justify-center"
            />
            <AnimatedText 
              text={t.hero.subtitle}
              className="text-xl text-muted-foreground justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}