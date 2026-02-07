import { ReactNode } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
}

export function GlowingCard({ children, className, containerClassName }: GlowingCardProps) {
    return (
        <div className={cn("relative rounded-xl p-0.5", containerClassName)}>
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
            />
            <div className={cn("relative rounded-xl bg-background", className)}>
                {children}
            </div>
        </div>
    );
}

interface GlowingButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    target?: string;
    download?: string;
}

export function GlowingButton({ children, className, href, onClick, target, download }: GlowingButtonProps) {
    const content = (
        <div className={cn("relative rounded-full", className)}>
            {children}
        </div>
    );

    if (href) {
        return (
            <div className="relative inline-block rounded-full p-0.5">
                <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={2}
                />
                <a
                    href={href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    download={download}
                    onClick={onClick as any}
                    className={cn("relative block rounded-full bg-background", className)}
                >
                    {children}
                </a>
            </div>
        );
    }

    return (
        <div className="relative inline-block rounded-full p-0.5">
            <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.01}
                borderWidth={2}
            />
            <button
                onClick={onClick}
                className={cn("relative rounded-full bg-background", className)}
            >
                {children}
            </button>
        </div>
    );
}
