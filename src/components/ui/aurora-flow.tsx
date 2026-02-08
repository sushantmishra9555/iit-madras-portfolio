"use client";

// Dark purple/navy gradient background like Hero Odyssey
export default function AuroraFlow() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Dark purple-navy gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #0d0d1a 0%, #1a1a3e 30%, #2d1f5e 60%, #1a1a3e 100%)'
                }}
            />
        </div>
    );
}
