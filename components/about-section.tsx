'use client'

import { motion } from 'framer-motion'
import { ChefHat, Leaf, Timer, Award } from 'lucide-react'

const features = [
  {
    icon: ChefHat,
    title: 'Chefs Experts',
    description:
      'Nos chefs passionnés préparent chaque plat avec soin et expertise.',
  },
  {
    icon: Leaf,
    title: 'Ingrédients Frais',
    description:
      'Nous sélectionnons uniquement les meilleurs ingrédients locaux et de saison.',
  },
  {
    icon: Timer,
    title: 'Livraison Rapide',
    description:
      'Votre commande arrive chaude et fraîche en moins de 30 minutes.',
  },
  {
    icon: Award,
    title: 'Qualité Garantie',
    description:
      'Satisfaction garantie ou remboursé. Votre bonheur est notre priorité.',
  },
]

const stats = [
  { value: '50k+', label: 'Commandes livrées' },
  { value: '4.9', label: 'Note moyenne' },
  { value: '200+', label: 'Restaurants partenaires' },
  { value: '30', label: 'Minutes en moyenne' },
]

export function AboutSection() {
  return (
    <section id="propos" className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
            À propos de nous
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Une passion pour la{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              gastronomie
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Depuis 2020, nous connectons les gourmands avec les meilleurs
            restaurants de la région. Notre mission : vous offrir une expérience
            culinaire exceptionnelle, directement chez vous.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary"
                >
                  <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </motion.div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex h-full items-center justify-center text-9xl"
              >
                👨‍🍳
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass absolute -right-4 top-8 rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">Top 10</p>
                    <p className="text-xs text-muted-foreground">Meilleure App 2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="glass absolute -left-4 bottom-8 rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❤️</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">+50 000</p>
                    <p className="text-xs text-muted-foreground">Clients satisfaits</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
              Notre histoire commence avec une simple idée
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tout a commencé en 2020, lorsque notre fondateur, passionné de
                gastronomie, a rêvé de créer un pont entre les meilleurs
                restaurants et les amateurs de bonne cuisine.
              </p>
              <p>
                Aujourd&apos;hui, DéliceExpress est devenu la référence pour la
                livraison de repas premium. Nous collaborons avec plus de 200
                restaurants partenaires soigneusement sélectionnés.
              </p>
              <p>
                Notre équipe de livreurs dévoués s&apos;assure que chaque commande
                arrive chez vous dans les meilleures conditions, chaude et
                savoureuse.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
