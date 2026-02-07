import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Twitter } from "lucide-react";
import { SplineScene } from "@/components/ui/spline";
import { AnimatedText } from "@/components/ui/animated-text";
import profileImage from "@/assets/sushant-profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Smaller Interactive Spline 3D Robot - Far Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] z-30 pointer-events-auto">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 pointer-events-none">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Profile Photo & Text Content */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pointer-events-auto">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-2xl animate-pulse-glow" />
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary to-primary/50">
                  <img
                    src={profileImage}
                    alt="Sushant Mishra"
                    className="w-full h-full rounded-full object-cover object-top"
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
                className="text-primary font-medium tracking-wider uppercase text-sm mb-4"
              >
                Hello, I'm
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <AnimatedText
                  text="Sushant Mishra"
                  textClassName="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
                  underlineGradient="from-primary via-white to-primary"
                  className="items-center lg:items-start"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground mb-4"
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
                <div className="relative rounded-full p-0.5">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-75 blur-sm animate-pulse" />
                  <a
                    href="#projects"
                    className="relative px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 block"
                  >
                    View Projects
                  </a>
                </div>
                <div className="relative rounded-full p-0.5">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50 opacity-0 hover:opacity-75 blur-sm transition-opacity duration-300" />
                  <a
                    href="#contact"
                    className="relative px-8 py-3 rounded-full border border-primary/50 bg-background text-foreground font-medium hover:bg-primary/10 transition-all duration-300 block"
                  >
                    Get in Touch
                  </a>
                </div>
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

          {/* Spacer for robot on desktop */}
          <div className="hidden lg:block w-[600px]" />
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