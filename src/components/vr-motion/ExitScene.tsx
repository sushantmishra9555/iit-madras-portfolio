import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ExitSceneProps {
    scrollProgress: number;
    cursorPos: { x: number; y: number };
    reducedMotion: boolean;
}

const ExitScene = ({
    scrollProgress,
    cursorPos,
    reducedMotion,
}: ExitSceneProps) => {
    // Scene 5 is active from 0.85 to 1.0 of scroll progress
    const sceneStart = 0.85;
    const sceneEnd = 1.0;
    const isActive = scrollProgress >= sceneStart;

    const localProgress = (scrollProgress - sceneStart) / (sceneEnd - sceneStart);
    const opacity = Math.min(1, localProgress * 3);

    // Elements recede into depth
    const translateZ = reducedMotion ? 0 : -localProgress * 500;

    if (!isActive) return null;

    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity }}
        >
            {/* Main content stays in focus */}
            <div
                className="text-center px-6 max-w-3xl pointer-events-auto"
                style={{
                    transform: `
            perspective(1000px)
            translateZ(0)
            scale(${0.9 + localProgress * 0.1})
          `,
                }}
            >
                {/* Exit badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-6"
                >
                    <span className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                        • Returning to Reality
                    </span>
                </motion.div>

                {/* Main message */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                    Ready to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
                        Collaborate
                    </span>
                    ?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl text-slate-300 mb-10 leading-relaxed"
                >
                    Let's build something extraordinary together.
                    <br />
                    Explore more of my work below.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Floating exit particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-violet-400/30 blur-sm"
                            style={{
                                left: `${10 + i * 7}%`,
                                top: `${20 + (i % 3) * 30}%`,
                            }}
                            animate={{
                                y: [0, -600],
                                opacity: [0.3, 0, 0],
                                scale: [1, 0.5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Background elements receding */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    transform: `
            perspective(1000px)
            translateZ(${translateZ}px)
          `,
                    opacity: 1 - localProgress,
                }}
            >
                {/* Dissolving grid lines */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
              `,
                            backgroundSize: "100px 100px",
                        }}
                    />
                </div>
            </div>

            {/* Fade to normal portfolio */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"
                style={{
                    opacity: Math.min(1, localProgress * 1.5),
                }}
            />
        </div>
    );
};

export default ExitScene;
