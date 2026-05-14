import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-editorial-bg py-24 border-t border-editorial">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-10">Inquiries / Collaboration</h3>
            <h4 className="font-serif text-[clamp(48px,6vw,84px)] italic text-white leading-[0.9] mb-12">
              Let's create something impactful <span className="text-editorial-dim">together.</span>
            </h4>
            
            <div className="space-y-10">
              <a href="mailto:hariharanbalaji.a@outlook.com" className="group block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim block mb-2">Direct Mail</span>
                <span className="text-2xl md:text-3xl font-serif text-white group-hover:text-editorial-text/70 transition-colors">
                  hariharanbalaji.a@outlook.com
                </span>
              </a>
              
              <div className="pt-10 border-t border-editorial">
                <h5 className="font-mono text-[10px] uppercase tracking-widest text-white mb-6">Get in touch</h5>
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-editorial-dim font-light italic font-serif">Leave your email and I'll reach out to discuss how we can work together.</p>
                  <div className="flex border border-editorial">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="bg-transparent px-4 py-4 w-full text-sm text-white focus:outline-none focus:bg-white/[0.02]"
                    />
                    <button className="bg-white text-black px-8 font-mono text-[10px] uppercase tracking-widest hover:bg-white/80 transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="p-10 border border-editorial rounded-none bg-white/[0.01] backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-10">
                <MapPin className="w-5 h-5 text-editorial-text mt-1" />
                <div>
                  <h5 className="font-serif italic text-xl mb-1 text-white">Location</h5>
                  <p className="text-editorial-dim text-sm">Available for Global Remote Collaboration</p>
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
      </div>

      <div className="mt-20 px-8 flex justify-center opacity-10 pointer-events-none">
         <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-editorial-text to-transparent" />
      </div>
    </footer>
  );
}
