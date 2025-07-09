"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 bg-gradient-to-t from-white/80 via-white/0 to-transparent bg-[length:100%_200%] bg-bottom ${isScrolled ? "glass-card backdrop-blur-xl border-b border-white/20 shadow-lg" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold text-primary"
              whileHover={{
                textShadow: "0 0 20px rgba(107, 70, 193, 0.5)",
              }}
            >
              <img
                src="logo.png"
                alt="Onesto"
                className="h-8 w-auto rounded-full"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-xl glass-card hover:bg-primary/10 hover:text-primary">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div
                  className="glass-card rounded-2xl border-0 shadow-2xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid gap-2 p-6 md:w-[600px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-primary/10 to-primary/20 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow duration-200"
                          href="/product"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-primary">Employee Benefits</div>
                          <p className="text-sm leading-tight text-gray-600">
                            Comprehensive employee benefits and philanthropic platform
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-primary/10 to-primary/20 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow duration-200"
                          href="/product"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-primary">Philanthropic Benefits</div>
                          <p className="text-sm leading-tight text-gray-600">
                            Comprehensive employee benefits and philanthropic platform
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <Link
                      href="/shop-and-save"
                      className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                    >
                      <div className="text-sm font-medium leading-none">Shop and Save</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore our comprehensive feature set
                      </p>
                    </Link>
                    <Link
                      href="/wages-on-demand"
                      className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                    >
                      <div className="text-sm font-medium leading-none">Wages on Demand</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Connect with your existing tools
                      </p>
                    </Link>
                    <Link
                      href="/rewards-and-recognition"
                      className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                    >
                      <div className="text-sm font-medium leading-none">Rewards</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Connect with your existing tools
                      </p>
                    </Link>
                    <Link
                      href="/learn"
                      className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                    >
                      <div className="text-sm font-medium leading-none">Learn</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Connect with your existing tools
                      </p>
                    </Link>
                  </div>
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {["Blog", "About Us", "See How It Works"].map((item, index) => (
              <NavigationMenuItem key={item}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-").replace("see-", "")}`}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-xl glass-card px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none">
                      {item}
                    </NavigationMenuLink>
                  </Link>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 glow-primary rounded-xl px-6 py-2 font-semibold"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden glass-card rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden glass-card border-t border-white/20 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-4 space-y-4">
              {[
                { name: "Product", href: "/#product" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about" },
                { name: "See How It Works", href: "/how-it-works" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-sm font-medium hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Button asChild className="w-full bg-primary hover:bg-primary/90 glow-primary rounded-xl">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
