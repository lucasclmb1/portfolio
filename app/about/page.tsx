"use client";

import { useLanguage } from "@/context/LanguageContext";
import SkillCard from "@/components/SkillCard";
import { SectionTitle } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { Code, PencilRuler, BarChart } from "lucide-react";
import GeometricDecoration from "@/components/GeometricDecoration";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -right-40 opacity-30 rotate-12" />
      
      <SectionTitle>{t.about.title}</SectionTitle>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.about.description}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SkillCard 
            icon={Code} 
            title={t.about.webDevelopment} 
            description={t.about.webDevelopmentDescription} 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillCard 
            icon={PencilRuler} 
            title={t.about.uiDesign} 
            description={t.about.uiDesignDescription} 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SkillCard 
            icon={BarChart} 
            title={t.about.seo} 
            description={t.about.seoDescription} 
          />
        </motion.div>
      </div>
    </div>
  );
}