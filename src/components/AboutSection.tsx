import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Briefcase, Award } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Seeking roles in DevOps, Web/IT Ops, Cloud Infrastructure, Tech Support, and Project Coordination",
  },
  {
    icon: Users,
    title: "Multi-Role Expertise",
    description: "Versatile professional comfortable in technical, operational, and coordination roles",
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Hands-on experience with enterprise-level CI/CD pipelines and cloud-native platforms",
  },
  {
    icon: Award,
    title: "Client Success",
    description: "Delivered 15+ successful web development projects with integrated SEO and digital branding",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 overflow-hidden">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            01 / About
          </motion.span>
          
          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold"
            >
              About Me
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mt-6"
          >
            A versatile technology professional with a unique blend of DevOps expertise, 
            web development skills, and project coordination experience. Ready to contribute 
            to diverse technical and operational roles.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group p-8 bg-background border border-border hover:border-foreground hover:bg-foreground transition-all duration-500 cursor-default"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-14 h-14 flex items-center justify-center border border-foreground mb-6 group-hover:border-background group-hover:bg-background transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <item.icon size={24} strokeWidth={1.5} className="group-hover:text-foreground transition-colors duration-500" />
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-background transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-background/70 transition-colors duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 overflow-hidden border-t border-b border-border py-8"
        >
          <motion.div 
            className="flex animate-marquee"
            style={{ width: "fit-content" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 gap-20 px-10">
                {[
                  { value: "15+", label: "Client Projects" },
                  { value: "60%", label: "Deployment Time Reduced" },
                  { value: "1000+", label: "Attendees Managed" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <span className="font-display text-5xl md:text-6xl font-bold">{stat.value}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground max-w-[120px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
