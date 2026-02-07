import { Github, Linkedin, Mail, MapPin, Twitter, Youtube, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#about" },
  { name: "Education", href: "#about" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sushant-mishra-4a3604385/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/sushantmishra9555", label: "GitHub" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=sushantmishra9016@gmail.com", label: "Email" },
  { icon: Twitter, href: "https://x.com/sushantmis84782", label: "Twitter" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-background/50 backdrop-blur-sm border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-bold text-primary mb-4">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sushantmishra9016@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                sushantmishra9016@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                India
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} <span className="text-foreground font-medium">Sushant Mishra</span>. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Designed & Built with <span className="text-primary">❤</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;