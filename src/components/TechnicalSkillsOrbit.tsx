"use client";

import {
    Code2,
    FileJson,
    Palette,
    Globe,
    Database,
    GitBranch,
    Braces,
    Sparkles
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const technicalSkillsData = [
    {
        id: 1,
        title: "JavaScript",
        date: "Core Language",
        content: "Building dynamic, interactive web applications with modern ES6+ features, async/await patterns, and DOM manipulation.",
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
        content: "Creating component-based UIs with hooks, state management, and performance optimization techniques.",
        category: "Frontend",
        icon: Code2,
        relatedIds: [1, 3, 6],
        status: "completed" as const,
        energy: 80,
    },
    {
        id: 3,
        title: "TypeScript",
        date: "Language",
        content: "Type-safe development with interfaces, generics, and advanced typing patterns for robust applications.",
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
        content: "Responsive designs with modern CSS, Flexbox, Grid, and utility-first Tailwind CSS framework.",
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
        content: "Semantic HTML structure, accessibility best practices, and modern web APIs.",
        category: "Frontend",
        icon: Globe,
        relatedIds: [4, 1],
        status: "completed" as const,
        energy: 95,
    },
    {
        id: 6,
        title: "Next.js",
        date: "Framework",
        content: "Server-side rendering, static generation, and full-stack React applications with API routes.",
        category: "Fullstack",
        icon: Sparkles,
        relatedIds: [2, 3],
        status: "in-progress" as const,
        energy: 65,
    },
    {
        id: 7,
        title: "Git & GitHub",
        date: "Version Control",
        content: "Version control workflows, branching strategies, pull requests, and collaborative development.",
        category: "Tools",
        icon: GitBranch,
        relatedIds: [2, 6],
        status: "completed" as const,
        energy: 75,
    },
    {
        id: 8,
        title: "Basic AI APIs",
        date: "Integration",
        content: "Integrating OpenAI, and other AI services into web applications for enhanced functionality.",
        category: "AI",
        icon: Database,
        relatedIds: [1, 6],
        status: "pending" as const,
        energy: 50,
    },
];

export function TechnicalSkillsOrbit() {
    return (
        <section id="skills" className="relative">
            {/* Section Header */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Technical Skills
                </h2>
                <p className="text-white/60 text-sm max-w-md mx-auto">
                    Click on any skill node to explore proficiency and related technologies
                </p>
            </div>

            <RadialOrbitalTimeline timelineData={technicalSkillsData} />
        </section>
    );
}

export default TechnicalSkillsOrbit;
