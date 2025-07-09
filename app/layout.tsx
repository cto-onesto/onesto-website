import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { EnhancedHeader } from "@/components/enhanced-header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Onesto - Employee Benefits & Philanthropic Benefits Platform",
    template: "%s | Onesto",
  },
  description:
    "Transform your employee experience with Onesto's comprehensive benefits platform. Attract and retain talent while supporting philanthropic causes and overcoming donor fatigue.",
  keywords: [
    "employee benefits",
    "philanthropic benefits",
    "employee engagement",
    "corporate social responsibility",
    "talent retention",
    "workplace benefits",
    "charitable giving",
    "employee wellness",
  ],
  authors: [{ name: "Onesto" }],
  creator: "Onesto",
  publisher: "Onesto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://onesto.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onesto.co",
    title: "Onesto - Employee Benefits & Philanthropic Benefits Platform",
    description: "Transform your employee experience with comprehensive benefits and philanthropic programs.",
    siteName: "Onesto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onesto - Employee Benefits & Philanthropic Benefits Platform",
    description: "Transform your employee experience with comprehensive benefits and philanthropic programs.",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EnhancedHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
