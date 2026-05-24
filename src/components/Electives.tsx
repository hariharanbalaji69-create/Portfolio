import { motion } from 'motion/react';

const electiveCategories = [
  {
    category: "Finance",
    items: ["Econometrics", "Advanced Economics", "Banking Systems", "Banking Regulations"]
  },
  {
    category: "Accounting",
    items: ["Cost Accounting", "Management Accounting"]
  },
  {
    category: "Management",
    items: ["Operations Efficiency", "Marketing Management"]
  },
  {
    category: "Informatics",
    items: ["SQL", "Tally", "RStudio", "Advanced Excel"]
  }
];

export default function Electives() {
  return (
    <section id="education" className="bg-editorial-bg py-32 border-b border-editorial">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">Academic / Electives</h2>
            <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-tight italic">Curated Foundation</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-xs"
          >
            <p className="text-sm font-light text-editorial-dim italic font-serif">
              A comprehensive selection of modules that formed the quantitative and theoretical backbone of my financial expertise.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {electiveCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-editorial p-8 bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-editorial-dim mb-10 border-b border-editorial pb-4">
                Category // 0{index + 1}
              </div>
              
              <h4 className="text-2xl font-serif mb-8 text-white group-hover:italic transition-all">
                {cat.category}
              </h4>
              
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="font-sans text-xs tracking-widest uppercase text-editorial-dim flex items-center gap-3">
                    <span className="w-1 h-1 bg-editorial-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
