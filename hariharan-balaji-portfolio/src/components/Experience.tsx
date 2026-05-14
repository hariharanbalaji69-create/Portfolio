import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Bhacker Haji",
    role: "Financial Intern (Reconciliation & Market Research)",
    period: "Internship",
    description: "Spearheaded reconciliation reporting, completing critical audit trails days ahead of schedule. Collaborated directly with external audit teams to present financials for year-end closing processes.",
    achievements: [
      "Optimized reconciliation workflows, beating deadlines by significant margins.",
      "Liaised with external auditors for complex year-end financial disclosures."
    ]
  },
  {
    company: "Klubworks",
    role: "Equity Research & Investor Relations Intern",
    period: "Internship",
    description: "Orchestrated a massive consolidation of angel investor databases, directy facilitating the startup's transition to its first stage of funding.",
    achievements: [
      "Engineered a strategic investor database that secured primary funding rounds.",
      "Performed market research to identifying high-value venture capital targets."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-editorial-bg py-32 border-b border-editorial">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">Professional / Tenure</h2>
            <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-tight italic">Industry Exposure</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-xs"
          >
            <p className="text-sm font-light text-editorial-dim italic font-serif">
              Hands-on involvement in financial reconciliation, market research, and venture capital networking across global markets.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-editorial p-10 hover:bg-white/[0.02] transition-all relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-editorial-accent mb-2">
                    {exp.period}
                  </div>
                  <h4 className="text-3xl font-serif text-white">{exp.company}</h4>
                </div>
                <div className="text-right">
                  <div className="text-xl font-serif italic text-editorial-dim">{exp.role}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-7">
                  <p className="text-sm font-light text-editorial-dim leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>
                <div className="md:col-span-5 bg-black/40 p-6 border-l border-editorial">
                  <div className="font-mono text-[8px] uppercase tracking-widest text-white mb-4">Key Result // Impact</div>
                  <ul className="space-y-3">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-[11px] font-sans tracking-tight text-white/70 flex items-start gap-2">
                        <span className="w-1 h-1 bg-editorial-accent rounded-full mt-1.5 shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
