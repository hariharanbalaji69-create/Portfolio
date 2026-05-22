import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-editorial-bg py-12 border-t border-editorial">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.3em] text-editorial-dim uppercase">
            <span>© 2024</span>
            <span>DATA × FINANCE</span>
          </div>
        </div>
      </div>

      <div className="mt-8 px-8 flex justify-center opacity-10 pointer-events-none">
         <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-editorial-text to-transparent" />
      </div>
    </footer>
  );
}
