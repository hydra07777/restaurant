import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/hooks/useCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DéliceExpress - Restaurant en ligne",
    template: "%s | DéliceExpress",
  },
  description:
    "Commandez vos plats préférés en ligne. Livraison rapide de pizzas, burgers, sushis et plus encore dans toute la région.",
  keywords: [
    "restaurant",
    "livraison",
    "pizza",
    "burger",
    "sushi",
    "commande en ligne",
    "food delivery",
  ],
  authors: [{ name: "ArcaneCore" }],
  creator: "ArcaneCore",
  publisher: "ArcaneCore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "DéliceExpress - Restaurant en ligne",
    description:
      "Commandez vos plats préférés en ligne. Livraison rapide et frais.",
    site: "@deliceexpress",
    creator: "@deliceexpress",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://deliceexpress.com",
    siteName: "DéliceExpress",
    title: "DéliceExpress - Restaurant en ligne",
    description:
      "Commandez vos plats préférés en ligne. Livraison rapide de pizzas, burgers, sushis et plus encore.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        width: 1200,
        height: 630,
        alt: "DéliceExpress - Restaurant en ligne",
      },
    ],
  },
  alternates: {
    canonical: "https://deliceexpress.com",
    languages: {
      "fr-FR": "https://deliceexpress.com",
    },
  },
  category: "food",
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
