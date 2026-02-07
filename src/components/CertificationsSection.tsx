import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, Building2, X, ExternalLink } from "lucide-react";
import { useState } from "react";

const certifications = [
    {
        title: "Gemini Certified Student",
        subtitle: "University Level",
        issuer: "Google for Education",
        description: "Demonstrated knowledge, skills, and basic competencies needed to use Google AI.",
        issuedDate: "January 2026",
        validUntil: "January 2029",
        icon: "✦",
        gradient: "from-blue-500 via-purple-500 to-pink-500",
        bgGlow: "bg-blue-500/20",
        image: "/certificates/gemini-student.jpg",
    },
    {
        title: "Gemini Certified Faculty",
        subtitle: null,
        issuer: "Google for Education",
        description: "Demonstrated knowledge, skills, and basic competencies needed to use Google AI in higher education.",
        issuedDate: "January 2026",
        validUntil: "January 2029",
        icon: "✦",
        gradient: "from-green-500 via-teal-500 to-cyan-500",
        bgGlow: "bg-green-500/20",
        image: "/certificates/gemini-faculty.jpg",
    },
    {
        title: "Foundational Level in Programming & Data Science",
        subtitle: null,
        issuer: "IIT Madras",
        description: "Centre for Outreach and Digital Education - Successfully completed the foundational program in Programming and Data Science.",
        issuedDate: "September 2025",
        validUntil: null,
        icon: "🎓",
        gradient: "from-orange-500 via-red-500 to-rose-500",
        bgGlow: "bg-orange-500/20",
        image: "/certificates/iitm-foundation.jpg",
    },
];

const CertificationsSection = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="certifications" className="py-24 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Certifications</span> & Achievements
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and academic achievements that validate my expertise
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 ${cert.bgGlow} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`} />

                            <div
                                className="glass-card p-6 relative overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col cursor-pointer"
                                onClick={() => setSelectedCert(cert)}
                            >
                                {/* Gradient accent line */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`} />

                                {/* Icon and Badge */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                                            {cert.icon}
                                        </div>
                                        {cert.subtitle && (
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                                                {cert.subtitle}
                                            </span>
                                        )}
                                    </div>
                                    <Award className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                                    {cert.title}
                                </h3>

                                {/* Issuer */}
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                                    <Building2 className="w-4 h-4" />
                                    <span>{cert.issuer}</span>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                                    {cert.description}
                                </p>

                                {/* Hover Preview Indicator */}
                                <div className="flex items-center gap-2 text-xs text-primary/70 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span>Click to view certificate</span>
                                </div>

                                {/* Dates */}
                                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Issued: {cert.issuedDate}</span>
                                    </div>
                                    {cert.validUntil && (
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-green-400">•</span>
                                            <span>Valid until {cert.validUntil}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Hover Image Preview */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full z-50 pointer-events-none"
                                    >
                                        <div className="bg-background/95 backdrop-blur-xl border border-border rounded-xl p-2 shadow-2xl">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-64 h-auto rounded-lg object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground text-sm">
                        Currently pursuing more certifications in AI/ML and Full Stack Development
                    </p>
                </motion.div>
            </div>

            {/* Full Screen Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl w-full bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Certificate Image */}
                            <div className="flex flex-col items-center">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-lg"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            const fallback = document.createElement('div');
                                            fallback.className = 'text-center py-12';
                                            fallback.innerHTML = `
                        <p class="text-muted-foreground mb-2">Certificate image not found</p>
                        <p class="text-sm text-muted-foreground/70">Please add image to: ${selectedCert.image}</p>
                      `;
                                            parent.appendChild(fallback);
                                        }
                                    }}
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="font-display text-xl font-semibold">{selectedCert.title}</h3>
                                    <p className="text-muted-foreground">{selectedCert.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificationsSection;
