"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  MapPin,
  Clock,
  CreditCard,
  Trash2,
  Plus,
  Minus,
  Check,
  ArrowLeft,
  ArrowRight,
  Truck,
  ChefHat,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cartItems = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Sauce tomate, mozzarella, basilic frais",
    price: 12.9,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Burger Gourmet",
    description: "Bœuf Angus, cheddar, bacon croustillant",
    price: 14.5,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Tiramisu Maison",
    description: "Mascarpone, café, cacao",
    price: 7.9,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop",
  },
];

const deliveryTimes = [
  {
    id: "express",
    label: "Express",
    time: "20-25 min",
    price: 2.99,
    icon: Truck,
  },
  {
    id: "standard",
    label: "Standard",
    time: "35-45 min",
    price: 0,
    icon: Clock,
  },
];

const steps = [
  { num: 1, label: "Panier", icon: ShoppingCart },
  { num: 2, label: "Livraison", icon: MapPin },
  { num: 3, label: "Paiement", icon: CreditCard },
];

export default function CommanderPage() {
  const router = useRouter();
  const [items, setItems] = useState(cartItems);
  const [activeDelivery, setActiveDelivery] = useState("standard");
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryPrice = activeDelivery === "express" ? 2.99 : 0;
  const total = subtotal + deliveryPrice;

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const canProceed = () => {
    if (step === 1) return items.length > 0;
    return true;
  };

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-background py-12 md:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl md:rounded-3xl border border-border bg-card p-6 md:p-12 text-center shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 md:mb-6 flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full bg-green-500/10"
            >
              <Check className="h-8 w-8 md:h-12 md:w-12 text-green-500" />
            </motion.div>
            <h1 className="mb-2 md:mb-4 text-2xl md:text-3xl font-bold text-foreground">
              Commande confirmée !
            </h1>
            <p className="mb-4 md:mb-6 text-sm md:text-lg text-muted-foreground">
              Votre commande a été passée avec succès. Vous recevrez un SMS de
              confirmation sous quelques minutes.
            </p>
            <div className="mb-6 md:mb-8 rounded-xl md:rounded-2xl bg-muted/50 p-4 md:p-6">
              <p className="mb-1 md:mb-2 text-xs md:text-sm text-muted-foreground">
                Numéro de commande
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                #DE{Date.now().toString().slice(-6)}
              </p>
              <p className="mt-2 md:mt-4 text-xs md:text-sm text-muted-foreground">
                Temps de livraison estimé :{" "}
                <span className="font-semibold text-foreground">
                  {activeDelivery === "express" ? "20-25 min" : "35-45 min"}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                asChild
              >
                <a href="/">
                  Retour à l'accueil
                </a>
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-primary"
                onClick={() => setOrderPlaced(false)}
              >
                Nouvelle commande
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-32 md:pb-20 pt-4 md:pt-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 md:mb-6"
        >
          <Button
            variant="ghost"
            size="sm"
            className="mb-2 md:mb-4"
            asChild
          >
            <a href="/">
              <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              Retour
            </a>
          </Button>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">
            Finaliser la commande
          </h1>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          {/* Mobile Progress */}
          <div className="flex items-center justify-between md:hidden mb-2">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all",
                    step >= s.num
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {step > s.num ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <s.icon className="h-4 w-4" />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "h-0.5 w-6",
                      step > s.num ? "bg-primary" : "bg-muted",
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs md:text-sm md:hidden">
            {steps.map((s) => (
              <span
                key={s.num}
                className={cn(
                  step >= s.num ? "text-primary" : "text-muted-foreground",
                )}
              >
                {s.label}
              </span>
            ))}
          </div>

          {/* Desktop Progress */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all",
                    step >= s.num
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {step > s.num ? <Check className="h-5 w-5" /> : s.num}
                </div>
                <span
                  className={cn(
                    "ml-2 text-sm",
                    step >= s.num ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "mx-4 h-0.5 w-12",
                      step > s.num ? "bg-primary" : "bg-muted",
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-4 md:space-y-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Cart */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-xl md:rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <h2 className="text-lg md:text-xl font-bold">Votre panier</h2>
                </div>

                {items.length === 0 ? (
                  <div className="py-8 md:py-12 text-center">
                    <p className="text-muted-foreground">
                      Votre panier est vide
                    </p>
                    <Link href="/#menu" className="mt-4 inline-block">
                      <Button variant="outline">Voir le menu</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3 md:space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 md:gap-4 rounded-lg border border-border/50 bg-muted/30 p-3 md:p-4"
                      >
                        <div className="h-14 w-14 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="text-sm md:text-base font-semibold text-foreground">
                              {item.name}
                            </h3>
                            <p className="hidden md:block text-xs md:text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 md:gap-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-7 w-7 md:h-8 md:w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-2.5 w-2.5 md:h-3 md:w-3" />
                              </Button>
                              <span className="w-6 md:w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-7 w-7 md:h-8 md:w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-2.5 w-2.5 md:h-3 md:w-3" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                              <span className="text-sm md:text-base font-bold text-primary">
                                {(item.price * item.quantity).toFixed(2)}€
                              </span>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-7 w-7 md:h-8 md:w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 md:space-y-6"
              >
                {/* Delivery Options */}
                <div className="rounded-xl md:rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <h2 className="text-lg md:text-xl font-bold">
                      Mode de livraison
                    </h2>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {deliveryTimes.map((delivery) => (
                      <motion.button
                        key={delivery.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveDelivery(delivery.id)}
                        className={cn(
                          "flex items-center gap-3 md:gap-4 rounded-xl border-2 p-3 md:p-4 transition-all",
                          activeDelivery === delivery.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50",
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full",
                            activeDelivery === delivery.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted",
                          )}
                        >
                          <delivery.icon className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-sm md:text-base font-semibold text-foreground">
                            {delivery.label}
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            {delivery.time}
                          </p>
                        </div>
                        <div>
                          {delivery.price === 0 ? (
                            <span className="rounded-full bg-green-100 px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm font-medium text-green-700">
                              Gratuit
                            </span>
                          ) : (
                            <span className="font-bold text-primary text-sm md:text-base">
                              +{delivery.price.toFixed(2)}€
                            </span>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="rounded-xl md:rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h2 className="text-lg md:text-xl font-bold">
                      Adresse de livraison
                    </h2>
                  </div>
                  <div className="grid gap-3 md:gap-4">
                    <div className="md:col-span-2">
                      <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                        Rue *
                      </label>
                      <input
                        type="text"
                        placeholder="123 Rue de la Gastronomie"
                        className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        placeholder="75001"
                        className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                        Ville *
                      </label>
                      <input
                        type="text"
                        placeholder="Paris"
                        className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                        Instructions (optionnel)
                      </label>
                      <textarea
                        placeholder="Digicode, étage, instructions spéciales..."
                        rows={2}
                        className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-xl md:rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <h2 className="text-lg md:text-xl font-bold">Paiement</h2>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                      Numéro de carte *
                    </label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                        Expire *
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 md:mb-2 block text-xs md:text-sm font-medium text-foreground">
                        CVC *
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full rounded-lg border border-border bg-background px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  Vos données sont sécurisées et chiffrées
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur-sm p-4 md:hidden">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-xl font-bold text-primary">
                {total.toFixed(2)}€
              </p>
            </div>
            <div className="flex gap-2">
              {step > 1 && (
                <Button variant="outline" size="lg" onClick={handlePrev}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Précédent
                </Button>
              )}
              {step < 3 ? (
                <Button
                  size="lg"
                  className="bg-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-primary"
                  onClick={handlePlaceOrder}
                  disabled={!canProceed()}
                >
                  <ChefHat className="mr-2 h-5 w-5" />
                  Commander
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed right-8 top-28 w-80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <h2 className="mb-6 text-xl font-bold">Résumé de commande</h2>

          <div className="space-y-4 border-b border-border pb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Sous-total ({items.reduce((acc, i) => acc + i.quantity, 0)}{" "}
                articles)
              </span>
              <span className="font-medium">{subtotal.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Livraison</span>
              <span className="font-medium">
                {deliveryPrice === 0 ? (
                  <span className="text-green-600">Gratuit</span>
                ) : (
                  `${deliveryPrice.toFixed(2)}€`
                )}
              </span>
            </div>
          </div>

          <div className="flex justify-between py-4 text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">{total.toFixed(2)}€</span>
          </div>

          {step < 3 ? (
            <Button
              size="lg"
              className="w-full bg-primary"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              Suivant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              size="lg"
              className="w-full bg-primary"
              onClick={handlePlaceOrder}
              disabled={!canProceed()}
            >
              <ChefHat className="mr-2 h-5 w-5" />
              Commander {total.toFixed(2)}€
            </Button>
          )}

          <div className="mt-4 space-y-2 text-center text-sm text-muted-foreground">
            <p>Sans engagement • Satisfait ou remboursé</p>
            <div className="flex justify-center gap-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                Sécurisé
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary" />
                {activeDelivery === "express" ? "20-25 min" : "35-45 min"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
