import { motion } from "framer-motion";

interface GuidanceSceneProps {
    scrollProgress: number;
    cursorPos: { x: number; y: number };
    reducedMotion: boolean;
}

const GuidanceScene = ({
    scrollProgress,
    cursorPos,
    reducedMotion,
}: GuidanceSceneProps) => {
    // Scene 3 is active from 0.4 to 0.6 of scroll progress
    const sceneStart = 0.4;
    const sceneEnd = 0.6;
    const isActive = scrollProgress >= sceneStart && scrollProgress <= sceneEnd;

    const localProgress = (scrollProgress - sceneStart) / (sceneEnd - sceneStart);
    const opacity =
        localProgress < 0.2
            ? localProgress * 5
            : localProgress > 0.8
                ? (1 - localProgress) * 5
                : 1;

    if (!isActive) return null;

    // Pulsing ring scale
    const ringScale = reducedMotion ? 1 : 0.9 + Math.sin(localProgress * Math.PI * 4) * 0.1;

    // Rotating highlight based on scroll
    const rotateAngle = localProgress * 360;

    return (
        <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity }}
        >
            {/* Animated guidance rings */}
            <div className="relative w-full max-w-4xl aspect-square">
                {/* Outer ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-violet-500/20"
                    style={{
                        scale: ringScale,
                    }}
                />

                {/* Middle ring */}
                <motion.div
                    className="absolute inset-[10%] rounded-full border-2 border-blue-500/30"
                    style={{
                        scale: ringScale * 0.95,
                    }}
                />

                {/* Inner ring */}
                <motion.div
                    className="absolute inset-[20%] rounded-full border border-cyan-500/40"
                    style={{
                        scale: ringScale * 0.9,
                    }}
                />

                {/* Rotating highlight */}
                <motion.div
                    className="absolute top-0 left-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-violet-400 blur-sm"
                    style={{
                        rotate: rotateAngle,
                        transformOrigin: `50% ${window.innerHeight / 4}px`,
                    }}
                />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center pointer-events-auto">
                        {/* Glowing badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-6"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-50" />
                                <span className="relative px-6 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-violet-500/50 text-violet-300 text-sm font-medium">
                                    • Focus Point
                                </span>
                            </div>
                        </motion.div>

                        {/* Main message */}
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                            Guided By{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                                Purpose
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Every project, every line of code drives toward meaningful impact
                        </p>

                        {/* Connection lines */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ overflow: "visible" }}
                        >
                            {[0, 90, 180, 270].map((angle, i) => {
                                const rad = (angle * Math.PI) / 180;
                                const length = 150 + Math.sin(localProgress * Math.PI + i) * 20;
                                const x2 = Math.cos(rad) * length;
                                const y2 = Math.sin(rad) * length;

                                return (
                                    <motion.line
                                        key={angle}
                                        x1="50%"
                                        y1="50%"
                                        x2={`calc(50% + ${x2}px)`}
                                        y2={`calc(50% + ${y2}px)`}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.5 }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                    />
                                );
                            })}

                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuidanceScene;
