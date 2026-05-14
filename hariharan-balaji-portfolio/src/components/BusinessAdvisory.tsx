import { motion } from 'motion/react';
import { Mail, CheckCircle2, Zap, Shield } from 'lucide-react';

export default function BusinessAdvisory() {
  const tiers = [
    {
      price: "4",
      title: "Core Financials",
      features: [
        "Reconcile your invoices",
        "Ensure trial balance integrity",
        "Create Balance Sheets",
        "Generate Income Statements",
        "Provide Cashflow Statements"
      ],
      icon: <Shield size={20} className="text-editorial-accent" />
    },
    {
      price: "6",
      title: "Strategic Growth",
      features: [
        "Competitor performance analysis",
        "Performance benchmarking",
        "Investment & profitability strategy",
        "Future growth planning",
        "Estimates based on std assumptions"
      ],
      icon: <Zap size={20} className="text-editorial-accent" />
    }
  ];

  return (
    <section id="advisory" className="bg-white text-black py-32 border-b border-editorial">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">Business Advisory / Consulting</h2>
              <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-tight mb-10">
                Are you a small business looking for assistance in <span className="italic">analysing your business?</span>
              </h3>
              
              <div className="space-y-6 mb-12">
                <p className="text-lg font-light leading-relaxed max-w-xl">
                  Leverage institutional-grade financial analysis at an accessible scale. I provide the quantitative rigor needed to turn raw operations into strategic foresight.
                </p>
                <div className="inline-flex items-center gap-4 text-editorial-dim">
                  <span className="w-12 h-px bg-editorial-dim/30"></span>
                  <p className="text-sm italic font-serif">Subject to my timing and availability.</p>
                </div>
              </div>

              <a 
                href="mailto:hariharanbalaji.a@outlook.com"
                className="inline-flex items-center gap-4 group border border-black px-10 py-5 hover:bg-black hover:text-white transition-all duration-500 font-mono text-[10px] uppercase tracking-[0.3em]"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid md:grid-cols-2 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-editorial hover:shadow-2xl transition-all duration-700 bg-white"
              >
                <div className="mb-8 p-3 w-fit border border-editorial bg-editorial-bg/10">
                  {tier.icon}
                </div>
                
                <h4 className="font-serif text-2xl italic mb-2">{tier.title}</h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-mono text-black">${tier.price}</span>
                  <span className="text-xs font-mono tracking-widest text-editorial-dim uppercase">/ Hour</span>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-xs font-light leading-snug items-start">
                      <CheckCircle2 size={12} className="text-editorial-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
