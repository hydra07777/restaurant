"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Cliente fidèle",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Service impeccable ! La livraison est toujours rapide et les plats arrivent chauds. Je recommande vivement DéliceExpress pour tous vos repas.",
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Food lover",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "La qualité des restaurants partenaires est exceptionnelle. J'ai découvert de nouvelles saveurs grâce à cette application. Un must-have !",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    role: "Maman occupée",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Parfait pour les soirées où je n'ai pas le temps de cuisiner. Les enfants adorent et moi aussi ! Livraison en 25 minutes, incroyable.",
  },
  {
    id: 4,
    name: "Lucas Petit",
    role: "Étudiant",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    text: "Prix raisonnables et portions généreuses. Le service client est très réactif. Mon app préférée pour commander à manger !",
  },
  {
    id: 5,
    name: "Émilie Rousseau",
    role: "Entrepreneuse",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Idéal pour les déjeuners au bureau. L'interface est intuitive et le suivi de commande en temps réel est un vrai plus.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-muted/30 py-20 md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent/50 px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Témoignages
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Ce que disent nos clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Des milliers de clients satisfaits nous font confiance chaque jour.
            Découvrez leurs expériences.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl"
              >
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-lg md:p-12">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Quote className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    {/* Stars */}
                    <div className="mb-6 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonials[currentIndex].rating
                              ? "fill-accent text-accent"
                              : "text-muted",
                          )}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="mb-8 text-lg text-card-foreground md:text-xl">
                      &ldquo;{testimonials[currentIndex].text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-primary/20">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-card-foreground">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full border-border bg-background text-foreground hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Précédent</span>
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full border-border bg-background text-foreground hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[
            { value: "4.9/5", label: "Note moyenne", icon: "⭐" },
            { value: "50k+", label: "Avis positifs", icon: "💬" },
            { value: "98%", label: "Clients satisfaits", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-2 block text-4xl">{stat.icon}</span>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
