'use client'

import { motion } from 'framer-motion'
import { Smartphone, CreditCard, MapPin, Clock, Shield, Gift } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Commande Facile',
    description: 'Interface intuitive pour commander en quelques clics depuis votre téléphone.',
  },
  {
    icon: MapPin,
    title: 'Suivi en Temps Réel',
    description: 'Suivez votre livreur en direct sur la carte depuis notre application.',
  },
  {
    icon: Clock,
    title: 'Livraison Express',
    description: 'Recevez votre commande en moins de 30 minutes, garantie.',
  },
  {
    icon: CreditCard,
    title: 'Paiement Sécurisé',
    description: 'Multiples options de paiement avec cryptage SSL sécurisé.',
  },
  {
    icon: Shield,
    title: 'Qualité Garantie',
    description: 'Satisfaction garantie ou remboursé, sans condition.',
  },
  {
    icon: Gift,
    title: 'Programme Fidélité',
    description: 'Gagnez des points à chaque commande et profitez de réductions.',
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Pourquoi nous choisir
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Une expérience{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              exceptionnelle
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Nous avons conçu chaque fonctionnalité pour vous offrir la meilleure
            expérience de livraison possible.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300 group-hover:from-primary group-hover:to-primary"
                >
                  <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover Decoration */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Plus de{' '}
            <span className="font-bold text-primary">50 000 clients</span>{' '}
            satisfaits nous font confiance chaque jour.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
