"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  type,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-lg overflow-hidden h-full"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link
            href="#"
            className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center space-x-1 hover:bg-amber-600 transition-colors"
          >
            <span>{t.projects.viewProject}</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-amber-500 uppercase tracking-wider font-medium">{type}</span>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div>
          <p className="text-xs text-muted-foreground mb-2">{t.projects.technologies}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}