import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Code2, 
  LineChart,
  FileSpreadsheet,
  Sliders,
  RotateCcw,
  Eye
} from 'lucide-react';

// @ts-ignore
import ledgerDbBrowser from '../assets/images/ledger_db_browser.png';
// @ts-ignore
import adjustedBalances from '../assets/images/adjusted_balances.png';

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

const stages = [
  {
    id: 1,
    title: "Database Verification & Quality Control (SQL)",
    shortTitle: "Stage 01 / SQL",
    icon: <Database className="w-5 h-5" />,
    description: "Before any financial analysis can happen, the underlying data must be bulletproof. Using SQL to query large ledger databases (as shown in my portfolio screenshots), I quickly verify and audit transactional integrity.",
    points: [
      {
        title: "Audit & Balancing",
        desc: "Writing queries to ensure double-entry data is consistent, debits balance with credits, and adjusting entries are correctly mapped."
      },
      {
        title: "Data Cleaning",
        desc: "Reformatting raw date strings, handling NULL values, and structuring transaction fields so they are perfectly optimized for financial reporting."
      }
    ],
    tech: ["SQL (SQLite)", "Ledger Integrity", "Double-Entry Auditing", "ETL Pipelines"]
  },
  {
    id: 2,
    title: "\"What-If\" Scenario Analysis (Excel)",
    shortTitle: "Stage 02 / Excel",
    icon: <FileSpreadsheet className="w-5 h-5" />,
    description: "Once the data is clean and aggregated via SQL, I pull the structured trial balances into Microsoft Excel to build flexible, dynamic financial models.",
    points: [
      {
        title: "Strategic Modeling",
        desc: "Constructing core financial statements that update seamlessly when new database dumps are plugged in."
      },
      {
        title: "Scenario Testing",
        desc: "Utilizing Excel tools (like Data Tables and conditional logic) to run \"What-If\" analyses—stress-testing how shifts in cost of sales, pricing, or operational expenses impact the final net balance."
      }
    ],
    tech: ["Financial Modeling", "Scenario Analysis", "Sensitivity Matrices", "Gorilla Test 99%"]
  },
  {
    id: 3,
    title: "Executive Visualizations (Power BI)",
    shortTitle: "Stage 03 / Power BI",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Data is only valuable if stakeholders can easily understand it. I connect the final structured datasets to Power BI to turn rows of transactions into interactive, business-focused narratives.",
    points: [
      {
        title: "High-Level Dashboards",
        desc: "Aggregating complex categories (like Trading and Operating accounts) into clean executive summaries."
      },
      {
        title: "Granular Drill-Downs",
        desc: "Setting up reports that allow team members to look at overall performance, then instantly slice the data by territory, date range, or specific account keys."
      }
    ],
    tech: ["Power BI Integration", "Dashboard Design", "DAX Analytics", "Executive Reporting"]
  }
];

