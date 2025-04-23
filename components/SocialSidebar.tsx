"use client";

import Link from "next/link";
import { socialLinks } from "@/constants";
import { Instagram, Linkedin, Github, MessageSquare } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="w-[70px] fixed top-0 bottom-0 right-0 hidden md:flex flex-col items-center justify-center py-8 border-l border-border/40">
      <div className="flex flex-col space-y-8">
        <Link 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-amber-500 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </Link>
        <Link 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-amber-500 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-amber-500 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link 
          href={socialLinks.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-amber-500 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}