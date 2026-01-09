import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Lead Devops Engineer",
    company: "Current Company",
    period: "September 2025 – Present",
    location: "Jeddah, Saudi Arabia",
    type: "Full-time • Office",
    achievements: [
      "Managing IT team and overseeing technical operations",
      "Developing and maintaining internal products and systems",
      "Implementing infrastructure solutions and security protocols",
      "Coordinating with stakeholders for technology initiatives",
      "Streamlining IT processes and workflows for efficiency",
    ],
  },
  {
    title: "Junior DevOps Engineer",
    company: "Vahmine Technologies",
    period: "July 2024 – July 2025",
    location: "Bangalore, India",
    type: "Full-time • Office",
    achievements: [
      "Optimized CI/CD pipelines with GitHub Actions for multiple projects",
      "Containerized and orchestrated deployments with Docker & Kubernetes",
      "Managed AWS infrastructure (EC2, S3, Route 53), ensured high uptime and cost-efficiency",
      "Automated configuration management with Ansible",
      "Implemented performance monitoring via Prometheus + Grafana",
      "Reduced deployment time by 60% through pipeline optimization",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 – Present",
    location: "Remote",
    type: "Freelance",
    achievements: [
      "Created 15+ websites with integrated SEO, hosting, and digital branding",
      "Developed complex applications including clinic booking systems with AWS integration",
      "Managed complete project lifecycle from conception to deployment",
      "Clients include healthcare, international business, e-commerce, and pet care industries",
      "Maintained 100% client satisfaction with timely delivery and post-launch support",
    ],
    projects: [
      { name: "HeednHeal.com", desc: "Clinic with token booking + AWS" },
      { name: "F2SInternational.com", desc: "International business portal" },
      { name: "Poochkoo.com", desc: "Pet care services platform" },
    ],
  },
  {
    title: "Website Head & Program Coordinator",
    company: "College of Engineering Thalassery",
    period: "2020 – 2024",
    location: "Thalassery, Kerala",
    type: "Leadership Role",
    achievements: [
      "Led college web projects for major fests & events (Spandanam, Agnitus, etc.)",
      "Built dynamic event portals with ticketing, scheduling, and live updates",
      "Coordinated 1000+ attendee operations, managed tech support and volunteers",
      "Streamlined event management processes through custom web solutions",
      "Trained and mentored junior team members in web development",
    ],
  },
  {
    title: "Founder",
    company: "FundUp Financial Literacy Club",
    period: "2023 – 2024",
    location: "College of Engineering Thalassery",
    type: "Leadership Role",
    achievements: [
      "Created and launched a financial literacy club from concept to execution",
      "Built comprehensive website fundup.cethalassery.ac.in",
      "Ran 4+ student-focused programs on budgeting & side hustles",
      "Engaged 200+ students in financial literacy initiatives",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            02 / Experience
          </motion.span>
          
          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold"
            >
              Professional Journey
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mt-6"
          >
            A diverse background spanning DevOps engineering, web development, and project coordination.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border origin-top transform md:-translate-x-1/2" 
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.4 + index * 0.2, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`relative grid md:grid-cols-2 gap-8 mb-16 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Timeline dot with pulse */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-foreground transform -translate-x-1/2 md:-translate-x-1/2"
              />

              {/* Content */}
              <motion.div
                className={`pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16 md:text-left"
                }`}
                whileHover={{ x: index % 2 === 0 ? -8 : 8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group p-8 bg-secondary border border-transparent hover:border-foreground hover:bg-foreground transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-mono text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-background text-xs uppercase tracking-wider group-hover:bg-background group-hover:text-foreground transition-colors duration-500">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-background transition-colors duration-500">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-background/70 transition-colors duration-500">{exp.company}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-500">
                    {exp.achievements.slice(0, 4).map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 + i * 0.05, duration: 0.4 }}
                      >
                        <span className="text-foreground mt-1 group-hover:text-background transition-colors duration-500">→</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Projects if any */}
                  {exp.projects && (
                    <div className="mt-6 pt-6 border-t border-border group-hover:border-background/20 transition-colors duration-500">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                        Notable Projects
                      </span>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.projects.map((project, i) => (
                          <motion.a
                            key={i}
                            href={`https://${project.name.toLowerCase()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-background text-xs font-mono hover:bg-foreground hover:text-background transition-colors duration-300"
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            {project.name}
                            <ArrowUpRight size={12} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:block md:order-1"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
