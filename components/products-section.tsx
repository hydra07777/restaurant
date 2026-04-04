"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Star, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Tous", icon: "🍽️" },
  { id: "pizza", label: "Pizzas", icon: "🍕" },
  { id: "burger", label: "Burgers", icon: "🍔" },
  { id: "sushi", label: "Sushi", icon: "🍱" },
  { id: "salad", label: "Salades", icon: "🥗" },
  { id: "dessert", label: "Desserts", icon: "🍰" },
];

const products = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Sauce tomate, mozzarella, basilic frais",
    price: 12.9,
    originalPrice: 15.9,
    rating: 4.8,
    reviews: 234,
    time: "25-30 min",
    category: "pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    isPopular: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Burger Gourmet",
    description: "Bœuf Angus, cheddar, bacon croustillant",
    price: 14.5,
    originalPrice: null,
    rating: 4.9,
    reviews: 456,
    time: "20-25 min",
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    isPopular: true,
    isNew: false,
  },
  {
    id: 3,
    name: "Sushi Mix Premium",
    description: "12 pièces: saumon, thon, crevette",
    price: 18.9,
    originalPrice: 22.9,
    rating: 4.7,
    reviews: 189,
    time: "30-35 min",
    category: "sushi",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    isPopular: false,
    isNew: true,
  },
  {
    id: 4,
    name: "Salade César",
    description: "Poulet grillé, parmesan, croûtons",
    price: 11.5,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    time: "15-20 min",
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    isPopular: false,
    isNew: false,
  },
  {
    id: 5,
    name: "Tiramisu Maison",
    description: "Mascarpone, café, cacao",
    price: 7.9,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    time: "10 min",
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    isPopular: true,
    isNew: false,
  },
  {
    id: 6,
    name: "Pizza Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesan, chèvre",
    price: 15.9,
    originalPrice: null,
    rating: 4.8,
    reviews: 198,
    time: "25-30 min",
    category: "pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    isPopular: false,
    isNew: true,
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (id: number) => {
    setAddedItems((prev) => [...prev, id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((item) => item !== id));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Notre Menu
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Découvrez nos délices
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Une sélection soigneusement préparée des meilleurs plats, préparés
            avec des ingrédients frais et de qualité.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
              )}
            >
              <span>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Badges */}
                  <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
                    {product.isPopular && (
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground"
                      >
                        <Flame className="h-3 w-3" />
                        Populaire
                      </motion.span>
                    )}
                    {product.isNew && (
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        Nouveau
                      </motion.span>
                    )}
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 overflow-hidden rounded-xl h-40"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-card-foreground">
                      {product.name}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-accent-foreground">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {product.time}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-foreground">
                          {product.price.toFixed(2)}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice.toFixed(2)}€
                          </span>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="icon"
                          onClick={() => handleAddToCart(product.id)}
                          className={cn(
                            "h-10 w-10 rounded-full transition-all duration-300",
                            addedItems.includes(product.id)
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-primary text-primary-foreground hover:bg-primary/90",
                          )}
                        >
                          <AnimatePresence mode="wait">
                            {addedItems.includes(product.id) ? (
                              <motion.span
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                              >
                                ✓
                              </motion.span>
                            ) : (
                              <motion.span
                                key="plus"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                              >
                                <Plus className="h-5 w-5" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-border bg-background text-foreground hover:bg-muted"
          >
            Voir tout le menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
