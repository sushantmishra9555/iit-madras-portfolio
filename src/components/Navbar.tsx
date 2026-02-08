import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const MobilePreviewToggle = () => {
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  useEffect(() => {
    if (isMobilePreview) {
      document.body.classList.add("mobile-preview");
    } else {
      document.body.classList.remove("mobile-preview");
    }
    return () => document.body.classList.remove("mobile-preview");
  }, [isMobilePreview]);

  return (
    <button
      onClick={() => setIsMobilePreview(!isMobilePreview)}
      className={`p-2 rounded-full transition-colors relative ${isMobilePreview ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-muted-foreground"
        }`}
      title={isMobilePreview ? "Exit Mobile Preview" : "Enter Mobile Preview"}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      </div>
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : ""
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-xl font-bold"
          >
            <span className="gradient-text">SM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}



            {/* Theme Color Changer */}
            <ThemeColorChanger />

            <a
              href="https://www.linkedin.com/in/sushant-mishra-4a3604385/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all ml-2"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">

            <ThemeColorChanger />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 px-3 rounded-lg font-medium transition-all ${activeSection === link.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/sushant-mishra-4a3604385/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Theme Color Changer Component
const ThemeColorChanger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("teal");

  const colors = [
    { name: "teal", primary: "174 72% 56%", gradient: "linear-gradient(135deg, hsl(174 72% 56%) 0%, hsl(199 89% 48%) 100%)", class: "bg-[#3dd8c2]" },
    { name: "purple", primary: "270 70% 60%", gradient: "linear-gradient(135deg, hsl(270 70% 60%) 0%, hsl(290 89% 48%) 100%)", class: "bg-[#a855f7]" },
    { name: "pink", primary: "330 70% 60%", gradient: "linear-gradient(135deg, hsl(330 70% 60%) 0%, hsl(350 89% 48%) 100%)", class: "bg-[#ec4899]" },
    { name: "blue", primary: "210 70% 60%", gradient: "linear-gradient(135deg, hsl(210 70% 60%) 0%, hsl(230 89% 48%) 100%)", class: "bg-[#3b82f6]" },
    { name: "orange", primary: "30 90% 60%", gradient: "linear-gradient(135deg, hsl(30 90% 60%) 0%, hsl(10 89% 48%) 100%)", class: "bg-[#f97316]" },
  ];

  const handleColorChange = (color: typeof colors[0]) => {
    setActiveColor(color.name);
    document.documentElement.style.setProperty("--primary", color.primary);
    document.documentElement.style.setProperty("--gradient-primary", color.gradient);
    // Also update ring for focus states
    document.documentElement.style.setProperty("--ring", color.primary);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-secondary transition-colors relative"
        aria-label="Change Theme"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary/50 border border-white/20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute top-12 right-0 md:left-1/2 md:-translate-x-1/2 bg-popover/90 backdrop-blur-xl border border-border p-3 rounded-2xl shadow-xl z-50 flex gap-2 min-w-max"
          >
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full ${color.class} border-2 transition-transform hover:scale-110 ${activeColor === color.name ? "border-white scale-110" : "border-transparent"
                  }`}
                title={`Switch to ${color.name}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;