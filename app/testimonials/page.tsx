"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/typography";
import GeometricDecoration from "@/components/GeometricDecoration";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Sample testimonials (normally would come from a real data source)
const testimonials = [
  {
    name: "Ana Silva",
    role: "Product Manager at CWI",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "Lucas é um desenvolvedor extremamente talentoso e dedicado. Sua atenção aos detalhes e habilidades técnicas são impressionantes. Foi um prazer trabalhar com ele no projeto da Riachuelo."
  },
  {
    name: "Carlos Mendes",
    role: "Tech Lead",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "Trabalhei com Lucas no projeto do Canal OFF e fiquei impressionado com sua capacidade de resolver problemas complexos enquanto mantém o código limpo e bem estruturado."
  },
  {
    name: "Beatriz Ferreira",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    text: "Como designer, aprecio desenvolvedores que realmente se importam com a experiência do usuário. Lucas não só implementa fielmente os designs, mas também contribui com ideias valiosas para melhorar a experiência."
  }
];

export default function TestimonialsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20">
      <GeometricDecoration className="-top-20 -left-40 opacity-30 -rotate-12" />
      
      <SectionTitle subtitle={t.testimonials.subtitle}>{t.testimonials.title}</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border/50 rounded-lg p-6 relative"
          >
            <Quote className="absolute top-6 right-6 h-10 w-10 text-amber-500/20" />
            
            <p className="text-muted-foreground mb-6 relative z-10">{testimonial.text}</p>
            
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}