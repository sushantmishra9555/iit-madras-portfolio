import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import VREnvironment from "./vr-motion/VREnvironment";
import EntryScene from "./vr-motion/EntryScene";

const VRMotionSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Track scroll progress through this section
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const sectionHeight = containerRef.current.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial calculation

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track cursor position for parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

            setCursorPos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-gradient-to-b from-black via-slate-950 to-black"
            style={{ height: "300vh" }} // Reduced from 600vh for testing
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* 3D WebGL Background */}
                <div className="absolute inset-0 z-0">
                    <Suspense
                        fallback={
                            <div className="w-full h-full flex items-center justify-center text-slate-500">
                                Loading Virtual Environment...
                            </div>
                        }
                    >
                        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 1000], fov: 75 }}>
                            <VREnvironment scrollProgress={scrollProgress} cursorPos={cursorPos} />
                        </Canvas>
                    </Suspense>
                </div>

                {/* HTML Content Overlay - Just Entry Scene for now */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <EntryScene
                        scrollProgress={scrollProgress}
                        cursorPos={cursorPos}
                        reducedMotion={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default VRMotionSection;
