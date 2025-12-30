import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "DevOps & Infrastructure",
    skills: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "CI/CD Pipelines"],
  },
  {
    title: "Cloud & Monitoring",
    skills: ["AWS (EC2, S3, Route 53)", "Azure", "Prometheus", "Grafana", "Cloud Architecture"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "SEO Optimization", "Responsive Design"],
  },
  {
    title: "Database & Systems",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "System Administration", "Linux/Unix"],
  },
  {
    title: "Project Management",
    skills: ["Agile Methodology", "Team Leadership", "Client Communication", "Event Coordination"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "Postman", "Slack", "Google Workspace", "CRM Systems"],
  },
];

const competencies = [
  { name: "CI/CD Pipeline Development", level: 90 },
  { name: "Web Development", level: 95 },
  { name: "AWS Cloud Services", level: 85 },
  { name: "Docker & Kubernetes", level: 80 },
  { name: "Project Coordination", level: 90 },
  { name: "Client Communication", level: 95 },
  { name: "Problem Solving", level: 90 },
  { name: "Team Leadership", level: 85 },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            04 / Skills
          </motion.span>
          
          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold"
            >
              Expertise
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mt-6"
          >
            A comprehensive skill set spanning technical expertise, project management, 
            and interpersonal abilities suitable for both IT and non-IT roles.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Skills Categories */}
          <div className="space-y-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group"
              >
                <motion.h3 
                  className="font-display text-xl font-bold mb-5 inline-block relative"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.title}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute left-0 -bottom-1 w-full h-px bg-foreground origin-left"
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        delay: 0.4 + index * 0.1 + skillIndex * 0.03,
                        duration: 0.4
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        backgroundColor: "hsl(var(--foreground))",
                        color: "hsl(var(--background))"
                      }}
                      className="px-4 py-2 bg-secondary text-sm font-mono border border-transparent hover:border-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Competency Bars */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-xl font-bold mb-10"
            >
              Core Competency Levels
            </motion.h3>

            {competencies.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: 0.4 + index * 0.08, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <motion.span 
                    className="font-mono text-sm group-hover:font-bold transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {comp.name}
                  </motion.span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {comp.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${comp.level}%` } : {}}
                    transition={{ 
                      delay: 0.7 + index * 0.1, 
                      duration: 1.2, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="h-full bg-foreground origin-left"
                  />
                </div>
              </motion.div>
            ))}

            {/* Role Fit Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 mt-16"
            >
              <motion.div 
                className="p-6 bg-foreground text-background"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-display text-lg font-bold mb-4">
                  Perfect for IT Roles
                </h4>
                <ul className="text-sm space-y-2 opacity-80">
                  {["DevOps Engineer", "Web Developer", "IT Operations", "Technical Support"].map((role, i) => (
                    <motion.li 
                      key={role}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + i * 0.05, duration: 0.3 }}
                    >
                      → {role}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="p-6 border-2 border-foreground"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-display text-lg font-bold mb-4">
                  Excellent for Non-IT
                </h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  {["Project Coordinator", "Operations Manager", "Client Relations", "Event Management"].map((role, i) => (
                    <motion.li 
                      key={role}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + i * 0.05, duration: 0.3 }}
                    >
                      → {role}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
