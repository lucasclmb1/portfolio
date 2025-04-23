"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/typography";
import ContactForm from "@/components/ContactForm";
import GeometricDecoration from "@/components/GeometricDecoration";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, MessageSquare } from "lucide-react";
import { socialLinks } from "@/constants";
import Link from "next/link";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -right-40 opacity-30 rotate-12" />
      
      <SectionTitle subtitle={t.contact.subtitle}>{t.contact.title}</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-medium mb-6">Let's connect</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-secondary/50 rounded-full p-2 mr-4 mt-1">
                <Mail className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:contact@lucascolombo.com" className="text-muted-foreground hover:text-amber-500 transition-colors">
                  contact@lucascolombo.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary/50 rounded-full p-2 mr-4 mt-1">
                <Phone className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-medium">WhatsApp</h4>
                <a href={socialLinks.whatsapp} className="text-muted-foreground hover:text-amber-500 transition-colors">
                  +51 981677930
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary/50 rounded-full p-2 mr-4 mt-1">
                <MapPin className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  São Leopoldo, Brasil
                </p>
              </div>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-4">Social Media</h4>
          <div className="flex space-x-4">
            <Link 
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 hover:bg-amber-500/10 p-3 rounded-full transition-colors group"
            >
              <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
            </Link>
            <Link 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 hover:bg-amber-500/10 p-3 rounded-full transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
            </Link>
            <Link 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 hover:bg-amber-500/10 p-3 rounded-full transition-colors group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
            </Link>
            <Link 
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 hover:bg-amber-500/10 p-3 rounded-full transition-colors group"
            >
              <MessageSquare className="h-5 w-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card border border-border/50 rounded-lg p-6">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}