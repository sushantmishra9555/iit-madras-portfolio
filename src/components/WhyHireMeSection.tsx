import { motion } from "framer-motion";
import { Hammer, Brain, Rocket, Zap, CheckCircle2 } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const reasons = [
    {
        icon: Hammer,
        title: "Real, Usable Products",
        description:
            "I build real, usable products — from AI-powered planners to fraud detection systems — focusing on solutions that solve real problems, not just demos.",
        hoverText: "Applied in real-world projects",
    },
    {
        icon: Brain,
        title: "AI + Full-Stack",
        description:
            "I combine JavaScript, Python, and modern frameworks with machine learning to build intelligent, scalable, and production-ready web applications.",
        hoverText: "Used in end-to-end systems",
    },
    {
        icon: Rocket,
        title: "Fast Learner & Shipper",
        description:
            "I adapt quickly, learn new tools on the go, and consistently ship clean, working features with strong attention to performance and user experience.",
        hoverText: "Optimized for performance & UX",
    },
];

const stats = [
    "3+ Production Projects",
    "AI + Full-Stack",
    "Continuous Learner"
];

const WhyHireMeSection = () => {
    return (
        <section id="why-hire-me" className="py-24 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Value Proposition</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Why <span className="gradient-text">Hire Me?</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        More than just code – here's the value I bring to your team
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="h-full"
                        >
                            <GlowingCard className="h-full p-8 flex flex-col items-center text-center gap-6 group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-2">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Hover Detail */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                                        {item.hoverText}
                                    </p>
                                </div>
                            </GlowingCard>
                        </motion.div>
                    ))}
                </div>

                {/* Micro Stats Line */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base text-muted-foreground"
                >
                    {stats.map((stat, i) => (
                        <div key={stat} className="flex items-center gap-2">
                            {i > 0 && <span className="hidden md:inline-block w-1 h-1 rounded-full bg-primary/50" />}
                            <span className="font-medium text-foreground/80 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {stat}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyHireMeSection;
