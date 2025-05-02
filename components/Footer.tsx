"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/constants";
import { Instagram, Linkedin, Github, MessageSquare } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card mt-20 border-t border-border/40 py-8 md:pl-[200px] md:pr-[70px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Lucas Colombo. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-amber-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-amber-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-amber-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-amber-500 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}