import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-editorial-bg py-24 border-t border-editorial">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 border border-editorial rounded-none bg-white/[0.01] backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 mb-10">
              <MapPin className="w-5 h-5 text-editorial-text" />
              <div>
                <h5 className="font-serif italic text-xl mb-1 text-white text-center">Location</h5>
                <p className="text-editorial-dim text-sm text-center">Available for Global Remote Collaboration</p>
              </div>
            </div>
            
            <p className="text-white text-base font-light leading-relaxed mb-8 italic font-serif">
              "My cost to company is mitigated by my ability to deliver metrics and strategy in hours which would take the average non-qualified joe days of research. My exposure to 3 different continents brings insight only experience can provide."
            </p>

            <p className="text-editorial-dim text-sm font-light leading-relaxed mb-12">
              Point me at your question and I'll deliver your answer. I don't do it just for pay — <span className="italic text-white">I just do it for the love of the game!</span>
            </p>
            
            <div className="pt-8 border-t border-editorial flex items-center justify-between text-[9px] font-mono tracking-[0.3em] text-editorial-dim uppercase">
              <span>© 2024</span>
              <span className="hidden sm:inline">DATA × FINANCE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 px-8 flex justify-center opacity-10 pointer-events-none">
         <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-editorial-text to-transparent" />
      </div>
    </footer>
  );
}
