import { ExternalLink, Github } from "lucide-react";

interface RevealSceneProps {
    scrollProgress: number;
    cursorPos: { x: number; y: number };
    reducedMotion: boolean;
}

const RevealScene = ({
    scrollProgress,
    cursorPos,
    reducedMotion,
}: RevealSceneProps) => {
    // Scene 4 is active from 0.6 to 0.85 of scroll progress
    const sceneStart = 0.6;
    const sceneEnd = 0.85;
    const isActive = scrollProgress >= sceneStart && scrollProgress <= sceneEnd;

    const localProgress = (scrollProgress - sceneStart) / (sceneEnd - sceneStart);
    const opacity =
        localProgress < 0.15
            ? localProgress / 0.15
            : localProgress > 0.85
                ? (1 - localProgress) / 0.15
                : 1;

    const projects = [
        {
            title: "AI Travel Planner",
            description: "Smart itinerary generation with OpenAI integration",
            tech: ["Next.js", "TypeScript", "OpenAI"],
            gradient: "from-blue-500 to-cyan-500",
            position: { x: -15, y: -10, z: 150 },
        },
        {
            title: "Real-time Fraud Detection",
            description: "Machine learning system for transaction monitoring",
            tech: ["Python", "TensorFlow", "Redis"],
            gradient: "from-violet-500 to-purple-500",
            position: { x: 15, y: -10, z: 100 },
        },
        {
            title: "Portfolio 3D Experience",
            description: "Immersive WebGL portfolio with Three.js",
            tech: ["React", "Three.js", "GSAP"],
            gradient: "from-orange-500 to-red-500",
            position: { x: -10, y: 15, z: 50 },
        },
        {
            title: "Train Fare System",
            description: "Bilingual railway ticketing application",
            tech: ["React", "TypeScript", "Tailwind"],
            gradient: "from-green-500 to-emerald-500",
            position: { x: 12, y: 15, z: 0 },
        },
    ];

    if (!isActive) return null;

    return (
        <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            style={{ opacity }}
        >
            {/* Section title */}
            <div
                className="text-center mb-12"
                style={{
                    transform: `
            perspective(1000px)
            translateZ(${reducedMotion ? 0 : 200}px)
            scale(${0.8 + localProgress * 0.2})
          `,
                    opacity: Math.min(1, localProgress * 3),
                }}
            >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                    Featured{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                        Projects
                    </span>
                </h2>
                <p className="text-slate-400 text-lg">
                    Materializing from the virtual space
                </p>
            </div>

            {/* Project cards grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
                {projects.map((project, index) => {
                    // Staggered appearance
                    const cardDelay = index * 0.15;
                    const cardProgress = Math.max(
                        0,
                        Math.min(1, (localProgress - cardDelay) * 2)
                    );

                    // 3D positioning
                    const translateX = reducedMotion ? 0 : project.position.x * (1 - cardProgress);
                    const translateY = reducedMotion ? 0 : project.position.y * (1 - cardProgress);
                    const translateZ = reducedMotion ? 0 : project.position.z - project.position.z * cardProgress;
                    const rotateY = reducedMotion ? 0 : (1 - cardProgress) * 45;

                    // Depth blur
                    const blurAmount = reducedMotion ? 0 : Math.abs(translateZ) / 30;

                    // Cursor parallax on individual cards
                    const tiltX = reducedMotion ? 0 : -cursorPos.y * 2;
                    const tiltY = reducedMotion ? 0 : cursorPos.x * 2;

                    return (
                        <div
                            key={project.title}
                            className="pointer-events-auto"
                            style={{
                                transform: `
                  perspective(1200px)
                  translate3d(${translateX}%, ${translateY}%, ${translateZ}px)
                  rotateY(${rotateY}deg)
                  rotateX(${tiltX}deg)
                  rotateY(${tiltY + rotateY}deg)
                  scale(${cardProgress})
                `,
                                filter: `blur(${blurAmount}px)`,
                                opacity: cardProgress,
                                transition: "transform 0.2s ease-out",
                            }}
                        >
                            {/* Glow effect */}
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}
                            />

                            {/* Glass card */}
                            <div className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-display font-bold text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                                            <Github className="w-4 h-4 text-white" />
                                        </button>
                                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Depth indicator */}
                                <div className="absolute bottom-4 right-4 text-xs text-slate-600">
                                    Z: {project.position.z}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RevealScene;
