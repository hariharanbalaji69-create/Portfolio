import { motion } from 'motion/react';

const projects = [
  {
    title: "Education Expenditure & India's Economic Growth",
    description: "An empirical econometric investigation modeling the causality between government spending on education and India's economic growth (1980–2015). Leveraging Johansen Cointegration, VAR, and Vector Error Correction Model (VECM) architectures to determine long-run equilibrium relationships.",
    tags: ["Econometrics", "STATA", "VECM Model", "Macroeconomics"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
  },
  {
    title: "Human Development Index (HDI) Strategic Analysis",
    description: "Thesis exploring strategic development planning through historical data comparison of low and high-income nations. Utilizing Panel Regression and Variance Analysis, this research has been cited over 100 times in other publications.",
    tags: ["RStudio", "Panel Regression", "Thesis"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop"
  },
  {
    title: "Banking Profitability & Resilience Dynamics",
    description: "Advanced econometric modeling using Fixed Effects (FE) and Quartile Regression to analyze bank performance. Validated via Hausman tests and rigorous robustness diagnostics for high accuracy.",
    tags: ["Banking", "Fixed Effects", "Econometrics"],
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "AMZN Price & Volatility Forecasting",
    description: "Short-term time-series forecasting for Amazon stock (2020–2022) using ARIMA(2,2,0) and GARCH(1,1) architectures. Achieved a 98.85% average closeness to actual market prices.",
    tags: ["Stock Forecasting", "ARIMA", "GARCH"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Salesforce vs Freshworks: CRM Industry Study",
    description: "A deep-dive CRM industry study and strategy evaluation. This project involved a comprehensive company appraisal through quantitative analysis, including Three-Statement modeling, DCF valuation, and Commonsize analysis.",
    tags: ["CRM Study", "DCF Analysis", "Equity Research"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-editorial-bg">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">Selected Work / Case Studies</h2>
            <h3 className="font-serif text-[clamp(40px,5vw,64px)] font-bold text-white leading-tight">Featured Portfolio</h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-l-2 border-editorial pl-12 py-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim mb-6">Case Study // 0{index + 1}</div>
              
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <h4 className="font-serif text-3xl italic text-white mb-6 group-hover:text-editorial-text/80 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-base font-light text-editorial-dim leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase tracking-widest text-editorial-text px-3 py-1 border border-editorial">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-editorial" />
                </div>

                <div className="w-full md:w-64 aspect-[4/5] overflow-hidden bg-editorial-accent/20 border border-editorial">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
