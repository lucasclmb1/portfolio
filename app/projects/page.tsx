"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/constants";
import { SectionTitle } from "@/components/ui/typography";
import ProjectCard from "@/components/ProjectCard";
import GeometricDecoration from "@/components/GeometricDecoration";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -left-40 opacity-30 -rotate-12" />
      
      <SectionTitle>{t.projects.title}</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            type={project.type}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}