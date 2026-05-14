import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden bg-editorial-bg border-y border-editorial">
      <div className="py-12 flex flex-col gap-6 opacity-[0.02] select-none pointer-events-none mb-20">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap text-9xl font-serif font-black italic tracking-tighter">
          ANALYTICS DATA SCIENCE BANKING FINANCE RISK MODELING EQUITY RESEARCH
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap text-9xl font-serif font-black italic tracking-tighter">
          DATA SCIENCE FINANCE RISK MODELING ANALYTICS EQUITY BANKING RESEARCH
        </motion.div>
      </div>

      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-12 lg:col-span-5">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">About / Context</h2>
            <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.1] mb-12">
              Bridging the gap between <span className="italic">traditional finance</span> and <span className="text-editorial-dim">quantitative foresight</span>.
            </h3>
          </div>
          
          <div className="md:col-span-12 lg:col-span-7 space-y-8 text-xl font-light leading-relaxed text-editorial-dim">
            <p className="text-white">
              Currently based in the <span className="italic serif">UK</span>, I am a 27-year-old finance professional originally from India, dedicated to the evolution of financial intelligence.
            </p>
            <p>
              With an <span className="italic serif text-white">MSc in Banking and Finance</span> from the <span className="text-white">University of Birmingham</span>, complemented by a first-class Bachelor's from <span className="text-white">Jain University</span>, my academic journey is rooted in rigorous quantitative analysis and market theory.
            </p>
            <p>
              My transition into <span className="italic serif">Data Science</span> stems from a fundamental belief that data is the ultimate arbener of truth in modern banking. I specialize in bridging high-level financial strategy with granular predictive modeling.
            </p>

            <div className="pt-12 border-t border-editorial grid grid-cols-2 gap-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest block mb-4">Credentials</span>
                <ul className="text-sm space-y-2 font-mono">
                  <li className="flex justify-between border-b border-editorial pb-2 text-white">
                    <span>MSc Finance</span>
                    <span className="opacity-40 italic">U. Birmingham</span>
                  </li>
                  <li className="flex justify-between border-b border-editorial pb-2">
                    <span>Bachelors (1st)</span>
                    <span className="opacity-40 italic">Jain Uni</span>
                  </li>
                  <li className="flex justify-between border-b border-editorial pb-2">
                    <span>PG Diploma</span>
                    <span className="opacity-40 italic">U. Birmingham</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end">
                <span className="font-mono text-[10px] uppercase tracking-widest block mb-4">Status</span>
                <p className="text-sm italic font-serif leading-tight">
                  UK Resident / Indian National <br />
                  Finance Specialist × Analytics Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
