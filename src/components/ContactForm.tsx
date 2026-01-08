"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  sourcePage?: string;
}

export function ContactForm({ sourcePage = "Page d'accueil" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Votre message a été envoyé avec succès !");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          <p>{statusMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p>{statusMessage}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Nom complet *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Votre nom"
            required
            disabled={isLoading}
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
            disabled={isLoading}
            className="bg-white border-slate-200 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Email *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="votre@email.com"
            required
            disabled={isLoading}
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
            disabled={isLoading}
            className="bg-white border-slate-200 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Message *</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Décrivez votre projet..."
          rows={4}
          required
          disabled={isLoading}
          className="bg-white border-slate-200 focus:border-primary focus:ring-primary resize-none"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 bg-primary hover:bg-primary/90"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer votre demande
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
