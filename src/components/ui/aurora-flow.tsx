"use client";

// Simple CSS-based Aurora Background - more reliable than WebGL
export default function AuroraFlow() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-[#000a0d]" />

            {/* Aurora gradient layers */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0, 180, 180, 0.3), transparent),
            radial-gradient(ellipse 60% 40% at 30% 80%, rgba(0, 200, 150, 0.2), transparent),
            radial-gradient(ellipse 50% 30% at 70% 70%, rgba(0, 150, 180, 0.25), transparent)
          `
                }}
            />

            {/* Animated aurora streaks */}
            <div
                className="absolute inset-0 aurora-layer-1"
                style={{
                    background: `
            linear-gradient(180deg, 
              transparent 0%, 
              rgba(0, 180, 180, 0.1) 30%,
              rgba(0, 200, 160, 0.15) 50%,
              rgba(0, 150, 180, 0.1) 70%,
              transparent 100%
            )
          `,
                    animation: 'aurora-shift 15s ease-in-out infinite'
                }}
            />

            <div
                className="absolute inset-0 aurora-layer-2"
                style={{
                    background: `
            linear-gradient(200deg, 
              transparent 0%, 
              rgba(0, 150, 200, 0.08) 20%,
              rgba(0, 180, 140, 0.12) 40%,
              rgba(0, 200, 180, 0.1) 60%,
              transparent 100%
            )
          `,
                    animation: 'aurora-shift 20s ease-in-out infinite reverse'
                }}
            />

            {/* Subtle glow spots */}
            <div
                className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 200, 180, 0.5), transparent 60%)',
                    top: '50%',
                    left: '20%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'glow-pulse 8s ease-in-out infinite'
                }}
            />

            <div
                className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 180, 150, 0.5), transparent 60%)',
                    top: '70%',
                    right: '10%',
                    animation: 'glow-pulse 10s ease-in-out infinite 2s'
                }}
            />
        </div>
    );
}
