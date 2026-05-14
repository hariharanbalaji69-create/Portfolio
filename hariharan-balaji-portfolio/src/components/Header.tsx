import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Live", href: "#current" },
    { name: "Business", href: "#advisory" },
    { name: "Work", href: "#projects" },
    { name: "Job", href: "#experience" },
    { name: "Fit", href: "#checker" },
    { name: "Exp", href: "#skills" },
    { name: "Edu", href: "#education" },
    { name: "Bio", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-editorial-bg/90 backdrop-blur-md border-b border-editorial' : 'bg-transparent'}`}>
      <nav className="section-container !py-8 flex items-center justify-between">
        <a href="#" className="flex-1 sm:text-center text-left">
          <span className="text-xl font-serif italic tracking-wider text-editorial-text">
            Hariharan Balaji
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-sans text-[10px] tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-editorial-dim hover:text-editorial-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-editorial-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-editorial-bg border-b border-editorial md:hidden p-8"
          >
            <div className="flex flex-col gap-8 items-center font-sans text-[10px] tracking-[0.3em] uppercase">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-editorial-text"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
