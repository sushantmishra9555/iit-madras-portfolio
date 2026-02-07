import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface VREnvironmentProps {
    scrollProgress: number;
    cursorPos: { x: number; y: number };
}

const VREnvironment = ({ scrollProgress, cursorPos }: VREnvironmentProps) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ camera }) => {
        // Simple camera movement based on scroll
        const targetZ = THREE.MathUtils.lerp(1000, 200, scrollProgress);
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

        // Subtle camera tilt based on cursor
        camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, cursorPos.x * 0.05, 0.1);
        camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, -cursorPos.y * 0.05, 0.1);

        // Rotate the group slowly
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
        }
    });

    return (
        <>
            {/* Simple dark background */}
            <color attach="background" args={["#0a0a0f"]} />

            {/* Basic lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 0, 500]} intensity={1.5} color="#7c3aed" distance={1000} />
            <pointLight position={[500, 500, 0]} intensity={1} color="#60a5fa" distance={1000} />

            {/* Simple floating shapes */}
            <group ref={groupRef}>
                {/* Ring 1 */}
                <mesh position={[-200, 100, -100]}>
                    <torusGeometry args={[50, 2, 16, 100]} />
                    <meshBasicMaterial color="#60a5fa" wireframe />
                </mesh>

                {/* Ring 2 */}
                <mesh position={[200, -100, -200]}>
                    <torusGeometry args={[40, 3, 16, 100]} />
                    <meshBasicMaterial color="#7c3aed" wireframe />
                </mesh>

                {/* Simple box */}
                <mesh position={[0, 200, -300]} rotation={[0.5, 0.5, 0]}>
                    <boxGeometry args={[50, 50, 50]} />
                    <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.4} />
                </mesh>
            </group>
        </>
    );
};

export default VREnvironment;
