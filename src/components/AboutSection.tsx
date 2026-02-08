import { motion } from "framer-motion";
import { GraduationCap, Code, Brain, Rocket, Braces, Code2, FileJson, Palette, Globe, GitBranch, Sparkles, Database, ExternalLink } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GradientButton } from "@/components/ui/gradient-button";

const highlights = [
  {
    icon: GraduationCap,
    title: "IIT Madras",
    description: "BS in Data Science & Applications",
  },
  {
    icon: Code,
    title: "Full Stack",
    description: "Web Development Expert",
  },
  {
    icon: Brain,
    title: "AI/ML",
    description: "Building AI-powered Solutions",
  },
  {
    icon: Rocket,
    title: "5+ Projects",
    description: "Shipped & Deployed",
  },
];

const technicalSkillsData = [
  {
    id: 1,
    title: "JavaScript",
    date: "Core",
    content: "Building dynamic, interactive web applications with modern ES6+ features.",
    category: "Frontend",
    icon: Braces,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 2,
    title: "React",
    date: "Framework",
    content: "Creating component-based UIs with hooks and state management.",
    category: "Frontend",
    icon: Code2,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "TypeScript",
    date: "Language",
    content: "Type-safe development with interfaces and generics.",
    category: "Frontend",
    icon: FileJson,
    relatedIds: [1, 2],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "CSS/Tailwind",
    date: "Styling",
    content: "Responsive designs with modern CSS and Tailwind.",
    category: "Frontend",
    icon: Palette,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "HTML5",
    date: "Markup",
    content: "Semantic HTML and accessibility best practices.",
    category: "Frontend",
    icon: Globe,
    relatedIds: [4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 6,
    title: "Next.js",
    date: "Framework",
    content: "Server-side rendering and full-stack React apps.",
    category: "Fullstack",
    icon: Sparkles,
    relatedIds: [2, 3],
    status: "in-progress" as const,
    energy: 65,
  },
  {
    id: 7,
    title: "Git",
    date: "Tools",
    content: "Version control and collaborative development.",
    category: "Tools",
    icon: GitBranch,
    relatedIds: [2],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 8,
    title: "AI APIs",
    date: "Integration",
    content: "Integrating OpenAI and AI services.",
    category: "AI",
    icon: Database,
    relatedIds: [1, 6],
    status: "pending" as const,
    energy: 50,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer and IIT Madras student, turning ideas into elegant digital solutions
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="h-full"
            >
              <GlowingCard className="h-full p-6 text-center flex flex-col items-center justify-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
        {/* About Content - About Me + Orbital Skills */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              About Me
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm <span className="text-foreground font-medium">Sushant</span>, a web developer passionate about building modern, responsive, and engaging web experiences. I enjoy creating projects that combine clean design, smart logic, and real-world usability—from AI-based planners to interactive user interfaces.
              </p>
              <p>
                I am currently pursuing a <span className="text-foreground font-medium">BS in Data Science from IIT Madras</span>, which helps me strengthen my analytical thinking and problem-solving skills alongside my development work.
              </p>
              <p>
                I'm always exploring new technologies, refining my skills, and challenging myself to build better products with every project. I value <span className="text-primary">clean code</span>, <span className="text-primary">good design</span>, and <span className="text-primary">continuous learning</span>, and I aim to create digital solutions that are both functional and visually appealing.
              </p>
            </div>

            {/* View Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GradientButton className="gap-2 px-6">
                  <ExternalLink className="w-5 h-5" />
                  <span>View Resume</span>
                </GradientButton>
              </a>
            </motion.div>
          </motion.div>

          {/* Compact Orbital Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="font-display text-2xl font-semibold mb-4 text-center">
              Technical Skills
            </h3>
            <p className="text-muted-foreground text-sm text-center mb-4">
              Click any skill to explore
            </p>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <RadialOrbitalTimeline timelineData={technicalSkillsData} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
