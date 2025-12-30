import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
        }`}
      >
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <motion.a
            href="#"
            className="font-display text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MNV
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={item.href}
                  className="relative font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute left-0 -bottom-1 w-full h-px bg-foreground origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/nasvih"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-foreground text-background font-mono text-sm uppercase tracking-widest overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-secondary"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">Resume</span>
              </motion.a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 relative z-50"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          clipPath: isMobileMenuOpen 
            ? "circle(150% at calc(100% - 40px) 40px)" 
            : "circle(0% at calc(100% - 40px) 40px)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-40 bg-foreground text-background md:hidden"
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 30,
              }}
              transition={{ 
                delay: isMobileMenuOpen ? 0.1 + index * 0.1 : 0, 
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="font-display text-4xl font-bold hover:opacity-60 transition-opacity duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};
