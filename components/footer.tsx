'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  company: [
    { label: 'À propos', href: '#propos' },
    { label: 'Carrières', href: '#' },
    { label: 'Presse', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  support: [
    { label: 'Centre d\'aide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'Partenaires', href: '#' },
  ],
  legal: [
    { label: 'CGU', href: '#' },
    { label: 'Confidentialité', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Mentions légales', href: '#' },
  ],
}

const socialLinks = [
  { icon: '𝕏', href: '#', label: 'Twitter' },
  { icon: 'in', href: '#', label: 'LinkedIn' },
  { icon: 'f', href: '#', label: 'Facebook' },
  { icon: '📸', href: '#', label: 'Instagram' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <ShoppingBag className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Délice<span className="text-primary">Express</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Votre plateforme de livraison de repas premium. Des plats
              délicieux livrés chez vous en moins de 30 minutes.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <motion.a
                href="mailto:contact@delice-express.fr"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@delice-express.fr
              </motion.a>
              <motion.a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4 text-primary" />
                +33 1 23 45 67 89
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4 text-primary" />
                Paris, France
              </motion.div>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Entreprise
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Légal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Restez informé
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Recevez nos offres exclusives et nouveautés directement dans
                votre boîte mail.
              </p>
            </div>
            <form className="flex w-full gap-3 md:w-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary md:w-64"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                S&apos;inscrire
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DéliceExpress. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
