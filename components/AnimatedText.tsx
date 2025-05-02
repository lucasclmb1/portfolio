"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  // Split text into an array of characters
  const characters = text.split("");

  // Animation variants for characters
  const characterAnimation = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  return (
    <div className={cn("flex", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          variants={characterAnimation}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}