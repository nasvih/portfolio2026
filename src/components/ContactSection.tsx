import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Globe, Clock, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone (Saudi)",
    value: "+966 533627769",
    href: "tel:+966533627769",
  },
  {
    icon: Phone,
    label: "Phone (India)",
    value: "+91 9539966671",
    href: "tel:+919539966671",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nasvih.va@gmail.com",
    href: "mailto:nasvih.va@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nasvih",
    href: "https://linkedin.com/in/nasvih",
  },
  {
    icon: Globe,
    label: "Website",
    value: "nasvih.tech",
    href: "https://nasvih.tech",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-foreground text-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block font-mono text-sm uppercase tracking-[0.3em] opacity-60"
            >
              05 / Contact
            </motion.span>
            
            <div className="overflow-hidden mt-4">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold"
              >
                Let's Work
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-display text-4xl md:text-6xl font-bold"
              >
                Together
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg opacity-80 leading-relaxed mt-6 mb-10 max-w-md"
            >
              Ready to discuss how my diverse skill set can contribute to your team's success. 
              Available for immediate opportunities in Saudi Arabia.
            </motion.p>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-4 p-4 bg-background/10 mb-10"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-background rounded-full"
              />
              <div>
                <span className="font-mono text-sm uppercase tracking-widest">
                  Available Immediately
                </span>
                <p className="text-xs opacity-60 mt-1">
                  Saudi Arabia • India
                </p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="mailto:nasvih.va@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-mono text-sm uppercase tracking-widest overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Email Me</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nasvih"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-background/40 font-mono text-sm uppercase tracking-widest hover:border-background hover:bg-background hover:text-foreground transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Contact Cards */}
          <div className="space-y-4">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group flex items-center gap-6 p-6 bg-background/5 hover:bg-background hover:text-foreground transition-all duration-500"
                whileHover={{ x: 8 }}
              >
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center border border-background/30 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <contact.icon size={20} />
                </motion.div>
                <div className="flex-1">
                  <span className="block font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {contact.label}
                  </span>
                  <span className="block text-lg">{contact.value}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </motion.a>
            ))}

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4 p-6 border border-background/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Clock size={20} className="opacity-60" />
              </motion.div>
              <span className="font-mono text-sm opacity-80">
                Response Time: Within 24 hours
              </span>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-32 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-sm opacity-60">
            © 2024 Muhammed Nasvih V. All rights reserved.
          </p>
          <motion.p 
            className="font-display text-lg"
            whileHover={{ scale: 1.02 }}
          >
            Let's build something amazing together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
