"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile } from "@/components/ui/turnstile";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface DemoRequestFormProps {
  sourcePage: string;
  accentColor?: "orange" | "primary" | "green";
}

export function DemoRequestForm({ sourcePage, accentColor = "primary" }: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
  }, []);

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
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Votre demande de démo a été envoyée avec succès !");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTurnstileToken(null);
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

  const colorClasses = {
    orange: {
      border: "focus:border-orange-500",
      button: "bg-orange-600 hover:bg-orange-700 shadow-orange-600/25 hover:shadow-orange-600/30"
    },
    primary: {
      border: "focus:border-primary",
      button: "bg-primary hover:bg-primary/90 shadow-primary/25 hover:shadow-primary/30"
    },
    green: {
      border: "focus:border-green-500",
      button: "bg-green-600 hover:bg-green-700 shadow-green-600/25 hover:shadow-green-600/30"
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <Card className="border-none shadow-2xl bg-white">
      <CardContent className="p-8">
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-900">
                Nom & Prénom
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={`h-12 border-slate-200 ${colors.border} transition-colors`}
                placeholder="Votre nom complet"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-900">
                Entreprise
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                className={`h-12 border-slate-200 ${colors.border} transition-colors`}
                placeholder="Nom de votre entreprise"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`h-12 border-slate-200 ${colors.border} transition-colors`}
                placeholder="votre@email.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                Téléphone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className={`h-12 border-slate-200 ${colors.border} transition-colors`}
                placeholder="+212 6XX XXX XXX"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-900">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`min-h-32 border-slate-200 ${colors.border} transition-colors resize-none`}
              placeholder="Parlez-nous de vos besoins..."
              required
              disabled={isLoading}
            />
          </div>

          <Turnstile
            onVerify={handleTurnstileVerify}
            onError={handleTurnstileError}
            onExpire={handleTurnstileError}
          />

          <Button
            type="submit"
            size="lg"
            className={`w-full gap-2 ${colors.button} shadow-lg hover:shadow-xl transition-all duration-300`}
            disabled={isLoading || !turnstileToken}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Demander une démo gratuite
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
