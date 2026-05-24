import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Calendar
} from 'lucide-react';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  location: string;
  category: 'academic' | 'professional';
  shortDesc: string;
  extendedDesc: string;
  tags: string[];
  achievement?: string;
  metric?: string;
}

export default function TimelineBlog() {
  const [filter, setFilter] = useState<'all' | 'academic' | 'professional'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: '2016-hs',
      year: '2016',
      title: 'High School Completion',
      location: 'Secondary Education Quarters',
      category: 'academic',
      shortDesc: 'Completed secondary education with deep distinction and top-tier standing in quantitative mathematics.',
      extendedDesc: 'Laid the essential mathematical foundation for econometric forecasting. Developed advanced problem-solving methodologies, focusing on matrix algebra, analytical geometry, and statistical analysis.',
      tags: ['Secondary Honours', 'Calculus Foundation', 'Quantitative'],
      achievement: 'Class Rank: Top Percentile'
    },
    {
      id: '2019-intern',
      year: '2019',
      title: 'First Internship: Klubworks',
      location: 'Klub (KlubWorks Ops)',
      category: 'professional',
      shortDesc: 'Initiated real-world financial operations and administrative general ledger tracking.',
      extendedDesc: 'Operated within data pipelines to audit outstanding business transaction records. Managed merchant ledger entries, performed transaction reconciliation, and learned high-integrity corporate compliance standards.',
      tags: ['FinTech Ops', 'Data Reconciling', 'Klubworks'],
      metric: 'Audited 500+ Accounts'
    },
    {
      id: '2020-undergrad',
      year: '2020-21',
      title: "Bachelor's Degree Graduation",
      location: 'Undergraduate University',
      category: 'academic',
      shortDesc: 'Graduated with First Class Honours, commanding outstanding metrics across commercial economics.',
      extendedDesc: 'Rigorous studies in corporate accounting, quantitative business modeling, microeconomics, and public finance. Validated dynamic balance sheets and solved computational business optimization case studies.',
      tags: ['First Class Honours', 'Financial Analytics', 'Business Economics'],
      achievement: 'First-Class Standing (distinction)'
    },
    {
      id: '2020-job',
      year: '2020-21',
      title: 'First Corporate Placement',
      location: 'Financial Data & Operations Office',
      category: 'professional',
      shortDesc: 'Secured official post-grad career placement managing financial records, balance sheets, and data ledgers.',
      extendedDesc: 'Developed custom spreadsheet workflows to cleanse legacy data logs. Conducted high-accuracy reconciliation processes across multi-tier bank statements, reducing transaction tracking discrepancies.',
      tags: ['Corporate Role', 'Balance Sheet Audit', 'Spreadsheet Engines'],
      metric: 'Zero Reconciliation Leaks'
    },
    {
      id: '2022-postgrad',
      year: 'Sep 2022',
      title: 'Postgraduate Studies & Pre-Masters',
      location: 'Pre-Masters Graduate Track',
      category: 'academic',
      shortDesc: 'Refined core econometric theories, statistical software, and matrix math for masters-level research.',
      extendedDesc: 'Selected for intensive research preparatory pathways. Advanced knowledge in multivariable regression models, variance structures (ANOVA), and mathematical logic for corporate financial engineering.',
      tags: ['Pre-Masters', 'Econometric Prep', 'Linear Matrix Math']
    },
    {
      id: '2023-diploma',
      year: '2023',
      title: 'Postgraduate Diploma Validation',
      location: 'Graduate Studies Center',
      category: 'academic',
      shortDesc: 'Completed intensive Postgraduate Diploma, mastering asset pricing and advanced financial instruments.',
      extendedDesc: 'Rigorous coursework spanning capital derivatives, international investment models, corporate treasury protocols, and regulatory framework analysis. Perfected statistical modeling approaches in preparation for Birmingham.',
      tags: ['PG Diploma', 'Treasury Protocols', 'Asset Allocation']
    },
    {
      id: '2024-grad',
      year: '2024',
      title: 'Graduation & Master’s Entry',
      location: 'Postgraduate Academic Senate',
      category: 'academic',
      shortDesc: 'Staged academic graduation while establishing professional roles in graduate finance advisory scopes.',
      extendedDesc: 'Evolved scholarly and professional balance. Coordinated ledger audits, formatted high-integrity investment briefs, and initialized quantitative modeling scripts to analyze asset fluctuations.',
      tags: ['Grad Role', 'Double-Entry Audit', 'Portfolio Scripting'],
      achievement: 'Postgraduate Double Graduation'
    },
    {
      id: '2024-masters',
      year: '2024-25',
      title: 'MSc Masters Coursework & Graduation',
      location: 'University of Birmingham',
      category: 'academic',
      shortDesc: 'MSc Banking and Finance. Mastered advanced econometrics, portfolio optimization, and system analytics.',
      extendedDesc: 'Conducted high-level economic research at the University of Birmingham. Modeled complex portfolio risk equations, evaluated market variables, and delivered data-backed statistical theories concerning international capital pipelines.',
      tags: ['MSc Banking & Fin', 'U. of Birmingham', 'Thesis Modeling'],
      achievement: 'MSc Graduate Credentials'
    },
    {
      id: '2025-parity',
      year: '2025',
      title: 'Parity Engineering & Inception',
      location: 'Systems Architecture Lab',
      category: 'professional',
      shortDesc: 'Architected the Parity Ledger Reconciliation systems to eliminate corporate bookkeeping error loops.',
      extendedDesc: 'Designed comprehensive business sandboxes, logical double-entry database simulation matrixes, and analytical dashboards. Created the state trackers designed to bridge raw data queries with flawless spreadsheet presentation layers.',
      tags: ['Parity Creator', 'System Automation', 'Founder Sandbox'],
      metric: 'Fully Reactive Ledger Integration'
    }
  ];

  const filteredData = timelineData.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="timeline-blog" className="bg-editorial-bg py-20 border-b border-editorial overflow-hidden">
      <div className="section-container">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim block mb-4">
              02 / Chronological Ledger & Milestones
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] italic text-white font-light">
              Interactive Career Timeline
            </h2>
            <p className="text-xs font-light text-editorial-dim leading-relaxed max-w-xl mt-2">
              An operational audit of Hari’s academic milestones and corporate placements, highlighting the continuous path of quantitative expansion.
            </p>
          </div>

          {/* FILTER CONTROLS */}
          <div className="flex items-center gap-2 p-1 border border-editorial bg-white/[0.01]">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'text-editorial-dim hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === 'academic'
                  ? 'bg-white text-black font-semibold'
                  : 'text-editorial-dim hover:text-white'
              }`}
            >
              Academic
            </button>
            <button
              onClick={() => setFilter('professional')}
              className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === 'professional'
                  ? 'bg-white text-black font-semibold'
                  : 'text-editorial-dim hover:text-white'
              }`}
            >
              Professional
            </button>
          </div>
        </div>

        {/* TIMELINE VISUAL GRID */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-editorial/30 transform -translate-x-1/2" />

          <div className="space-y-12">
            {filteredData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Pin */}
                  <div className="absolute left-[21px] md:left-1/2 top-4 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full border-2 bg-editorial-bg transition-all duration-300 ${
                      item.category === 'academic' 
                        ? 'border-[#3b82f6] group-hover:bg-[#3b82f6]' 
                        : 'border-[#f59e0b] group-hover:bg-[#f59e0b]'
                    }`} />
                  </div>

                  {/* Date Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex items-center mb-2 md:mb-0 justify-start md:justify-end md:even:justify-start">
                    <div className={`flex items-center gap-3 font-mono text-[11px] font-semibold tracking-widest ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}>
                      <Calendar size={13} className="text-editorial-dim" />
                      <span className="text-white bg-white/[0.04] border border-editorial px-2.5 py-1">
                        {item.year}
                      </span>
                      <span className={`text-[8px] uppercase tracking-widest px-2 py-0.5 border ${
                        item.category === 'academic'
                          ? 'border-blue-500/30 text-blue-400 bg-blue-500/5'
                          : 'border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className="group border border-editorial bg-white/[0.01] hover:bg-white/[0.02] p-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      {/* Interactive top-border glow block */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 ${
                        item.category === 'academic' ? 'bg-blue-500/40' : 'bg-[#f59e0b]/40'
                      }`} />

                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-wider text-editorial-dim block mb-1">
                            {item.location}
                          </span>
                          <h4 className="font-serif italic text-white text-lg group-hover:text-amber-100 transition-colors">
                            {item.title}
                          </h4>
                        </div>
                        <div className="p-2 border border-editorial bg-editorial-accent/10">
                          {item.category === 'academic' ? (
                            <GraduationCap size={15} className="text-blue-400" />
                          ) : (
                            <Briefcase size={15} className="text-[#f59e0b]" />
                          )}
                        </div>
                      </div>

                      <p className="text-xs font-light text-editorial-dim leading-relaxed mb-4">
                        {item.shortDesc}
                      </p>

                      {/* Achievements/Metrics Labels */}
                      {(item.achievement || item.metric) && (
                        <div className="flex flex-wrap gap-3 mb-4">
                          {item.achievement && (
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#f59e0b] border border-[#f59e0b]/20 bg-[#f59e0b]/5 px-2.5 py-1">
                              <Award size={11} />
                              <span>{item.achievement}</span>
                            </div>
                          )}
                          {item.metric && (
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1">
                              <TrendingUp size={11} />
                              <span>{item.metric}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Expand details action bar */}
                      <div className="flex items-center justify-between pt-4 border-t border-editorial/45 text-[9px] font-mono uppercase tracking-wider text-zinc-500 group-hover:text-editorial-text transition-colors">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="text-[8px] bg-white/[0.02] border border-editorial px-1.5 py-0.5 text-editorial-dim">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-4">
                          <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={11} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Expanded Section */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-dashed border-editorial/30 text-xs font-light text-white/80 leading-relaxed space-y-2">
                              <p className="bg-white/[0.01] p-3 border-l border-[#f59e0b]/40">
                                {item.extendedDesc}
                              </p>
                              
                              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 pt-1">
                                <CheckCircle2 size={11} className="text-amber-500" />
                                <span>Registry aligned and validated ledger record.</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
