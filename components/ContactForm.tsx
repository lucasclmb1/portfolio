"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SendIcon } from "lucide-react";
import { Text } from "./ui/typography";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg mb-4">
          <Text>Thank you! Your message has been sent successfully.</Text>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {t.contact.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          placeholder={t.contact.namePlaceholder}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {t.contact.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          placeholder={t.contact.emailPlaceholder}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
          placeholder={t.contact.messagePlaceholder}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          <>
            {t.contact.send}
            <SendIcon className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}