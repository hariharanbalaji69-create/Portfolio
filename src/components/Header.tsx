import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-editorial-bg/90 backdrop-blur-md border-b border-editorial' : 'bg-transparent'}`}>
      <nav className="section-container !py-8 flex items-center justify-center">
        <a href="#" className="text-center">
          <span className="text-xl font-serif italic tracking-wider text-editorial-text">
            Hariharan Balaji
          </span>
        </a>
      </nav>
    </header>
  );
}
