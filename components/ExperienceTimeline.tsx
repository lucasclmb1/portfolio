"use client";

import { useLanguage } from "@/context/LanguageContext";
import { experiences } from "@/constants";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Heading, Text } from "./ui/typography";

export default function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-border before:left-[21px] md:before:left-1/2 before:-ml-px pl-12 md:pl-0">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative flex items-center justify-between md:justify-normal gap-x-4 group ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="flex flex-col items-start md:items-end justify-center md:w-[42%] gap-y-1">
            <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-x-2`}>
              <Calendar className="w-4 h-4 text-amber-500" />
              <Text size="sm" className="text-muted-foreground">
                {exp.period}
              </Text>
            </div>
            <Heading as="h3" size="lg" className="font-bold">
              {exp.company}
            </Heading>
            <Text size="sm" className="text-muted-foreground">
              {exp.location}
            </Text>
          </div>

          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 bg-border border-4 border-background w-6 h-6 rounded-full group-hover:border-amber-500 transition-colors duration-300">
            <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="md:w-[42%] bg-card p-4 rounded-lg border border-border/50 group-hover:border-amber-500/50 transition-colors">
            <Heading as="h4" size="md" className="font-semibold mb-2">
              {exp.role}
            </Heading>
            <ul className="list-disc pl-5 space-y-1">
              {exp.responsibilities.slice(0, 3).map((resp, respIndex) => (
                <li key={respIndex} className="text-sm text-muted-foreground">
                  {resp}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.skills.slice(0, 5).map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
              {exp.skills.length > 5 && (
                <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md">
                  +{exp.skills.length - 5}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}