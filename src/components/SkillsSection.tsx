import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Sparkles } from "lucide-react";

const techSlugs = [
    "typescript",
    "javascript",
    "python",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "tailwindcss",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "vercel",
    "postgresql",
    "mongodb",
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-glow opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Tech Stack</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Technologies I work with to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative w-full max-w-lg aspect-square">
                        <IconCloud iconSlugs={techSlugs} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
