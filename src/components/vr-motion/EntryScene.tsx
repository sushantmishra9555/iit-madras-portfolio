import { motion } from "framer-motion";

interface EntrySceneProps {
    scrollProgress: number;
    cursorPos: { x: number; y: number };
    reducedMotion: boolean;
}

const EntryScene = ({ scrollProgress, cursorPos, reducedMotion }: EntrySceneProps) => {
    // Scene 1 is active from 0 to 0.2 of scroll progress
    const isActive = scrollProgress >= 0 && scrollProgress <= 0.2;

    // Calculate transformations
    const opacity = Math.min(1, Math.max(0, 1 - scrollProgress * 5));
    const translateZ = reducedMotion ? 0 : -500 + scrollProgress * 2500; // -500 to 0
    const scale = reducedMotion ? 1 : 0.5 + scrollProgress * 2.5; // 0.5 to 1

    const tiltX = reducedMotion ? 0 : cursorPos.y * 2;
    const tiltY = reducedMotion ? 0 : -cursorPos.x * 2;

    if (!isActive && scrollProgress > 0.2) return null;

    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                transform: `
          perspective(1000px)
          translateZ(${translateZ}px)
          scale(${scale})
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
        `,
                transition: "transform 0.1s ease-out",
            }}
        >
            <div className="text-center px-6 max-w-5xl pointer-events-auto">
                {/* Welcome badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-8"
                >
                    <span className="px-6 py-2 rounded-full bg-violet-500/10 backdrop-blur-md border border-violet-500/30 text-violet-300 text-sm font-medium">
                        • Entering Virtual Space
                    </span>
                </motion.div>

                {/* Main headline */}
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                    <span className="text-white">Step Into </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
                        Another Dimension
                    </span>
                </h2>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Experience an immersive journey through skills, projects, and innovation
                </p>

                {/* Floating particles around text */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-violet-400/40 blur-sm"
                            style={{
                                left: `${20 + i * 10}%`,
                                top: `${30 + (i % 2) * 40}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EntryScene;
