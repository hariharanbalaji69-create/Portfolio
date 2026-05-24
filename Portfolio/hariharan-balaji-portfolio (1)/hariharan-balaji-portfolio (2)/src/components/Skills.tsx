import { motion } from 'motion/react';
import { Database, TrendingUp, BarChart3, ShieldCheck, Code2, LineChart } from 'lucide-react';

const skills = [
  {
    category: "Econometric & Financial Modeling",
    icon: <LineChart className="w-6 h-6" />,
    items: [
      "ARIMA(2,2,0) Predictive Modeling: 98.85% Mean Accuracy on equity benchmarks.",
      "Panel Data Expertise: High-velocity analysis across 233 banks in 50 countries.",
      "Statistical Precision: Maintained SE as low as 0.0077 in sample estimates.",
      "Basel III Compliance: Stress testing and Loan Loss Provisioning (LLP) analysis."
    ]
  },
  {
    category: "Data Science & Quantitative Tools",
    icon: <Database className="w-6 h-6" />,
    items: [
      "RStudio & auto.arima: AIC optimization (-5030.33) for complex semiconductor data.",
      "Stata Mastery: Fixed Effects (FE) & Quartile Regression for performance quantiles.",
      "Data Integrity: Expert in Min-Max Normalization and Log Transformations.",
      "Excel Mastery: Achieved 99th percentile in Gorilla Test assessment."
    ]
  },
  {
    category: "Financial Engineering & Qualifications",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      "CFA Level 1: Candidate (Currently under process).",
      "ACT Level 4: Part-qualified through merit-based exemptions.",
      "Dynamic FP&A: Reconciliation and 3-statement architecture automation.",
      "Strategic Reporting: Competitive benchmarking and SaaS metric engineering."
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-editorial-bg py-32 border-b border-editorial">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">Expertise / Pillars</h2>
            <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-tight">Mastered Domains</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-xs"
          >
            <p className="text-sm font-light text-editorial-dim italic font-serif">
              A dual-threat portfolio spanning technical analytical power and core financial theory.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-editorial">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border-editorial md:border-r last:border-r-0 border-b md:border-b-0 hover:bg-white/[0.02] transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim mb-10 flex items-center gap-3">
                <span className="text-white">{skill.icon}</span>
                <span>Category / 0{index + 1}</span>
              </div>
              <h4 className="text-2xl font-serif italic mb-8 text-white">{skill.category}</h4>
              <ul className="space-y-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-light text-editorial-dim group cursor-default">
                    <span className="w-1 h-3 border-l border-editorial-accent mr-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
