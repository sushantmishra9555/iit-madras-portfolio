import { motion } from "framer-motion";
import { ExternalLink, Github, Plane, Train, Shield, Layout, Code } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GradientButton } from "@/components/ui/gradient-button";

const projects = [
  {
    title: "AI TripGenius Planner",
    description: "An intelligent travel planning application powered by AI that helps users create personalized itineraries and discover destinations.",
    tech: ["TypeScript", "React", "AI/ML", "Tailwind CSS"],
    icon: Plane,
    github: "https://github.com/sushantmishra9555/AI-TripGenius-planner",
    live: "https://ai-trip-genius-planner.vercel.app",
    featured: true,
  },
  {
    title: "Real-time Fraud Detection",
    description: "A sophisticated system for detecting fraudulent transactions in real-time using advanced algorithms and data analysis.",
    tech: ["TypeScript", "React", "Data Analysis", "Security"],
    icon: Shield,
    github: "https://github.com/sushantmishra9555/real-time-fraud-detection",
    live: null,
    featured: true,
  },
  {
    title: "Train Fare Buddy",
    description: "Train fare calculator for Indian Railways with bilingual support, helping users calculate fares across different train classes.",
    tech: ["TypeScript", "React", "Tailwind CSS", "i18n"],
    icon: Train,
    github: "https://github.com/sushantmishra9555/train-fare-buddy",
    live: "https://train-fare-buddy.vercel.app",
    featured: true,
  },
  {
    title: "Aura Landing Page",
    description: "Modern responsive landing page built with React, TypeScript, and Tailwind CSS featuring sleek animations and design.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    icon: Layout,
    github: "https://github.com/sushantmishra9555/aura-landing-page",
    live: null,
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and experience with a modern dark theme design.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Code,
    github: "https://github.com/sushantmishra9555/index.html",
    live: "https://sushantmishra.in",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, from AI-powered applications to responsive web experiences
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="h-full"
            >
              <GlowingCard className="h-full p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.live && (
                      <GradientButton
                        asChild
                        className="min-w-0 px-4 py-2 h-8 text-xs rounded-lg flex gap-2"
                        variant="variant"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Live
                        </a>
                      </GradientButton>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                        title="View Code"
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tech.map((tech) => (
                    <div key={tech} className="relative group/tech">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-75 group-hover/tech:opacity-100 blur-[2px] transition duration-500 animate-gradient-xy"></div>
                      <span className="relative block px-3 py-1 rounded-full text-xs font-medium bg-black text-white border border-white/10">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-display text-xl font-semibold text-muted-foreground">
            Other Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-grow">
                <h4 className="font-display font-medium group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm">{project.tech.slice(0, 3).join(" • ")}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sushantmishra9555?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
