'use client'
import { Inter } from "next/font/google";
import { motion } from "framer-motion"
const inter = Inter({ subsets: ["latin"] });

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container py-12 sm:py-20">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className=""
            whileHover={{
              textShadow: "0 0 20px rgba(107, 70, 193, 0.5)",
            }}
          >
            <img
              src="/mpd-logo.png"
              alt="MPD"
              className="h-auto w-auto mx-auto"
            />
          </motion.div>
          {children}
        </div>
      </div>
    </section>
  );
}
