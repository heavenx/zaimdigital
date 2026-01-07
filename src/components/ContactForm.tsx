"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Nom complet</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Votre nom"
            className="bg-white border-slate-200 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Entreprise</label>
          <Input
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Nom de l'entreprise"
            className="bg-white border-slate-200 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="votre@email.com"
            className="bg-white border-slate-200 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Téléphone</label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+212 6XX XXX XXX"
            className="bg-white border-slate-200 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Message</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Décrivez votre projet..."
          rows={4}
          className="bg-white border-slate-200 focus:border-primary focus:ring-primary resize-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
        Envoyer votre demande
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
