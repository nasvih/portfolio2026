import { motion } from "framer-motion";
import { ArrowDown, Linkedin, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] border border-foreground rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.02 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] border border-foreground rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.05, scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="absolute bottom-32 left-0 right-0 h-px bg-foreground origin-left"
        />
      </div>

      <div className="container mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Role label */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
              >
                DevOps Engineer • Web Developer • Tech Leader
              </motion.div>
            </div>

            {/* Name - Split text reveal */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
                >
                  Muhammed
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-muted-foreground"
                >
                  Nasvih V
                </motion.h1>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Self-driven DevOps & IT professional with real-world experience 
              deploying CI/CD pipelines, building cloud-native platforms, and 
              managing multi-client web development projects.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground"
            >
              <motion.div 
                className="flex items-center gap-2 group cursor-default"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin size={14} className="group-hover:text-foreground transition-colors duration-300" />
                <span className="group-hover:text-foreground transition-colors duration-300">Saudi Arabia</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 group cursor-default"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <Phone size={14} className="group-hover:text-foreground transition-colors duration-300" />
                <span className="group-hover:text-foreground transition-colors duration-300">+966 533627769</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                className="magnetic-button px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-widest"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>Get in Touch</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nasvih"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 border-2 border-foreground font-mono text-sm uppercase tracking-widest hover:bg-foreground transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin size={16} className="group-hover:text-background transition-colors duration-300" />
                <span className="group-hover:text-background transition-colors duration-300">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated decorative frames */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="absolute -inset-6 border border-foreground/20"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                className="absolute -inset-12 border border-foreground/10"
              />
              
              {/* Corner accents */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                className="absolute -top-6 -left-6 w-12 h-px bg-foreground origin-left"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                className="absolute -top-6 -left-6 w-px h-12 bg-foreground origin-top"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                className="absolute -bottom-6 -right-6 w-12 h-px bg-foreground origin-right"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                className="absolute -bottom-6 -right-6 w-px h-12 bg-foreground origin-bottom"
              />
              
              {/* Image container with clip reveal */}
              <motion.div 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              >
                <motion.img
                  src={profilePhoto}
                  alt="Muhammed Nasvih V"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                className="absolute -right-4 md:-right-8 bottom-8 bg-background px-4 py-2 border border-border"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Information Technology Specialist
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.span 
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
            className="w-px h-12 bg-border origin-top"
          />
        </motion.div>
      </div>
    </section>
  );
};
