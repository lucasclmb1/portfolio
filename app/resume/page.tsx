"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillsIcons, skillCategories } from "@/constants";
import { SectionTitle } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { FileText, Languages } from "lucide-react";
import GeometricDecoration from "@/components/GeometricDecoration";
import Image from "next/image";

export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -right-40 opacity-30 rotate-12" />
      
      <SectionTitle subtitle={t.resume.subtitle}>{t.resume.title}</SectionTitle>
      
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-secondary/50 rounded-full p-2 mr-4">
                <FileText className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-medium">{t.resume.skills}</h3>
            </div>
            
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center mb-4">
                    <category.icon className="h-5 w-5 text-amber-500 mr-2" />
                    <h4 className="text-lg font-medium capitalize">{category.title}</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        className="bg-card border border-border/50 rounded-lg p-3 flex items-center"
                      >
                        <div className="mr-3">
                          {skillsIcons[skill as keyof typeof skillsIcons] ? (
                            <div className="w-8 h-8 relative">
                              <Image
                                src={skillsIcons[skill as keyof typeof skillsIcons]}
                                alt={skill}
                                width={32}
                                height={32}
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 flex items-center justify-center bg-secondary/50 rounded-full">
                              <span className="text-xs font-bold">{skill.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Languages and Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-secondary/50 rounded-full p-2 mr-4">
                <Languages className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-medium">{t.resume.languages}</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h4 className="text-lg font-medium mb-2">{t.resume.portuguese}</h4>
                <div className="w-full bg-secondary rounded-full h-2 mb-1">
                  <div className="bg-amber-500 h-2 rounded-full w-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">{t.resume.nativeSpeaker}</span>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h4 className="text-lg font-medium mb-2">{t.resume.english}</h4>
                <div className="w-full bg-secondary rounded-full h-2 mb-1">
                  <div className="bg-amber-500 h-2 rounded-full w-[80%]"></div>
                </div>
                <span className="text-sm text-muted-foreground">{t.resume.fluent}</span>
              </div>
              
              <div className="mt-10 text-center">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  {t.resume.download}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}