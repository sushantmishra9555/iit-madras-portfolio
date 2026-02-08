import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Lightning } from "@/components/ui/lightning";
import { AnimatedText } from "@/components/ui/animated-text";
import { GradientButton } from "@/components/ui/gradient-button";
import profileImage from "@/assets/sushant-profile.jpg";

const HeroSection = () => {
  const [lightningHue, setLightningHue] = useState(220);
  const [lightningState, setLightningState] = useState<"stop" | "moderate" | "high">("moderate");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Lightning Effect - Dynamic based on state */}
      <div className="absolute inset-0 z-0 opacity-40">
        {lightningState !== "stop" && (
          <>
            {/* Main large lightning bolt */}
            <Lightning
              hue={lightningHue}
              xOffset={isMobile ? 0 : -0.3}
              speed={lightningState === "moderate" ? 0.3 : 1.0}
              intensity={lightningState === "moderate" ? 0.3 : 0.6}
              size={isMobile ? 1.5 : 3.5}
            />
            {/* Secondary bolts only for high intensity */}
            {lightningState === "high" && !isMobile && (
              <>
                <Lightning hue={lightningHue} xOffset={-0.6} speed={0.8} intensity={0.6} size={3.0} />
                <Lightning hue={lightningHue} xOffset={-0.9} speed={1.1} intensity={0.5} size={3.2} />
              </>
            )}
            {/* Single secondary bolt for mobile high intensity */}
            {lightningState === "high" && isMobile && (
              <Lightning hue={lightningHue} xOffset={-0.2} speed={0.8} intensity={0.4} size={1.2} />
            )}
          </>
        )}
      </div>

      {/* Lightning Controls - Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-4 items-end pointer-events-auto scale-75 md:scale-100 origin-bottom-right">
        {/* Intensity Toggle */}
        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm p-1 rounded-full border border-white/10">
          <button
            onClick={() => setLightningState("stop")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lightningState === "stop"
              ? "bg-red-500/20 text-red-400 border border-red-500/50"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Stop
          </button>
          <button
            onClick={() => setLightningState("moderate")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lightningState === "moderate"
              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Moderate
          </button>
          <button
            onClick={() => setLightningState("high")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${lightningState === "high"
              ? "bg-primary/20 text-primary border border-primary/50"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            High
          </button>
        </div>

        {/* Hue Slider */}
        <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
          <label className="text-white/70 text-xs">Color</label>
          <input
            type="range"
            min="0"
            max="360"
            value={lightningHue}
            onChange={(e) => setLightningHue(Number(e.target.value))}
            className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                hsl(0, 70%, 60%), 
                hsl(60, 70%, 60%), 
                hsl(120, 70%, 60%), 
                hsl(180, 70%, 60%), 
                hsl(240, 70%, 60%), 
                hsl(300, 70%, 60%), 
                hsl(360, 70%, 60%))`
            }}
          />
        </div>
      </div>



      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 pointer-events-none">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Profile Photo & Text Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 pointer-events-auto">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex-shrink-0 group"
            >
              <div className="relative w-32 h-32 md:w-56 md:h-56">
                {/* Ambient Glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-xl animate-pulse-glow" />

                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-pink-500 group-hover:scale-105 transition-transform duration-500 box-content">
                  <img
                    src={profileImage}
                    alt="Sushant Mishra"
                    className="w-full h-full rounded-full object-cover object-top border-4 border-background relative z-10 transition-all duration-500 group-hover:filter-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-2 md:mb-4"
              >
                Hello, I'm
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 md:mb-6"
              >
                <AnimatedText
                  text="Sushant Mishra"
                  textClassName="font-display text-3xl md:text-5xl lg:text-6xl font-bold"
                  underlineGradient="from-primary via-white to-primary"
                  className="items-center lg:items-start"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-xl text-muted-foreground mb-4"
              >
                🚀 Web Developer | Crafting AI-powered solutions
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-muted-foreground mb-8"
              >
                BS Student at{" "}
                <span className="text-foreground font-medium">IIT Madras</span>
                {" "}| JavaScript & Python | Mastering DSA 🧠
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                <a href="#projects">
                  <GradientButton className="min-w-[150px]">
                    View Projects
                  </GradientButton>
                </a>

                <a href="#contact">
                  <GradientButton variant="variant" className="min-w-[150px]">
                    Get in Touch
                  </GradientButton>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/sushantmishra9555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sushant-mishra-4a3604385/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:sushantmishra9016@gmail.com"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://x.com/sushantmis84782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;