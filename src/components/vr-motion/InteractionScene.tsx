import { Code2, Palette, Zap } from "lucide-react";

interface InteractionSceneProps {
    scrollProgress: number;
    cursorPos: { x: number; y: number };
    reducedMotion: boolean;
}

const InteractionScene = ({
    scrollProgress,
    cursorPos,
    reducedMotion,
}: InteractionSceneProps) => {
    // Scene 2 is active from 0.2 to 0.4 of scroll progress
    const sceneStart = 0.2;
    const sceneEnd = 0.4;
    const isActive = scrollProgress >= sceneStart && scrollProgress <= sceneEnd;

    // Fade in and out
    const localProgress = (scrollProgress - sceneStart) / (sceneEnd - sceneStart);
    const opacity =
        localProgress < 0.2
            ? localProgress * 5
            : localProgress > 0.8
                ? (1 - localProgress) * 5
                : 1;

    const panels = [
        {
            icon: Code2,
            title: "Full Stack Development",
            description: "Building scalable web applications with modern frameworks",
            color: "from-blue-500 to-cyan-500",
            zDepth: 100, // Front
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Crafting beautiful, intuitive user experiences",
            color: "from-violet-500 to-purple-500",
            zDepth: 0, // Middle
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Ensuring lightning-fast, smooth interactions",
            color: "from-orange-500 to-red-500",
            zDepth: -100, // Back
        },
    ];

    if (!isActive) return null;

    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity }}
        >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {panels.map((panel, index) => {
                        const Icon = panel.icon;

                        // Calculate 3D transforms
                        const translateZ = reducedMotion ? 0 : panel.zDepth;
                        const rotateY = reducedMotion ? 0 : cursorPos.x * 3;
                        const rotateX = reducedMotion ? 0 : -cursorPos.y * 3;

                        // Depth-based blur
                        const blurAmount = reducedMotion ? 0 : Math.abs(panel.zDepth) / 50;

                        // Staggered appearance
                        const delay = index * 0.1;
                        const appearProgress = Math.max(0, Math.min(1, (localProgress - delay) * 2));

                        return (
                            <div
                                key={panel.title}
                                className="pointer-events-auto"
                                style={{
                                    transform: `
                    perspective(1000px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateY}deg)
                    rotateX(${rotateX}deg)
                    scale(${0.8 + appearProgress * 0.2})
                  `,
                                    filter: `blur(${blurAmount}px)`,
                                    opacity: appearProgress,
                                    transition: "transform 0.3s ease-out, filter 0.3s ease-out",
                                }}
                            >
                                {/* Glassmorphic panel */}
                                <div className="relative group">
                                    {/* Glow effect */}
                                    <div
                                        className={`absolute -inset-0.5 bg-gradient-to-r ${panel.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                                    />

                                    {/* Glass card */}
                                    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                                        {/* Icon container */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${panel.color} p-0.5`}
                                            >
                                                <div className="flex items-center justify-center w-full h-full bg-slate-900 rounded-2xl">
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-display font-bold text-white mb-3">
                                            {panel.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {panel.description}
                                        </p>

                                        {/* Depth indicator */}
                                        <div className="absolute top-4 right-4">
                                            <div className="flex gap-1">
                                                {[...Array(3)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1 h-1 rounded-full ${i === (index === 0 ? 2 : index === 1 ? 1 : 0)
                                                                ? "bg-white"
                                                                : "bg-white/20"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InteractionScene;
