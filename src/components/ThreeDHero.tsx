import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, ScrollControls, Float, MeshTransmissionMaterial, Environment, Stars, Sparkles, PerspectiveCamera } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

// The Digital Core Object
const DigitalCore = () => {
    const meshRef = useRef<THREE.Group>(null);
    const scroll = useScroll();
    const { viewport, pointer } = useThree();

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // 1. Continuous Rotation
        meshRef.current.rotation.x -= delta * 0.2;
        meshRef.current.rotation.y -= delta * 0.3;

        // 2. Scroll Interaction (Rotate faster on scroll)
        const scrollSpeed = scroll.offset * 2;
        meshRef.current.rotation.y += delta * scrollSpeed;

        // 3. Mouse Parallax (Tilt)
        // We use damping for smoothness
        const x = (pointer.x * viewport.width) / 5;
        const y = (pointer.y * viewport.height) / 5;

        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.1);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.1);
    });

    return (
        <group ref={meshRef}>
            {/* Main Glass Crystal */}
            <mesh>
                <icosahedronGeometry args={[2, 0]} />
                <MeshTransmissionMaterial
                    thickness={0.2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={0.06}
                    backside={true}
                />
            </mesh>

            {/* Inner Glowing Wireframe */}
            <mesh scale={[1.5, 1.5, 1.5]}>
                <icosahedronGeometry args={[1.5, 1]} />
                <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.3} />
            </mesh>

            {/* Core Light */}
            <pointLight intensity={2} distance={5} color="#60a5fa" />
        </group>
    );
};

// Camera Controller
const Rig = () => {
    const scroll = useScroll();
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    useFrame(() => {
        if (!cameraRef.current) return;

        // Scroll flies the camera IN
        // Start Z: 10, End Z: 4
        // Use scroll.offset which goes from 0 to 1
        const targetZ = THREE.MathUtils.lerp(10, 4, scroll.offset);
        cameraRef.current.position.z = targetZ;
    });

    return <PerspectiveCamera makeDefault position={[0, 0, 10]} ref={cameraRef} fov={45} />;
}

const ThreeDHero = () => {
    return (
        <section className="h-screen w-full bg-slate-950 relative overflow-hidden">
            {/* HTML Overlay Content */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="pointer-events-auto"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-slate-400 text-sm font-medium mb-6">
                        Interactive 3D Experience
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold font-display text-white mb-6 tracking-tight">
                        Constructing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400">
                            Reality.
                        </span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-lg mx-auto">
                        Scroll to explore the digital core.
                    </p>
                </motion.div>
            </div>

            {/* 3D Canvas with Fallback */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-slate-500">Initializing Environment...</div>}>
                    <Canvas dpr={[1, 2]}> {/* Handle pixel density */}
                        <ScrollControls pages={3} damping={0.2}> {/* 3 Pages of scroll height */}

                            <Rig />

                            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                                <DigitalCore />
                            </Float>

                            {/* Environment */}
                            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                            <Sparkles count={100} scale={10} size={4} speed={0.4} opacity={0.5} noise={0.2} color="#60a5fa" />

                            {/* Lighting */}
                            <ambientLight intensity={0.2} />
                            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                            <directionalLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
                            <Environment preset="city" />

                        </ScrollControls>
                    </Canvas>
                </Suspense>
            </div>
        </section>
    );
};

export default ThreeDHero;
