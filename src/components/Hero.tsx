import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import DataVisual from './DataVisual';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background Graphic Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-editorial-accent rounded-full pointer-events-none opacity-20" />
      
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-20 items-end">
        {/* Left Column: Identity */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex gap-4 items-center mb-12">
            <span className="h-[1px] w-12 bg-editorial-text opacity-40"></span>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-editorial-dim">
              Banking & Finance • Data Science
            </p>
          </div>

          <h1 className="font-serif text-[clamp(64px,12vw,140px)] leading-[0.85] tracking-tight mb-12">
            Hariharan<br/>
            <span className="italic font-light text-editorial-dim">Balaji</span>
          </h1>

          <p className="font-serif text-3xl md:text-4xl leading-snug max-w-lg italic text-editorial-text/90 mb-16">
            Translating complex financial landscapes into actionable, high-precision data insights.
          </p>

          <div className="flex gap-12 border-t border-editorial pt-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim mb-3">Academic Background</div>
              <div className="text-sm font-light tracking-wide italic">M.Sc. Banking & Finance</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim mb-3">Specialization</div>
              <div className="text-sm font-light tracking-wide italic">Predictive Analytics & Risk</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Elements / Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-12"
        >
          <div className="relative group cursor-pointer overflow-hidden aspect-[4/5] bg-black border border-editorial">
             <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
               <DataVisual />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-editorial-text/20 flex items-center justify-center bg-editorial-bg/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <ArrowDownRight className="text-editorial-text" />
                </div>
             </div>
             <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.3em]">
               The Analytical Process / Transformation
             </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim border-b border-editorial pb-6">
             <span className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-editorial-text animate-pulse" />
               Live Status: Available
             </span>
             <span>Based United Kingdom</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
