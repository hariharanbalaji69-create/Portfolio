import { motion } from 'motion/react';
import { Smartphone, Globe, BarChart4, Cpu } from 'lucide-react';

const currentWork = [
  {
    name: "Parity",
    type: "Venture / Product",
    description: "A social utility tool engineered to dismantle predatory engagement algorithms of legacy platforms. Focused on user sovereignty and recalibrating industry profitability models.",
    stack: ["React Native", "React Web", "Flutter"],
    icon: <Smartphone size={20} />
  },
  {
    name: "Quantitative Portfolio",
    type: "Live Asset Management",
    description: "Active management of a diversified equity portfolio. Driven by deep-dive financial statement analytics and stock price volatility modeling.",
    results: "0.67% Daily Growth Average",
    stack: ["Excel", "RStudio", "Market Intuition"],
    icon: <BarChart4 size={20} />
  }
];

export default function CurrentProjects() {
  return (
    <section id="current" className="bg-editorial-bg py-32 border-b border-editorial overflow-hidden">
      <div className="section-container relative">
        {/* Background Graphic Decor */}
        <div className="absolute -right-20 top-0 w-96 h-96 border border-editorial-accent rounded-full opacity-10 pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">Current / Operational</h2>
              <h3 className="font-serif text-[clamp(40px,5vw,64px)] italic text-white leading-tight mb-12">Active Engagements</h3>
              <p className="text-sm font-light text-editorial-dim leading-relaxed max-w-xs">
                Ventures and quantitative systems currently under active development and real-market deployment.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-12">
            {currentWork.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative border border-editorial p-10 md:p-14 hover:bg-white/[0.02] transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-editorial-dim mb-2">{project.type}</div>
                    <h4 className="text-4xl font-serif text-white">{project.name}</h4>
                  </div>
                  <div className="text-editorial-text opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {project.icon}
                  </div>
                </div>

                <p className="text-lg font-light text-editorial-dim mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {project.results && (
                  <div className="mb-8 inline-flex flex-col border-l-2 border-editorial-text pl-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim">Performance Metric</span>
                    <span className="text-2xl font-serif italic text-white">{project.results}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-8 border-t border-editorial">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim pt-1">Stack // Tools</span>
                  {project.stack.map((item, i) => (
                    <span key={i} className="text-[10px] font-mono text-white px-3 py-1 border border-editorial bg-editorial-accent/10">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
