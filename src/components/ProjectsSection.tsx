import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const categories = ["All", "Technical", "Events", "Client Work"];

const projects = [
  {
    category: "Technical",
    title: "Token Terra",
    description: "Real estate platform using Ethereum smart contracts for secure property transactions",
    tags: ["Ethereum", "Smart Contracts", "Web3", "React", "Node.js"],
    featured: true,
  },
  {
    category: "Technical",
    title: "Old School Games",
    description: "Retro gaming platform featuring classics like Tetris with modern web technologies",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"],
  },
  {
    category: "Technical",
    title: "Coetian",
    description: "Assistance platform using Google Maps for bus tracking and hostel management",
    tags: ["Google Maps API", "Real-time Tracking", "React", "Firebase"],
  },
  {
    category: "Events",
    title: "Spandanam",
    description: "Event portal for college fest with scheduling and live result updates",
    tags: ["Live Updates", "Scheduling", "Registration"],
  },
  {
    category: "Events",
    title: "Agnitus",
    description: "Technical fest portal with event management and participant tracking",
    tags: ["Event Management", "Participant Tracking", "Live Results"],
  },
  {
    category: "Events",
    title: "Quasso Liberum",
    description: "Quiz competition platform with real-time scoring and leaderboards",
    tags: ["Real-time Scoring", "Leaderboards", "Timer System"],
  },
  {
    category: "Client Work",
    title: "HeednHeal",
    description: "Healthcare clinic with token booking system and AWS integration",
    tags: ["Healthcare", "AWS", "Booking System"],
    link: "https://heednheal.com",
  },
  {
    category: "Client Work",
    title: "F2S International",
    description: "International business services portal",
    tags: ["Business", "Portal", "SEO"],
    link: "https://f2sinternational.com",
  },
  {
    category: "Client Work",
    title: "F2S Educare",
    description: "Educational services and consulting platform",
    tags: ["Education", "Services", "Consulting"],
    link: "https://f2seducare.in",
  },
  {
    category: "Client Work",
    title: "SphereAlly",
    description: "Digital solutions and technology services",
    tags: ["Technology", "Solutions", "Digital"],
    link: "https://sphereally.com",
  },
  {
    category: "Client Work",
    title: "WhimPro",
    description: "Professional services and creative solutions",
    tags: ["Creative", "Professional", "Services"],
    link: "https://whimpro.com",
  },
  {
    category: "Client Work",
    title: "Poochkoo",
    description: "Pet care services platform",
    tags: ["Pet Care", "Services", "E-commerce"],
    link: "https://poochkoo.com",
  },
  {
    category: "Client Work",
    title: "Dhalanaturals",
    description: "Natural products e-commerce store",
    tags: ["E-commerce", "Products", "Natural"],
  },
  {
    category: "Client Work",
    title: "Fruity Al Rawda",
    description: "Fresh fruits delivery service",
    tags: ["E-commerce", "Delivery", "Fresh Products"],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            03 / Projects
          </motion.span>
          
          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold"
            >
              Selected Work
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mt-6"
          >
            A comprehensive showcase of technical projects, client work, and event management platforms.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 font-mono text-sm uppercase tracking-widest overflow-hidden transition-colors duration-500 ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-background border border-border hover:border-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                layout: { duration: 0.4 }
              }}
              className="group relative p-8 bg-background border border-border hover:border-foreground hover:bg-foreground transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Category Badge */}
              <motion.span 
                className="inline-block px-3 py-1 mb-4 bg-secondary text-xs font-mono uppercase tracking-widest group-hover:bg-background group-hover:text-foreground transition-colors duration-500"
                layout
              >
                {project.category}
              </motion.span>

              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-background transition-colors duration-500">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed group-hover:text-background/70 transition-colors duration-500">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono border border-border group-hover:border-background/30 group-hover:text-background/80 transition-colors duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link if available */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm group-hover:text-background transition-colors duration-500"
                  whileHover={{ x: 4 }}
                >
                  View Project <ArrowUpRight size={14} />
                </motion.a>
              )}

              {/* Hover arrow */}
              <motion.div 
                className="absolute top-8 right-8"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <ExternalLink size={20} className="text-muted-foreground group-hover:text-background/60 transition-colors duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 p-8 md:p-12 bg-foreground text-background"
        >
          <p className="font-display text-lg md:text-xl text-center leading-relaxed">
            <span className="font-bold">15+ Client Websites Delivered</span> spanning 
            Healthcare, E-commerce, Business Services, Legal, Pet Care, and Technology 
            sectors with integrated SEO, hosting, and digital branding solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