/* SQL SIMULATOR COMPONENT */
function SqlSimulator() {
  const [sqlTab, setSqlTab] = useState<'ledger' | 'balance'>('ledger');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-editorial pb-3">
        <button
          onClick={() => setSqlTab('ledger')}
          className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wider border transition-all cursor-pointer ${
            sqlTab === 'ledger'
              ? 'bg-white text-black border-white font-semibold'
              : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
          }`}
        >
          ledger_db_browser.png (General Ledger Table)
        </button>
        <button
          onClick={() => setSqlTab('balance')}
          className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wider border transition-all cursor-pointer ${
            sqlTab === 'balance'
              ? 'bg-white text-black border-white font-semibold'
              : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
          }`}
        >
          adjusted_balances.png (Adjusted Balances)
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* SQL Screen Mockup */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative group overflow-hidden border border-editorial bg-[#141414] rounded-sm aspect-[1.7] flex items-center justify-center">
            <img
              src={sqlTab === 'ledger' ? ledgerDbBrowser : adjustedBalances}
              alt={sqlTab === 'ledger' ? "General Ledger Database" : "Adjusted Balances Database"}
              className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-300 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-editorial px-3 py-1.5 text-[8px] font-mono text-white cursor-pointer flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Eye size={12} /> ENLARGE PREVIEW
            </div>
          </div>
          <div className="text-[10px] font-mono text-editorial-dim text-center italic">
            {sqlTab === 'ledger' 
              ? "Figure 1.1: General Ledger transactional entries with audit keys and ledger columns." 
              : "Figure 1.2: SQL query aggregating balances into corporate account classes."}
          </div>
        </div>

        {/* Code block panel */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-[#050505] border border-editorial/60 p-5 rounded-sm">
            <div className="flex items-center justify-between pb-3 border-b border-editorial/40 mb-3">
              <span className="font-mono text-[8px] text-editorial-dim uppercase tracking-widest">Active SQL Script</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <pre className="text-[10px] font-mono text-zinc-300 whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-[140px]">
{sqlTab === 'ledger' 
  ? `-- Audit and check transactional integrity\nSELECT \n  EntryNo, Date, Details, Amount \nFROM General_Ledger\nWHERE Details LIKE '%Cost of Sales%'\nORDER BY EntryNo ASC \nLIMIT 5;`
  : `-- Verify adjusted net balance classes\nSELECT \n  Class, \n  COUNT(*) AS Total_Transactions, \n  SUM(Amount) AS Adjusted_Net_Balance\nFROM General_Ledger \nGROUP BY Class;`}
            </pre>
          </div>
          <p className="text-xs font-light text-editorial-dim leading-relaxed font-serif italic">
            {sqlTab === 'ledger' 
              ? "This screenshot illustrates the raw general ledger table containing 27,909 rows. I run specific validation scripts to ensure transaction double-entries balance exactly to zero before building downstream reporting pipelines."
              : "The adjusted balances query output summarizes accounts into Trading, Operating, Adjusting, and Balance Sheet categories. This verifies overall database integrity and forms the basis for subsequent financial statement modeling."}
          </p>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full border border-editorial bg-[#0A0A0A] p-6 relative"
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest text-black bg-white hover:bg-editorial-text px-3 py-1.5 transition-colors cursor-pointer"
              >
                Close Window [x]
              </button>
              <h4 className="font-serif italic text-xl text-white mb-6">
                {sqlTab === 'ledger' ? "SQL Ledger DB Table Browser (Full View)" : "SQL Query Result - Balanced Net Accounts (Full View)"}
              </h4>
              <div className="bg-neutral-900 border border-editorial overflow-hidden">
                <img
                  src={sqlTab === 'ledger' ? ledgerDbBrowser : adjustedBalances}
                  alt="Enlarged screenshot"
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* EXCEL SIMULATOR COMPONENT */
function ExcelSimulator() {
  const [copPercentage, setCopPercentage] = useState(50); // Cost of sales as % of revenue (base 50%)
  const [pricingShift, setPricingShift] = useState(0); // Pricing shift from -10% to +10%

  // Financial model formulas (base values)
  const baseRevenue = 1200000;
  const baseOperatingExp = 320000;

  // Live adjustments
  const actualRevenue = baseRevenue * (1 + pricingShift / 100);
  const actualCostOfSales = actualRevenue * (copPercentage / 100);
  const grossProfit = actualRevenue - actualCostOfSales;
  const ebitda = grossProfit - baseOperatingExp;
  const taxRate = 0.19; // 19% UK corp tax
  const corpTax = ebitda > 0 ? ebitda * taxRate : 0;
  const netIncome = ebitda - corpTax;

  const resetSimulator = () => {
    setCopPercentage(50);
    setPricingShift(0);
  };

  return (
    <div className="grid md:grid-cols-12 gap-6 items-stretch">
      {/* Spreadsheet grid */}
      <div className="md:col-span-8 border border-editorial bg-[#050505] p-5 rounded-sm flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left font-mono text-[10px] text-zinc-300">
            <thead>
              <tr className="bg-neutral-900 border-b border-editorial text-editorial-dim">
                <th className="p-2 border-r border-editorial text-center w-8">#</th>
                <th className="p-2 border-r border-editorial">A (Column Label)</th>
                <th className="p-2">B (Formula / Cell Value)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-editorial/40">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim font-bold">1</td>
                <td className="p-2 border-r border-editorial font-medium text-white">Revenue (adjusted)</td>
                <td className="p-2 text-green-400 font-semibold bg-green-500/5">
                  ${actualRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(=BaseRev * (1 + PricingShift))</span>
                </td>
              </tr>
              <tr className="border-b border-editorial/40">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim font-bold">2</td>
                <td className="p-2 border-r border-editorial font-medium text-white">Cost of Sales (CoS)</td>
                <td className="p-2 text-red-400 bg-red-500/5">
                  -${actualCostOfSales.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(=B1 * {copPercentage}%)</span>
                </td>
              </tr>
              <tr className="border-b border-editorial/40 bg-neutral-900/20">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim font-bold">3</td>
                <td className="p-2 border-r border-editorial font-semibold text-white/90">Gross Profit</td>
                <td className="p-2 text-white font-bold border-t border-b border-zinc-700">
                  ${grossProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(=B1 - B2)</span>
                </td>
              </tr>
              <tr className="border-b border-editorial/40">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim font-bold">4</td>
                <td className="p-2 border-r border-editorial font-medium text-white">Operating Expenses</td>
                <td className="p-2">
                  -${baseOperatingExp.toLocaleString()}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(Base Fixed OpEx)</span>
                </td>
              </tr>
              <tr className="border-b border-editorial/40 bg-neutral-900/20">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim font-bold">5</td>
                <td className="p-2 border-r border-editorial font-semibold text-white/90">EBITDA</td>
                <td className="p-2 text-white font-bold border-b border-zinc-700">
                  ${ebitda.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(=B3 - B4)</span>
                </td>
              </tr>
              <tr className="border-b border-editorial/40">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim font-bold">6</td>
                <td className="p-2 border-r border-editorial font-medium text-white">Corporate Tax (19%)</td>
                <td className="p-2 text-red-300">
                  -${corpTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(=MAX(0, B5 * 19%))</span>
                </td>
              </tr>
              <tr className="bg-white/5 font-bold">
                <td className="p-2 border-r border-editorial text-center bg-neutral-900/50 text-editorial-dim">7</td>
                <td className="p-2 border-r border-editorial text-editorial-text uppercase tracking-widest">Net Income</td>
                <td className="p-2 text-[#f59e0b] border-double border-b-4 border-[#f59e0b]/50">
                  ${netIncome.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-zinc-500 text-[9px] ml-2 font-normal">(=B5 - B6)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-editorial text-[9px] font-mono text-editorial-dim mt-4">
          <span>Excel Sheet: scenario_manager.xlsx</span>
          <button 
            onClick={resetSimulator}
            className="flex items-center gap-1 text-white hover:text-[#f59e0b] transition-colors cursor-pointer"
          >
            <RotateCcw size={10} /> Reset Base Case
          </button>
        </div>
      </div>

      {/* Control panel sliders */}
      <div className="md:col-span-4 bg-neutral-900/30 border border-editorial p-5 flex flex-col justify-between rounded-sm">
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-editorial/40 pb-2">
            <Sliders size={14} className="text-[#f59e0b]" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-white">What-If Adjusters</span>
          </div>

          {/* Pricing Shift Slider */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span className="text-editorial-dim">Pricing Shift:</span>
              <span className={pricingShift >= 0 ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                {pricingShift > 0 ? `+${pricingShift}` : pricingShift}%
              </span>
            </div>
            <input
              type="range"
              min="-10"
              max="10"
              step="1"
              value={pricingShift}
              onChange={(e) => setPricingShift(parseInt(e.target.value))}
              className="w-full accent-white cursor-ew-resize bg-neutral-800 h-1 rounded"
            />
            <div className="flex justify-between font-mono text-[8px] text-zinc-500">
              <span>-10% (Discount)</span>
              <span>0% (Base)</span>
              <span>+10% (Premium)</span>
            </div>
          </div>

          {/* Cost of Sales (CoS) % Slider */}
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span className="text-editorial-dim">Cost of Sales %:</span>
              <span className="text-white font-bold">{copPercentage}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="65"
              step="1"
              value={copPercentage}
              onChange={(e) => setCopPercentage(parseInt(e.target.value))}
              className="w-full accent-white cursor-ew-resize bg-neutral-800 h-1 rounded"
            />
            <div className="flex justify-between font-mono text-[8px] text-zinc-500">
              <span>40% (High Margin)</span>
              <span>50% (Base)</span>
              <span>65% (Low Margin)</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-editorial/40 space-y-3 mt-4">
          <div className="p-4 bg-white/5 border border-editorial text-[10px] font-mono text-editorial-dim rounded-sm">
            <span className="text-white font-semibold block mb-1">Sensitivity Analysis Notes:</span>
            {netIncome > 388000 ? (
              <span className="text-green-400 font-medium">🔥 Favorable Scenario: High-margin optimization yields a net income boost of {(((netIncome - 388800)/388800)*100).toFixed(1)}% vs. base.</span>
            ) : netIncome < 388000 ? (
              <span className="text-red-400 font-medium">⚠️ Risk Scenario: Cost increases and discounts stress net income runway. EBITDA margin reduced.</span>
            ) : (
              <span>Standard baseline model displaying standard corporate profit levels under base metrics.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* POWER BI SIMULATOR COMPONENT */
function PowerBiSimulator() {
  const [territory, setTerritory] = useState<'Global' | 'T1' | 'T2'>('Global');

  // Scale data according to mock territory selected
  const scale = territory === 'Global' ? 1.0 : territory === 'T1' ? 0.62 : 0.38;

  // Real data values from SQL screenshots, scaled accordingly
  const items = [
    { label: "Trading account (COGS & Sales)", val: -22524132 * scale, color: "bg-red-500/20 text-red-400 border-red-500/40" },
    { label: "Operating account (Expenses)", val: -7954497 * scale, color: "bg-red-400/20 text-red-300 border-red-400/40" },
    { label: "Liabilities & Owner Equity", val: -12320001 * scale, color: "bg-orange-500/20 text-orange-400 border-orange-500/40" },
    { label: "Assets Ledger", val: 12320001 * scale, color: "bg-green-500/20 text-green-400 border-green-500/40" },
    { label: "Adjusting Ledger Entries", val: -3216948 * scale, color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
    { label: "Non-operating items", val: 155904 * scale, color: "bg-teal-500/20 text-teal-400 border-teal-500/40" },
  ];

  return (
    <div className="space-y-6">
      {/* Dashboard Top bar Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-editorial pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
          <span className="font-mono text-[10px] text-white uppercase tracking-wider">Power BI Report: Financial Ledger Performance</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[9px] text-editorial-dim">Slicer / Territory:</span>
          <div className="flex rounded-sm border border-editorial overflow-hidden bg-black">
            {(['Global', 'T1', 'T2'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTerritory(t)}
                className={`px-3 py-1 font-mono text-[9px] border-r border-editorial last:border-r-0 cursor-pointer transition-all ${
                  territory === t ? 'bg-white text-black font-semibold' : 'bg-transparent text-editorial-dim hover:text-white'
                }`}
              >
                {t === 'Global' ? 'Global Operations' : t === 'T1' ? 'Territory 01' : 'Territory 02'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white/[0.01] border border-editorial rounded-sm">
          <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block mb-1">
            Trading Net Close
          </span>
          <span className="text-base md:text-lg font-serif italic text-white font-semibold">
            ${Math.abs(-22524132 * scale).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="p-4 bg-white/[0.01] border border-editorial rounded-sm">
          <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block mb-1">
            Operating Net Close
          </span>
          <span className="text-base md:text-lg font-serif italic text-white font-semibold">
            ${Math.abs(-7954497 * scale).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="p-4 bg-white/[0.01] border border-editorial rounded-sm">
          <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block mb-1">
            Audit Integrity Assets
          </span>
          <span className="text-base md:text-lg font-serif italic text-green-400 font-semibold">
            ${(12320001 * scale).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="p-4 bg-white/[0.01] border border-editorial rounded-sm">
          <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block mb-1">
            Total Ledger Variance
          </span>
          <span className="text-base md:text-lg font-serif italic text-emerald-400 font-semibold">
            $0.00
          </span>
        </div>
      </div>

      {/* Visual Chart Mockup */}
      <div className="border border-editorial bg-[#050505] p-5 rounded-sm">
        <div className="font-mono text-[9px] uppercase tracking-widest text-editorial-dim mb-4">
          Adjusted Net Balance by Sheet Class (SQL Verified Assets)
        </div>
        <div className="space-y-4">
          {items.map((item, idx) => {
            const maxVal = 22524132;
            const percentage = (Math.abs(item.val) / maxVal) * 100;

            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-editorial-dim">{item.label}</span>
                  <span className="font-semibold text-white">
                    {item.val < 0 ? '-' : ''}${Math.abs(item.val).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="h-4 bg-neutral-900/60 border border-editorial/30 rounded-sm overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className={`h-full border-r ${item.color}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="skills" className="bg-editorial-bg py-32 border-b border-editorial">
      <div className="section-container">
        {/* Core Pillars */}
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

        {/* TECHNICAL APPROACH SECTION */}
        <div className="border-t border-editorial pt-24 mt-24">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#f59e0b] block mb-4">
                Methodology & Workflow
              </span>
              <h3 className="font-serif text-4xl md:text-5xl italic text-white leading-tight mb-8">
                Technical Approach: Financial Data Analytics & Modeling
              </h3>
              <p className="text-base font-light text-editorial-dim leading-relaxed font-serif italic">
                In corporate finance, data integrity is everything. This project demonstrates my approach to bridging the gap between raw backend databases and executive-level decision-making. By combining SQL for database validation, Excel for dynamic scenario modeling, and Power BI for visual reporting, I build scalable workflows that replace slow, manual data manipulation with clean analytics.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:max-w-xs bg-white/[0.02] border border-editorial p-6"
            >
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-editorial-dim mb-4">Core Toolkit</h4>
              <div className="flex flex-wrap gap-2">
                {["SQL (SQLite)", "Excel Financial Modeling", "Power BI Dashboards", "ETL Pipelines", "What-If Analysis"].map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono text-white px-2.5 py-1 bg-white/5 border border-editorial rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Framework Navigator */}
          <div className="grid lg:grid-cols-12 gap-8 border border-editorial p-5 md:p-10 bg-white/[0.01]">
            {/* Left selector */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-editorial-dim mb-4">
                The Three-Stage Framework
              </div>
              {stages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 border transition-all duration-300 flex items-start gap-4 cursor-pointer group ${
                    activeStage === idx
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
                  }`}
                >
                  <div className={`p-2 border transition-all ${
                    activeStage === idx ? 'bg-black text-white border-black' : 'border-editorial-accent text-editorial-dim group-hover:text-white group-hover:border-white'
                  }`}>
                    {stage.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-widest block mb-1 opacity-70">
                      {stage.shortTitle}
                    </div>
                    <h5 className="font-serif italic text-base leading-tight">
                      {stage.title}
                    </h5>
                  </div>
                </button>
              ))}

              <div className="mt-6 p-5 bg-white/[0.02] border border-editorial italic text-xs text-editorial-dim leading-relaxed">
                <span className="font-mono text-[9px] uppercase tracking-wider text-white block mb-2">Value:</span>
                "Instead of relying on rigid, error-prone manual spreadsheets that break every month, I use this data-first toolkit to build robust, audit-ready financial insights. For a finance team, this means faster monthly closes, highly reliable forecasting, and dashboards that give leadership answers in real time."
              </div>
            </div>

            {/* Right content/simulator */}
            <div className="lg:col-span-8 flex flex-col justify-between min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 h-full flex flex-col justify-between"
                >
                  {/* Text descriptions */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-editorial">
                      <h4 className="text-xl md:text-2xl font-serif italic text-white flex items-center gap-3">
                        {stages[activeStage].title}
                      </h4>
                    </div>
                    
                    <p className="text-sm font-light leading-relaxed text-editorial-dim">
                      {stages[activeStage].description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {stages[activeStage].points.map((pt, i) => (
                        <div key={i} className="p-4 border border-editorial/60 bg-white/[0.01]">
                          <h6 className="font-serif italic text-white text-sm mb-1.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                            {pt.title}
                          </h6>
                          <p className="text-[11px] font-light text-editorial-dim leading-relaxed">
                            {pt.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulator Box */}
                  <div className="border border-editorial bg-black overflow-hidden flex flex-col rounded-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-editorial">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="text-[8px] font-mono text-editorial-dim uppercase tracking-widest">
                        {activeStage === 0 && "Terminal / SQLite Database Engine"}
                        {activeStage === 1 && "Spreadsheet / 'What-If' Scenario Model"}
                        {activeStage === 2 && "Dashboard / Executive Analytics View"}
                      </div>
                      <div className="w-10" />
                    </div>

                    {/* Content */}
                    <div className="p-5 bg-[#0A0A0A]">
                      {activeStage === 0 && <SqlSimulator />}
                      {activeStage === 1 && <ExcelSimulator />}
                      {activeStage === 2 && <PowerBiSimulator />}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
