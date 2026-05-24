import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Database, 
  Cpu, 
  HardDrive, 
  Layers, 
  Code, 
  GitBranch, 
  Calculator, 
  HelpCircle, 
  TrendingUp, 
  Coins, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  DollarSign, 
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  FileText,
  FileSpreadsheet,
  BarChart3
} from 'lucide-react';

const fleetItems = [
  {
    title: "ARIMA-GARCH Automated Volatility Forecaster",
    version: "v2.1.0",
    status: "Operational",
    type: "Quantitative Engine",
    description: "An automated forecasting agent built in RStudio that parses market history, optimizes AIC values under auto.arima setups, and estimates volatility with GARCH(1,1) bounds.",
    stack: ["RStudio", "TSA Library", "Rscript Runner"],
    icon: <Cpu size={18} className="text-editorial-text" />
  },
  {
    title: "Epicor ERP Reconciliation Integrator",
    version: "v1.4.2",
    status: "Production",
    type: "Automation pipeline",
    description: "Financial middleware that handles direct validation mapping for Schneider Electric-partnered architectures. Drastically automates month-end close by 15-20% and guarantees zero data entry discrepancies.",
    stack: ["Excel VBA", "C# API Adapters", "Epicor Schema"],
    icon: <Database size={18} className="text-editorial-text" />
  },
  {
    title: "Gorilla Engine Spreadsheet Optimizer",
    version: "v3.0.0",
    status: "Completed / Gold Standard",
    type: "Speed-test Audit Suite",
    description: "Comprehensive spreadsheet macro framework designed to speed up heavy-duty financial variance models and predictive data normalization. Reached 99th percentile speed-solving in official Gorilla Testing.",
    stack: ["Microsoft Excel", "Advanced VBA", "Logic Compilers"],
    icon: <Terminal size={18} className="text-editorial-text" />
  },
  {
    title: "SaaS CRM Automated Metrics Auditor",
    version: "v1.0.5",
    status: "Maintained",
    type: "Reporting pipeline",
    description: "Service fleet designed to extract Customer Subscription patterns, cross-verify against contractual licensing billing schedules, and calculate live churn and CAC trends.",
    stack: ["Node.js", "Express", "Customer Registry API"],
    icon: <Layers size={18} className="text-editorial-text" />
  },
  {
    title: "Parity Utility Privacy Node",
    version: "v0.9.1",
    status: "Active Dev",
    type: "User Sovereignty Network",
    description: "Background worker instances that run custom localized graphs, avoiding legacy surveillance telemetry algorithms while allowing secure peer-to-peer user synchronization.",
    stack: ["React Native", "Flutter SDK", "Secure Keys"],
    icon: <GitBranch size={18} className="text-editorial-text" />
  },
  {
    title: "Financial Variance Normalizer",
    version: "v1.2.0",
    status: "Stable",
    type: "Data Management Tool",
    description: "Automated pre-processing compiler designed to log-transform, min-max normalize, and conduct quartile regression analyses on high-volatility telemetry files.",
    stack: ["Stata", "Python Pandas", "NumPy Modules"],
    icon: <HardDrive size={18} className="text-editorial-text" />
  }
];

// Glossary of Financial Jargon
const glossaryItems = [
  {
    term: "COGS (Cost of Goods Sold)",
    meaning: "The direct costs of producing your goods or services. If you sell a coffee for $5, the coffee beans, milk, and cup constitute your COGS (say, $1.50). Leftover is your raw product profit.",
    impact: "Crucial for determining product margins. If COGS is too high, scaling up sales will actually burn more cash."
  },
  {
    term: "Burn Rate (Net Burn)",
    meaning: "The speed at which your company is losing cash to support operations. It is calculated by taking total cash inflows and subtracting total cash outflows over a specific month.",
    impact: "This is your timer. If you have $100K in the bank and a Net Burn of $10K/month, your company self-destructs in 10 months if you do not grow or raise capital."
  },
  {
    term: "EBITDA",
    meaning: "Earnings Before Interest, Taxes, Depreciation, and Amortization. It strips out accounting configurations and geographic tax differences to look at pure core operating profitability.",
    impact: "Investors and banks love this metric because it shows whether the core business engine actually prints cash before financing overhead enters."
  },
  {
    term: "Working Capital",
    meaning: "Current Assets minus Current Liabilities. This represents the oil in your corporate engine—cash locked up in unpaid invoices from clients (receivables) or inventory waiting on shelves.",
    impact: "A business can be highly profitable on paper but go completely bankrupt because all their cash is trapped in unpaid client invoices."
  }
];

// Industry Advisory Checklists
const industryChecklists = [
  {
    id: "saas",
    name: "Software-as-a-Service (SaaS)",
    concept: "Recurring license subscriptions with high upfront engineering and acquisition expenses.",
    criticalMetrics: [
      { name: "CLV : CAC Ratio", value: "> 3.0x Required", desc: "Customer Lifetime Value must be at least triple the cost to acquire them." },
      { name: "Net Revenue Retention", value: "> 110%", desc: "Indicates your existing customer cohort is spending more year-after-year even without finding new customers." },
      { name: "Monthly Churn Rate", value: "< 2%", desc: "Any monthly subscription loss above 3-5% acts as a leaky bucket, stalling growth." }
    ],
    redFlags: "Sunk cash on custom feature requests for high-paying enterprise customers that cannot be productized to generic tiers."
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    concept: "Physical product model requiring active capital to prepay inventory, shipping, and ad spend.",
    criticalMetrics: [
      { name: "Inventory Turnover", value: "6 - 12x Yearly", desc: "How many times you sell and replace your inventory. High turn prevents stale cash." },
      { name: "Gross Contribution Margin", value: "> 40%", desc: "Must be comfortable enough to absorb high digital marketing cost per acquisition (CPA)." },
      { name: "Cash Conversion Cycle", value: "< 30 Days", desc: "The days between paying suppliers and receiving money from buyers. Keep near zero if possible." }
    ],
    redFlags: "Scaling traffic via expensive Paid Search/Ads while repeat-purchase rate remains below 10%—practically buying empty visits."
  },
  {
    id: "services",
    name: "Agency & Professional Services",
    concept: "B2B consulting, creative execution, or advisory where time-utility constitutes the product.",
    criticalMetrics: [
      { name: "Employee Billable Utilization", value: "70% - 85%", desc: "The percentage of staff hours directly billed to clients vs. wasted on internal tasks." },
      { name: "Receivables (AR) Days Outstanding", value: "< 45 Days", desc: "The average time it takes for clients to wire payment after invoicing." },
      { name: "Client Concentration Risk", value: "< 20%", desc: "No single account should exceed 20% of your total stream, preventing sudden collapse if they churn." }
    ],
    redFlags: "Providing flat-rate unlimited retainer packages without putting strict scope limits in the contract, leading to scope creep."
  }
];

const mockLookupTable = [
  { id: "TX-101", desc: "AWS Server Bill", amt: -24100.50, cat: "Software" },
  { id: "TX-102", desc: "Stripe Active Payout", amt: 48250.90, cat: "Revenue" },
  { id: "TX-103", desc: "Office Remodel Closeout", amt: -7500.00, cat: "Facilities" },
  { id: "TX-104", desc: "Google Ads Campaign", amt: -1200.00, cat: "Marketing" },
];

const mockSumifsTable = [
  { category: "Software", amount: 300, vendor: "Slack Technologies" },
  { category: "Marketing", amount: 1200, vendor: "Meta Ads" },
  { category: "Software", amount: 540, vendor: "GitHub Enterprise" },
  { category: "Facilities", amount: 800, vendor: "Office Depot" },
  { category: "Marketing", amount: 1500, vendor: "Google Ads" },
  { category: "Software", amount: 1200, vendor: "AWS" },
  { category: "Facilities", amount: 320, vendor: "WBM Stationery" }
];

const evalTextBefore = (text: string, delim: string) => {
  if (!delim) return text;
  const idx = text.indexOf(delim);
  return idx === -1 ? "#N/A (Delimiter not found)" : text.substring(0, idx);
};

const evalTextAfter = (text: string, delim: string) => {
  if (!delim) return "";
  const idx = text.indexOf(delim);
  return idx === -1 ? "#N/A (Delimiter not found)" : text.substring(idx + delim.length);
};

const evalEdate = (dateStr: string, months: number) => {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Error: #VALUE!";
    d.setMonth(d.getMonth() + months);
    return d.toISOString().split('T')[0];
  } catch {
    return "Error: #VALUE!";
  }
};

const formatCustomNumber = (val: number) => {
  if (val === 0) return "$   -   ";
  const absoluteStr = Math.abs(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (val < 0) {
    return `($ ${absoluteStr})`;
  }
  return `$ ${absoluteStr}`;
};

export default function SoftwareFleet() {
  const [activeTab, setActiveTab] = useState<'playbook' | 'accounting' | 'analytics'>('playbook');
  
  // Sandbox Simulator State
  const [startingCash, setStartingCash] = useState<number>(60000);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(12000);
  const [cogsPercentage, setCogsPercentage] = useState<number>(35);
  const [fixedExpenses, setFixedExpenses] = useState<number>(8500);

  // Core explanation active state
  const [selectedStatement, setSelectedStatement] = useState<'pl' | 'bs' | 'cf'>('pl');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('saas');

  // Interactive reconciliation states
  const [bankTxs, setBankTxs] = useState([
    { id: 'tx-1', date: 'May 18', description: 'ACH DEP: ACME CORP TECH VENTURE', amount: 3500, type: 'inflow' as const, matchedDocId: null, isMatched: false },
    { id: 'tx-2', date: 'May 19', description: 'CARD EXEC: AWS CLOUD INSTANCE', amount: 120, type: 'outflow' as const, matchedDocId: null, isMatched: false },
    { id: 'tx-3', date: 'May 20', description: 'ACH WITHDRAW: MERCURY LEGAL COUNSEL', amount: 850, type: 'outflow' as const, matchedDocId: null, isMatched: false },
    { id: 'tx-4', date: 'May 22', description: 'MOBILE DEP: CLIENT PILOT SIGNS', amount: 1250, type: 'inflow' as const, matchedDocId: null, isMatched: false },
  ]);

  const [ledgerDocs, setLedgerDocs] = useState([
    { id: 'doc-a', reference: 'INV-2026-004', party: 'Acme Corp', amount: 3500, type: 'invoice' as const, isMatched: false },
    { id: 'doc-b', reference: 'BILL-AWS-MAIN', party: 'Amazon Web Services', amount: 120, type: 'bill' as const, isMatched: false },
    { id: 'doc-c', reference: 'BILL-LEX-PRO', party: 'Mercury Law Group', amount: 850, type: 'bill' as const, isMatched: false },
    { id: 'doc-d', reference: 'INV-2026-005', party: 'Beta Pilot Sign', amount: 1250, type: 'invoice' as const, isMatched: false },
  ]);

  const [selectedTxId, setSelectedTxId] = useState<string | null>(null);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [recentlyReconciled, setRecentlyReconciled] = useState<{txDescription: string, docReference: string, amount: number, date: string}[]>([]);
  const [reconcileError, setReconcileError] = useState<string | null>(null);
  const [reconcileSuccess, setReconcileSuccess] = useState<string | null>(null);

  const handleReconcile = () => {
    if (!selectedTxId || !selectedDocId) {
      setReconcileError("Selection Missing: You must select one Bank Transaction and one ledger document first.");
      setReconcileSuccess(null);
      return;
    }

    const tx = bankTxs.find(t => t.id === selectedTxId);
    const doc = ledgerDocs.find(d => d.id === selectedDocId);

    if (!tx || !doc) return;

    if (tx.isMatched || doc.isMatched) {
      setReconcileError("Conflict: One or both of these lines are already reconciled.");
      setReconcileSuccess(null);
      return;
    }

    if (tx.amount !== doc.amount) {
      setReconcileError(`Parity Error: The bank transaction contains $${tx.amount.toLocaleString()} but the bookkeeping document is $${doc.amount.toLocaleString()}. To protect bookkeeping fidelity, transactions must match to the exact cent!`);
      setReconcileSuccess(null);
      return;
    }

    // Success Match!
    setBankTxs(prev => prev.map(t => t.id === selectedTxId ? { ...t, isMatched: true, matchedDocId: selectedDocId } : t));
    setLedgerDocs(prev => prev.map(d => d.id === selectedDocId ? { ...d, isMatched: true } : d));
    
    setRecentlyReconciled(prev => [
      {
        txDescription: tx.description,
        docReference: doc.reference,
        amount: tx.amount,
        date: tx.date
      },
      ...prev
    ]);

    setReconcileSuccess(`Reconciled successfully! Match verified between Bank ledger "${tx.description}" and bookkeeping record "${doc.reference}" for $${tx.amount.toLocaleString()}.`);
    setReconcileError(null);
    setSelectedTxId(null);
    setSelectedDocId(null);
  };

  const handleResetReconciliation = () => {
    setBankTxs(prev => prev.map(t => ({ ...t, isMatched: false, matchedDocId: null })));
    setLedgerDocs(prev => prev.map(d => ({ ...d, isMatched: false })));
    setRecentlyReconciled([]);
    setSelectedTxId(null);
    setSelectedDocId(null);
    setReconcileError(null);
    setReconcileSuccess("Workspace simulation reset successfully. Start fresh!");
    handleResetPipeline();
  };

  // Preparation of final statements state
  const [pipelineState, setPipelineState] = useState<'idle' | 'extracting' | 'transforming' | 'loading' | 'compiled'>('idle');
  const [compiledSummary, setCompiledSummary] = useState<{
    revenue: number;
    expenses: number;
    netIncome: number;
    status: string;
    reconciliationPercentage: number;
  } | null>(null);

  // Excel What-If Strategy modeling states
  const [baselineSpending, setBaselineSpending] = useState<number>(24000);
  const [spendReductionPercent, setSpendReductionPercent] = useState<number>(15);
  const savedCapital = Math.round(baselineSpending * (spendReductionPercent / 100));

  // Excel Section Guide states
  const [selectedFormulaTab, setSelectedFormulaTab] = useState<'cleaning' | 'mapping' | 'finance' | 'formatting'>('cleaning');
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>('trim');

  // Simulator Inputs
  const [trimInput, setTrimInput] = useState<string>("   10100-Cash Account_Global   ");
  const [valueInput, setValueInput] = useState<string>("48250.90");
  const [textBeforeInput, setTextBeforeInput] = useState<string>("ACC-40200_Web-Revenue");
  const [textBeforeDelim, setTextBeforeDelim] = useState<string>("_");
  const [xlookupSearchId, setXlookupSearchId] = useState<string>("TX-102");
  const [indexMatchSearchId, setIndexMatchSearchId] = useState<string>("TX-103");
  const [sumifsCategory, setSumifsCategory] = useState<string>("Software");
  const [edateStartDate, setEdateStartDate] = useState<string>("2026-05-22");
  const [edateMonths, setEdateMonths] = useState<number>(6);
  const [numFormatValue, setNumFormatValue] = useState<number>(-14500.50);
  const [conditionalValue, setConditionalValue] = useState<number>(85);

  // Power BI Visual Storytelling states
  const [pbiActiveMetric, setPbiActiveMetric] = useState<'all' | 'categories' | 'trends' | 'alerts'>('all');
  const [pbiSoftwareSpend, setPbiSoftwareSpend] = useState<number>(14200);
  const [pbiMarketingSpend, setPbiMarketingSpend] = useState<number>(9300);
  const [pbiFacilitiesSpend, setPbiFacilitiesSpend] = useState<number>(5800);
  const [pbiComplianceRate, setPbiComplianceRate] = useState<number>(85);

  const handleCompilePipeline = () => {
    setPipelineState('extracting');
    
    setTimeout(() => {
      setPipelineState('transforming');
    }, 700);

    setTimeout(() => {
      setPipelineState('loading');
    }, 1400);

    setTimeout(() => {
      setPipelineState('compiled');
      const matchedInflows = bankTxs.filter(t => t.isMatched && t.type === 'inflow').reduce((sum, t) => sum + t.amount, 0);
      const matchedOutflows = bankTxs.filter(t => t.isMatched && t.type === 'outflow').reduce((sum, t) => sum + t.amount, 0);
      const totalTxs = bankTxs.length;
      const matchedTxs = bankTxs.filter(t => t.isMatched).length;
      const rate = Math.round((matchedTxs / totalTxs) * 100);
      
      setCompiledSummary({
        revenue: matchedInflows || 4750, // default audit state value if nothing matched
        expenses: matchedOutflows || 970,
        netIncome: (matchedInflows || 4750) - (matchedOutflows || 970),
        status: matchedTxs === totalTxs ? 'Approved & Closed' : 'Draft / Subledger Open',
        reconciliationPercentage: rate
      });
    }, 2100);
  };

  const handleResetPipeline = () => {
    setPipelineState('idle');
    setCompiledSummary(null);
  };

  // Calculates financial sand box numbers
  const grossProfit = Math.max(0, Math.round(monthlyRevenue * (1 - cogsPercentage / 100)));
  const grossMarginDecimal = (monthlyRevenue > 0) ? (grossProfit / monthlyRevenue) : 0;
  const netEarnings = grossProfit - fixedExpenses;
  const isLoss = netEarnings < 0;
  
  // Calculate runway in months
  const runwayMonths = isLoss ? parseFloat((startingCash / Math.abs(netEarnings)).toFixed(1)) : Infinity;

  // Break-even Revenue required
  const breakEvenRevenue = grossMarginDecimal > 0 ? Math.round(fixedExpenses / grossMarginDecimal) : 0;

  // Render responsive indicators based on simulator numbers
  const getAdvisoryDiagnostic = () => {
    if (monthlyRevenue === 0) {
      return {
        status: "Critical Setup Phase",
        color: "text-red-400 border-red-900/40 bg-red-950/10",
        advice: "With zero operational revenue, your fixed expenses are draining capital purely as pre-seed burn. Prioritize building a Minimum Viable Product (MVP) and securing immediate pre-sales agreements to validate market interest."
      };
    }
    if (isLoss) {
      if (runwayMonths < 3) {
        return {
          status: "Emergency Cash Tightness",
          color: "text-red-400 border-red-500/30 bg-red-950/20",
          advice: `Your business has less than 90 days of operational air supply (${runwayMonths} months). You must instantly do two things: reduce discretionary OpEx (e.g. non-essential tools, travel) and pivot efforts to short-cycle sales opportunities.`
        };
      } else if (runwayMonths < 8) {
        return {
          status: "Moderate Cash Drain (Manageable)",
          color: "text-amber-400 border-amber-500/20 bg-amber-950/10",
          advice: `You have ${runwayMonths} months of runway. Standard planning suggests initiating formal fundraising cycles or planning credit terms at least 6 months before exhaustion. Push gross margin upwards by optimizing pricing tiers.`
        };
      } else {
        return {
          status: "Healthy Runway Buffer",
          color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/10",
          advice: `Your Runway is robust at ${runwayMonths} months. This offers comfortable capital structure safety to run controlled tests, improve product features, or expand your client pipeline without immediate risk of balance sheet failure.`
        };
      }
    } else {
      return {
        status: "Positive Operational Outflow",
        color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/10",
        advice: "Congratulations—your business is cash-flow self-sustaining! Net earnings are positive. You are currently in the 10th percentile of early startups. Reinvest capital back into high-yield acquisition schemes."
      };
    }
  };

  const adviceMeta = getAdvisoryDiagnostic();

  return (
    <section id="fleet" className="bg-editorial-bg py-32 border-b border-editorial overflow-hidden">
      <div className="section-container relative">
        <div className="absolute -left-20 top-0 w-96 h-96 border border-editorial-accent rounded-full opacity-10 pointer-events-none" />

        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 pb-8 border-b border-editorial">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Code size={14} className="text-white/40" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-editorial-dim">
                WORKSPACE PORTFOLIO
              </span>
            </div>
            <h3 className="font-serif text-[clamp(40px,5vw,56px)] italic text-white leading-none mb-4">
              {activeTab === 'playbook' && "Founder's Playbook & Sandbox"}
              {activeTab === 'accounting' && "Ledger & Reconciliation Suite"}
              {activeTab === 'analytics' && "Excel & Power BI Analytics"}
            </h3>
            <p className="text-xs font-light text-editorial-dim leading-relaxed max-w-2xl">
              {activeTab === 'playbook' && "An interactive, visual financial masterclass designed specifically for new business owners with zero accounting background. Explore structural statements, simulate runways, and decode core risk metrics."}
              {activeTab === 'accounting' && "Most accounting general ledgers are identical beneath the surface. Our interactive suite demystifies essential invoice recording and bank matching workflows for self-sufficient operational tracking."}
              {activeTab === 'analytics' && "Turn complex sheets of numbers into compelling spatial narratives. Excel formulas guarantee tabular integrity, while Power BI builds instinctive visual insights to spot trends and risks at a glance."}
            </p>
          </div>

          {/* INNER TAB NAVIGATORS */}
          <div className="flex flex-wrap bg-neutral-900/60 p-1 border border-editorial select-none self-start md:self-auto shrink-0 gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('playbook')}
              className={`px-5 py-2 font-mono text-[9px] uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'playbook'
                  ? 'bg-white text-black font-semibold'
                  : 'text-editorial-dim hover:text-white'
              }`}
            >
              Playbook & Sandbox
            </button>
            <button
              onClick={() => setActiveTab('accounting')}
              className={`px-5 py-2 font-mono text-[9px] uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'accounting'
                  ? 'bg-white text-black font-semibold'
                  : 'text-editorial-dim hover:text-white'
              }`}
            >
              Accounting & Reconciliation
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-5 py-2 font-mono text-[9px] uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-white text-black font-semibold'
                  : 'text-editorial-dim hover:text-white'
              }`}
            >
              Excel & Power BI
            </button>
          </div>
        </div>

        {/* INNER TABS RENDER */}
        <AnimatePresence mode="wait">
          {activeTab === 'playbook' && (
            <motion.div
              key="playbook"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              
              {/* COMPONENT 1: THE LIVE INTERACTIVE SANDBOX */}
              <div className="grid lg:grid-cols-12 gap-12 items-start" id="sandbox">
                {/* Sliders Control Panel */}
                <div className="lg:col-span-5 p-8 border border-editorial bg-neutral-950/30 backdrop-blur-sm space-y-8 rounded-sm">
                  <div className="flex items-center gap-2 pb-4 border-b border-editorial">
                    <Calculator size={16} className="text-editorial-text" />
                    <h4 className="font-serif italic text-lg text-white font-medium">Playbook Financial Simulator</h4>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Field 1: Starting Cash */}
                    <div>
                      <div className="flex justify-between items-center mb-2 font-mono text-[10px] tracking-wider uppercase">
                        <span className="text-editorial-dim">Starting Bank Balance</span>
                        <span className="text-white font-medium">${startingCash.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="5000" 
                        max="500000" 
                        step="5000"
                        value={startingCash} 
                        onChange={(e) => setStartingCash(Number(e.target.value))}
                        className="w-full accent-white h-1 bg-neutral-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-mono text-editorial-dim/50 mt-1">
                        <span>$5,000</span>
                        <span>$500,000</span>
                      </div>
                    </div>

                    {/* Field 2: Monthly Business Revenue */}
                    <div>
                      <div className="flex justify-between items-center mb-2 font-mono text-[10px] tracking-wider uppercase">
                        <span className="text-editorial-dim">Projected Monthly Revenue</span>
                        <span className="text-white font-medium">${monthlyRevenue.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="50000" 
                        step="1000"
                        value={monthlyRevenue} 
                        onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                        className="w-full accent-white h-1  bg-neutral-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-mono text-editorial-dim/50 mt-1">
                        <span>$0 (Pre-Revenue)</span>
                        <span>$50,000 / mo</span>
                      </div>
                    </div>

                    {/* Field 3: COGS % */}
                    <div>
                      <div className="flex justify-between items-center mb-2 font-mono text-[10px] tracking-wider uppercase">
                        <span className="text-editorial-dim">COGS / Product Direct Cost</span>
                        <span className="text-white font-medium">{cogsPercentage}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="90" 
                        step="5"
                        value={cogsPercentage} 
                        onChange={(e) => setCogsPercentage(Number(e.target.value))}
                        className="w-full accent-white h-1  bg-neutral-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-mono text-editorial-dim/50 mt-1">
                        <span>0% (e.g. Service)</span>
                        <span>90% (Low Margin retail)</span>
                      </div>
                    </div>

                    {/* Field 4: Fixed Operational Expenses */}
                    <div>
                      <div className="flex justify-between items-center mb-2 font-mono text-[10px] tracking-wider uppercase">
                        <span className="text-editorial-dim">Fixed Administrative Overhead (OpEx)</span>
                        <span className="text-white font-medium">${fixedExpenses.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="500" 
                        max="25000" 
                        step="500"
                        value={fixedExpenses} 
                        onChange={(e) => setFixedExpenses(Number(e.target.value))}
                        className="w-full accent-white h-1  bg-neutral-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-mono text-editorial-dim/50 mt-1">
                        <span>$500 / mo</span>
                        <span>$25,000 / mo</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-dashed border-editorial rounded">
                    <div className="flex items-start gap-2.5">
                      <HelpCircle size={14} className="text-editorial-text mt-0.5 shrink-0" />
                      <p className="text-[10px] leading-relaxed text-editorial-dim italic">
                        Tip: Change the values to mimic your actual or intended operational plans to view visual forecasts and advisory reports instantly below.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scoreboard and Advisor diagnostics */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
                    {/* Gross Profit block */}
                    <div className="border border-editorial p-6 bg-white/[0.01] flex flex-col justify-between">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-editorial-dim mb-4">Gross Profit Margin</div>
                      <div>
                        <div className="text-2xl font-serif text-white tracking-wide">${grossProfit.toLocaleString()}</div>
                        <div className="text-[9px] font-mono text-editorial-dim/80 mt-1">({(100 - cogsPercentage)}% margin raw profit)</div>
                      </div>
                    </div>

                    {/* Net Burn Block */}
                    <div className={`border p-6 flex flex-col justify-between ${isLoss ? 'border-red-950/50 bg-red-950/5' : 'border-emerald-950/50 bg-emerald-950/5'}`}>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-editorial-dim mb-4">Monthly Net Earnings</div>
                      <div>
                        <div className={`text-2xl font-serif tracking-wide ${isLoss ? 'text-red-400' : 'text-emerald-400'}`}>
                          {isLoss ? `-$${Math.abs(netEarnings).toLocaleString()}` : `+$${netEarnings.toLocaleString()}`}
                        </div>
                        <div className="text-[9px] font-mono text-editorial-dim/80 mt-1">
                          {isLoss ? "Net cash burn rate" : "Sustaining cash build"}
                        </div>
                      </div>
                    </div>

                    {/* Runway / Survival block */}
                    <div className="border border-editorial p-6 bg-white/[0.01] flex flex-col justify-between sm:col-span-2 md:col-span-1">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-editorial-dim mb-4">Strategic Runway</div>
                      <div>
                        <div className={`text-2xl font-serif tracking-wide ${isLoss ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {runwayMonths === Infinity ? "Infinite" : `${runwayMonths} months`}
                        </div>
                        <div className="text-[9px] font-mono text-editorial-dim/80 mt-1">
                          {isLoss ? "Survival countdown" : "Risk of insolvency: Low"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Operational diagnostics report from Hari as Advisor */}
                  <div className={`border p-8 rounded-sm transition-all duration-300 ${adviceMeta.color}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Coins size={16} className="shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase tracking-widest opacity-60">Automatic Advisory Report</span>
                        <span className="font-serif italic text-sm font-semibold tracking-wide text-white">{adviceMeta.status}</span>
                      </div>
                    </div>
                    <p className="text-xs font-light leading-relaxed mb-6 text-editorial-text/90">
                      {adviceMeta.advice}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-editorial-accent">
                      <div>
                        <div className="font-mono text-[9px] uppercase text-white/70 mb-1">Break-Even Sales Target</div>
                        <div className="text-sm font-serif font-semibold text-white">${breakEvenRevenue.toLocaleString()} / mo</div>
                        <p className="text-[9px] text-editorial-dim mt-0.5">Required monthly revenue to hit $0 operational profit.</p>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase text-white/70 mb-1">Direct Target Leverage</div>
                        <div className="text-sm font-serif font-semibold text-white">{cogsPercentage < 30 ? "High pricing power" : "Tight operating loop"}</div>
                        <p className="text-[9px] text-editorial-dim mt-0.5">Optimizing price elasticity decreases this burden.</p>
                      </div>
                    </div>
                  </div>

                  {/* Metric explanations specifically guiding new business owners */}
                  <div className="p-6 border border-editorial bg-neutral-900/40 rounded-sm">
                    <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white mb-3">Understanding the Sandbox Rules:</h5>
                    <div className="grid sm:grid-cols-2 gap-4 text-[11px] text-editorial-dim/90 font-light leading-relaxed">
                      <div className="flex gap-2">
                        <span className="text-white font-mono mt-0.5">1.</span>
                        <p><strong>Revenue != Profit:</strong> You do not own your top-line revenue! Your COGS eats its share first. High sales volumes can fool founders into feeling rich when margins actually prevent sustainable survival.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white font-mono mt-0.5">2.</span>
                        <p><strong>Fixed Costs are Killers:</strong> Operational costs like office space, software licenses, or upfront retainers persist whether you generate $1 or $100,000. Keep fixed OpEx extremely lean in your first year.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPONENT 2: INTERACTIVE THREE PLIARS OF CORPORTATE FINANCIALS */}
              <div className="border-t border-editorial pt-16">
                <div className="max-w-3xl mb-12">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-editorial-dim block mb-3">Core Framework Bridge</span>
                  <h4 className="font-serif italic text-3xl text-white mb-4">Decoupling the 3 Core Financial Statements</h4>
                  <p className="text-xs font-light leading-relaxed text-editorial-dim">
                    Most new business owners make decisions based purely on their bank Account balance. This leads directly to cash blockages. Dynamic corporate models require understanding how these three reports interact. Click each below to map their relationship.
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Selector column */}
                  <div className="md:col-span-4 flex flex-col gap-3">
                    <button
                      onClick={() => setSelectedStatement('pl')}
                      className={`p-6 text-left border cursor-pointer transition-all ${
                        selectedStatement === 'pl'
                          ? 'border-white bg-white/[0.02]'
                          : 'border-editorial bg-transparent opacity-60 hover:opacity-100 hover:border-editorial-dim'
                      }`}
                    >
                      <div className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim mb-2">Statement 01</div>
                      <div className="font-serif italic text-lg text-white font-medium">Income Statement (P&L)</div>
                      <span className="text-[10px] font-mono block mt-1 text-editorial-dim/80">Profitability Performance Timeline</span>
                    </button>

                    <button
                      onClick={() => setSelectedStatement('bs')}
                      className={`p-6 text-left border cursor-pointer transition-all ${
                        selectedStatement === 'bs'
                          ? 'border-white bg-white/[0.02]'
                          : 'border-editorial bg-transparent opacity-60 hover:opacity-100 hover:border-editorial-dim'
                      }`}
                    >
                      <div className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim mb-2">Statement 02</div>
                      <div className="font-serif italic text-lg text-white font-medium">The Balance Sheet</div>
                      <span className="text-[10px] font-mono block mt-1 text-editorial-dim/80">Solvency & Structural Assets Snapshot</span>
                    </button>

                    <button
                      onClick={() => setSelectedStatement('cf')}
                      className={`p-6 text-left border cursor-pointer transition-all ${
                        selectedStatement === 'cf'
                          ? 'border-white bg-white/[0.02]'
                          : 'border-editorial bg-transparent opacity-60 hover:opacity-100 hover:border-editorial-dim'
                      }`}
                    >
                      <div className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim mb-2">Statement 03</div>
                      <div className="font-serif italic text-lg text-white font-medium">Cash Flow Statement</div>
                      <span className="text-[10px] font-mono block mt-1 text-editorial-dim/80">The Real Liquid Movement</span>
                    </button>
                  </div>

                  {/* Render content box */}
                  <div className="md:col-span-8 p-8 border border-editorial bg-white/[0.01]">
                    <AnimatePresence mode="wait">
                      {selectedStatement === 'pl' && (
                        <motion.div
                          key="pl"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between font-mono text-[10px] text-editorial-dim tracking-wider border-b border-editorial pb-4 mb-4">
                            <span>FOCUS: REVENUE VS. EXPENSES (OVER A SPAN OF TIME)</span>
                            <span className="text-white/60">"AM I MAKING MONEY?"</span>
                          </div>
                          
                          <p className="text-sm font-light leading-relaxed text-editorial-text">
                            The <strong>Profit & Loss Statement (P&L)</strong> tracks your operational score over a quarter or a fiscal year. It sums up all top-line collections, subtracts Cost of Goods (COGS) to find Gross margin, and takes out fixed costs (operating expenditures) to see if you made a raw operating net profit.
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 py-4">
                            <div className="p-4 border border-editorial/60 bg-neutral-900/30">
                              <span className="font-mono text-[9px] uppercase text-white/80 block mb-2">What it ignores:</span>
                              <p className="text-xs text-editorial-dim leading-relaxed font-light">
                                Actual Cash in your wallet. If you invoiced a client on Dec 31st for $50K, to be paid in 60 days, it registers on your P&L as December Revenue, but your bank account is empty!
                              </p>
                            </div>
                            <div className="p-4 border border-editorial/60 bg-neutral-900/30">
                              <span className="font-mono text-[9px] uppercase text-white/80 block mb-2">How it links to others:</span>
                              <p className="text-xs text-editorial-dim leading-relaxed font-light">
                                At year-end, any leftovers (<strong>Net Income</strong>) flow directly to the Balance Sheet under "Retained Earnings" to build corporate value.
                              </p>
                            </div>
                          </div>

                          <div className="bg-editorial-accent/10 border border-editorial p-4 flex gap-4 items-center">
                            <TrendingUp size={16} className="text-editorial-text shrink-0" />
                            <div>
                              <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block">Hari's Custom Engineering Tip:</span>
                              <p className="text-[10px] leading-relaxed text-editorial-dim italic">
                                "Audit templates in our CRM Tool automate metrics so that P&L matches up backends seamlessly. Never mix subscription cohorts manually in formulas."
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedStatement === 'bs' && (
                        <motion.div
                          key="bs"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between font-mono text-[10px] text-editorial-dim tracking-wider border-b border-editorial pb-4 mb-4">
                            <span>FOCUS: STATIC BALANCING EQUATION (POINT-IN-TIME SNAPSHOT)</span>
                            <span className="text-white/60">"WHAT IS MY NET VALUE?"</span>
                          </div>

                          <p className="text-sm font-light leading-relaxed text-editorial-text">
                            The **Balance Sheet** represents the company's bedrock identity. It demonstrates the fundamental law of business governance: **Assets (What you own) = Liabilities (What you owe) + Equity (Your original contribution and accumulated profits)**. It is a snapshot of exactly one specific microsecond (e.g. at Midnight on December 31st).
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 py-4">
                            <div className="p-4 border border-editorial/60 bg-neutral-900/30">
                              <span className="font-mono text-[9px] uppercase text-white/80 block mb-2">Balance Sheet Assets</span>
                              <p className="text-xs text-editorial-dim leading-relaxed font-light">
                                Cash in the bank, inventory on shelves, accounts receivables (uncollected cash), and equipment.
                              </p>
                            </div>
                            <div className="p-4 border border-editorial/60 bg-neutral-900/30">
                              <span className="font-mono text-[9px] uppercase text-white/80 block mb-2">Balance Sheet Liabilities</span>
                              <p className="text-xs text-editorial-dim leading-relaxed font-light">
                                Loans from the bank, accounts payables (bills you owe others), and credit limits.
                              </p>
                            </div>
                          </div>

                          <div className="bg-editorial-accent/10 border border-editorial p-4 flex gap-4 items-center">
                            <ShieldCheck size={16} className="text-editorial-text shrink-0" />
                            <div>
                              <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block">Risk Mitigation Hint:</span>
                              <p className="text-[10px] leading-relaxed text-editorial-dim italic">
                                "When assets do not balance matching liabilities + equity down to the precise penny, it indicates data entry fractures in your transaction mappings or unallocated tax liabilities."
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedStatement === 'cf' && (
                        <motion.div
                          key="cf"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between font-mono text-[10px] text-editorial-dim tracking-wider border-b border-editorial pb-4 mb-4">
                            <span>FOCUS: EXPLAINING THE BANK STATEMENT BALANCE MOVEMENT</span>
                            <span className="text-white/60">"WHERE DID THE LIQUID COINS FLOW?"</span>
                          </div>

                          <p className="text-sm font-light leading-relaxed text-editorial-text">
                            A company does not die from lack of "P&L profit"—it dies from **lack of actual cash**. The Cash Flow Statement links your P&L to your Balance Sheet by showing exactly how cash moved through three key buckets: Operating Activities (core sales/payments), Investing Activities (buying equipment or servers), and Financing Activities (receiving loans or capital).
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 py-4">
                            <div className="p-4 border border-editorial/60 bg-neutral-900/30">
                              <span className="font-mono text-[9px] uppercase text-white/80 block mb-2">Why Profit != Cash Flow</span>
                              <p className="text-xs text-editorial-dim leading-relaxed font-light">
                                You can spend $10,000 buying equipment. That investment does not count as a $10,000 immediate P&L expense (it is capitalized and depreciated slowly over years), but your bank balance instantly drops by the full $10,000 on day one.
                              </p>
                            </div>
                            <div className="p-4 border border-editorial/60 bg-neutral-900/30">
                              <span className="font-mono text-[9px] uppercase text-white/80 block mb-2">Cash Flow as Supreme Truth</span>
                              <p className="text-xs text-editorial-dim leading-relaxed font-light">
                                Always use a Cash-Flow-first lens when negotiating deals. Standardize terms to receive payments upfront rather than downstream, allowing your cash to fuel growth.
                              </p>
                            </div>
                          </div>

                          <div className="bg-editorial-accent/10 border border-editorial p-4 flex gap-4 items-center">
                            <BookOpen size={16} className="text-editorial-text shrink-0" />
                            <div>
                              <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block">Founder's Financial Axiom:</span>
                              <p className="text-[10px] leading-relaxed text-editorial-dim italic">
                                "Revenue is vanity. Profit is sanity. Cash flow is reality. Never build a business ignoring the difference."
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* COMPONENT 3: INDUSTRY ADVISORY CHECKLISTS */}
              <div className="border-t border-editorial pt-16">
                <div className="max-w-2xl mb-12">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-editorial-dim block mb-3">Model Specifics</span>
                  <h4 className="font-serif italic text-3xl text-white mb-4">Advisory Blueprint: Target Industry Checklists</h4>
                  <p className="text-xs font-light leading-relaxed text-editorial-dim">
                    Every industry operates under distinct rules, margin baselines, and operational risks. Select your vertical to identify critical thresholds that Hari targets during operational audits.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  {industryChecklists.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`px-5 py-2.5 font-mono text-[9px] uppercase tracking-widest border transition-all cursor-pointer ${
                        selectedIndustry === ind.id
                          ? 'bg-editorial-text text-black font-semibold border-editorial-text'
                          : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white'
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-stretch">
                  {/* Explanation pillar */}
                  {industryChecklists.filter(i => i.id === selectedIndustry).map((ind) => (
                    <React.Fragment key={ind.id}>
                      <div className="md:col-span-4 p-8 border border-editorial bg-white/[0.01] flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-[8px] uppercase tracking-wider text-editorial-dim">Pillar Business Pattern</span>
                          <h5 className="font-serif italic text-xl text-white mt-2 mb-4">{ind.name} Dynamics</h5>
                          <p className="text-xs leading-relaxed font-light text-editorial-dim">{ind.concept}</p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-editorial">
                          <span className="font-mono text-[8px] uppercase tracking-wider text-red-400 block mb-2">CRITICAL FATAL WEAKNESS:</span>
                          <p className="text-xs text-red-300 italic font-mono leading-relaxed">{ind.redFlags}</p>
                        </div>
                      </div>

                      {/* Diagnostic KPIs block */}
                      <div className="md:col-span-8 border border-editorial bg-neutral-950/20 p-8 space-y-6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/80 block pb-3 border-b border-editorial">
                          Critical Auditing Threshold Metrics & Target Health Status
                        </span>
                        
                        <div className="space-y-4">
                          {ind.criticalMetrics.map((met, idx) => (
                            <div key={idx} className="p-4 border border-editorial/50 bg-neutral-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="max-w-md">
                                <span className="font-mono text-[10px] text-white uppercase tracking-wider font-semibold block mb-1">
                                  {met.name}
                                </span>
                                <p className="text-xs text-editorial-dim leading-normal font-light">
                                  {met.desc}
                                </p>
                              </div>

                              <div className="shrink-0 p-3 bg-white/[0.02] border border-editorial rounded font-mono text-[10px] text-editorial-text font-bold text-center uppercase tracking-widest min-w-[120px]">
                                {met.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* COMPONENT 4: FINANCIAL JARGON BUSTER */}
              <div className="border-t border-editorial pt-16">
                <div className="max-w-2xl mb-12">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-editorial-dim block mb-3">Learn the Lingo</span>
                  <h4 className="font-serif italic text-3xl text-white mb-4">The Jargon Decoder (No-BS Translations)</h4>
                  <p className="text-xs font-light leading-relaxed text-editorial-dim">
                    Scary terms often prevent smart business operators from engaging with their models. Our plain-English decoder cuts through the technical fog.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {glossaryItems.map((item, index) => (
                    <div key={index} className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                      <h5 className="font-mono text-[11px] font-semibold text-white uppercase tracking-wider mb-3">
                        {item.term}
                      </h5>
                      <p className="text-xs text-editorial-dim leading-relaxed font-light mb-4">
                        {item.meaning}
                      </p>
                      <div className="pt-3 border-t border-editorial-accent flex items-start gap-2">
                        <AlertTriangle size={12} className="text-editorial-text shrink-0 mt-0.5" />
                        <p className="text-[10px] leading-normal text-editorial-dim italic">
                          <strong>Real Impact:</strong> {item.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {activeTab === 'accounting' && (
            <motion.div
              key="accounting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* COMPONENT A: THE UNIVERSAL LEDGER PARADIGM */}
              <div className="grid lg:grid-cols-12 gap-12 items-start" id="accounting-suites">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 inline-flex bg-white/[0.03] border border-editorial text-editorial-text">
                      <BookOpen size={16} />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                      The Ledger Paradigm
                    </span>
                  </div>

                  <h4 className="font-serif italic text-3xl text-white leading-tight">
                    Accounting Suites are Nearly Identical
                  </h4>

                  <div className="text-xs font-light leading-relaxed text-editorial-dim space-y-4">
                    <p>
                      Strip away the marketing gloss, high-budget advertisements, and custom dashboards. Beneath the surface, every accounting software (from a $60/month enterprise Xero subscription down to a free Wave tier) operates on the exact same fundamental rule of <strong>double-entry bookkeeping</strong>.
                    </p>
                    <p>
                      This bookkeeping layer represents your business's <strong>Book of Everything</strong>. It records every receipt, bank transfer, client billing, and operational expense you conduct. Its primary mechanism is direct: recording <strong>incoming invoices</strong> (bills you owe external suppliers / Accounts Payable) and <strong>outgoing invoices</strong> (statements customers owe you / Accounts Receivable).
                    </p>
                    <p className="border-l border-editorial-accent pl-4 text-white italic font-serif">
                      "At this early stage, your absolute focus should be the timely updating of your records. The less time you spend organizing or putting it off, the easier it is to present flawless books at any single given moment."
                    </p>
                    <p>
                      Procrastination is the real enemy of cash management. Updating your books for just 15 minutes on a regular schedule prevents severe tax-time panic, facilitates instant bank loan reviews, and keeps actual cash balances fully transparent and clear.
                    </p>
                  </div>
                </div>

                {/* Accounting Products Showcase */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-editorial-dim block pb-3 border-b border-editorial">
                    Industry-Standard general ledger tools & examples
                  </span>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Tool 1 */}
                    <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors rounded-sm space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-serif italic text-lg text-white font-medium">Xero</span>
                        <span className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border border-emerald-500/30 text-emerald-400 bg-emerald-950/10">PREFERRED SCALE</span>
                      </div>
                      <p className="text-xs font-light text-editorial-dim leading-relaxed">
                        Industry gold standard for scaling startups. Features an incredibly robust bank feed and highly mature multi-currency reconciliation mechanisms.
                      </p>
                      <div className="text-[10px] font-mono text-white/60">
                        <strong>Strongest for:</strong> API integrations & automated rules.
                      </div>
                    </div>

                    {/* Tool 2 */}
                    <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors rounded-sm space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-serif italic text-lg text-white font-medium">QuickBooks</span>
                        <span className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border border-white/25 text-white/80 bg-white/[0.02]">GLOBAL DEFAULT</span>
                      </div>
                      <p className="text-xs font-light text-editorial-dim leading-relaxed">
                        The default platform for most CPA firms. Massive ecosystem of certified advisors with deep tax integration. Highly thorough auditing ledgers.
                      </p>
                      <div className="text-[10px] font-mono text-white/60">
                        <strong>Strongest for:</strong> CPA compatibility & tax filing.
                      </div>
                    </div>

                    {/* Tool 3 */}
                    <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors rounded-sm space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-serif italic text-lg text-white font-medium">Wave Accounting</span>
                        <span className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border border-amber-500/30 text-amber-500 bg-amber-950/10">BOOTSTRAP FIRST</span>
                      </div>
                      <p className="text-xs font-light text-editorial-dim leading-relaxed">
                        Powerful free-tier general bookkeeping platform. An exceptional match for solo consultants, freelancers, or tiny bootstrap businesses.
                      </p>
                      <div className="text-[10px] font-mono text-white/60">
                        <strong>Strongest for:</strong> Low overhead & simple invoicing.
                      </div>
                    </div>

                    {/* Tool 4 */}
                    <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors rounded-sm space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-serif italic text-lg text-white font-medium">Sage Intacct</span>
                        <span className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border border-white/25 text-white/80 bg-white/[0.02]">MID-MARKET ERP</span>
                      </div>
                      <p className="text-xs font-light text-editorial-dim leading-relaxed">
                        Heavyweight multi-entity ERP software. Designed to handle dense corporate reconciliations, complex cost centers, and departmental consolidations.
                      </p>
                      <div className="text-[10px] font-mono text-white/60">
                        <strong>Strongest for:</strong> Multi-entity consolidation & controls.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPONENT B: THE RECONCILIATION EXPLAINER & DYNAMIC SIMULATOR */}
              <div className="border-t border-editorial pt-16" id="reconciliation-section">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 inline-flex bg-white/[0.03] border border-editorial text-editorial-text">
                        <Coins size={16} />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                        Bank Reconciliation
                      </span>
                    </div>

                    <h4 className="font-serif italic text-3xl text-white leading-tight">
                      Decoding Bank Reconciliation
                    </h4>

                    <div className="text-xs font-light leading-relaxed text-editorial-dim space-y-4">
                      <p>
                        What does it mean to "reconcile" your books? It is the practice of matching transactions reported on your <strong>real offline bank account feed</strong> (the absolute source of truth) with the <strong>documents and bills inside your virtual accounting software</strong>.
                      </p>
                      <p>
                        If you receive cash in the bank, you must match it to a pending customer invoice. If cash leaves the bank, it must be paired with an expense bill or receipt.
                      </p>
                      <p className="p-4 bg-white/[0.02] border border-editorial border-dashed font-mono uppercase text-[9px] tracking-wide text-white font-semibold">
                        🚨 THE RECONCILIATION RULE:<br/>
                        Bank Feed Statement Balance = Book Balance of Ledger Invoices
                      </p>
                      <p>
                        When they match exactly, you are "reconciled." If they mismatch, you have unrecorded leaks or erroneous duplicate lines. Try matching the ledger in our sandbox simulator to see it in action!
                      </p>

                      <div className="p-4 border border-editorial bg-amber-500/[0.02] rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-amber-500/50" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block mb-1">PRO-TIP</span>
                        <p className="text-[11px] text-editorial-dim font-light leading-relaxed">
                          Choose an accounting software most compatible with your bank. Seamless direct API linkages eliminate manual statement uploads and resolve 90% of reconciling friction.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ACTIVE RECONCILIATION SANDBOX INTERACTIVE SIMULATOR */}
                  <div className="lg:col-span-8 p-8 border border-editorial bg-neutral-950/40 rounded-sm space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-editorial">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block">Tactile Bookkeeping Simulator</span>
                        <h5 className="font-serif italic text-lg text-white">Interactive Bank Feed Linkage</h5>
                      </div>
                      <button
                        onClick={handleResetReconciliation}
                        className="px-4 py-2 font-mono text-[8px] uppercase tracking-widest border border-editorial hover:border-white hover:text-white flex items-center gap-1.5 transition-all text-editorial-dim cursor-pointer"
                      >
                        <RefreshCw size={10} />
                        Reset Simulator
                      </button>
                    </div>

                    {/* Progress tracking */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="p-4 border border-editorial bg-white/[0.01]">
                        <span className="font-mono text-[8px] text-editorial-dim uppercase tracking-wider block mb-1">Matching Progress</span>
                        <div className="text-xl font-serif text-white">
                          {bankTxs.filter(t => t.isMatched).length} / {bankTxs.length} Transactions
                        </div>
                      </div>
                      <div className="p-4 border border-editorial bg-white/[0.01]">
                        <span className="font-mono text-[8px] text-editorial-dim uppercase tracking-wider block mb-1">Reconciliation Rate</span>
                        <div className="text-xl font-serif text-editorial-text font-bold">
                          {Math.round((bankTxs.filter(t => t.isMatched).length / bankTxs.length) * 100)}%
                        </div>
                      </div>
                      <div className="p-4 border border-editorial bg-white/[0.01] col-span-2 sm:col-span-1">
                        <span className="font-mono text-[8px] text-editorial-dim uppercase tracking-wider block mb-1">Status</span>
                        <div className="text-sm font-mono mt-1 flex items-center gap-1.5">
                          {bankTxs.every(t => t.isMatched) ? (
                            <span className="text-emerald-400 font-bold">● RECONCILED</span>
                          ) : (
                            <span className="text-amber-400 font-bold animate-pulse">● ACTION REQUIRED</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Error & Success Messages */}
                    {reconcileError && (
                      <div className="p-4 border border-red-500/20 bg-red-950/20 text-red-300 text-xs font-mono rounded">
                        {reconcileError}
                      </div>
                    )}
                    {reconcileSuccess && (
                      <div className="p-4 border border-emerald-500/20 bg-emerald-950/20 text-emerald-300 text-xs font-mono rounded block">
                        {reconcileSuccess}
                      </div>
                    )}

                    {/* Columns selection matching */}
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      {/* Left Side: Real Bank Statement Feed */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <h6 className="font-mono text-[9px] uppercase tracking-wider text-white">1. Bank Account Statement Feed</h6>
                        </div>

                        <div className="space-y-2">
                          {bankTxs.map(tx => (
                            <button
                              key={tx.id}
                              disabled={tx.isMatched}
                              onClick={() => {
                                setSelectedTxId(tx.id);
                                setReconcileError(null);
                                setReconcileSuccess(null);
                              }}
                              className={`w-full p-4 border text-left flex flex-col justify-between transition-all rounded-sm relative ${
                                tx.isMatched
                                  ? 'border-neutral-900 bg-neutral-950/30 opacity-40 cursor-default'
                                  : selectedTxId === tx.id
                                    ? 'border-blue-400 bg-blue-950/5'
                                    : 'border-editorial bg-transparent hover:border-editorial-dim cursor-pointer'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-1 gap-2">
                                <span className={`font-mono text-[8px] ${tx.isMatched ? 'text-neutral-500' : 'text-editorial-dim'}`}>{tx.date}</span>
                                <span className={`text-[10px] font-mono font-bold ${
                                  tx.isMatched
                                    ? 'text-neutral-500'
                                    : tx.type === 'inflow' ? 'text-emerald-400' : 'text-neutral-300'
                                }`}>
                                  {tx.type === 'inflow' ? '+' : '-'}${tx.amount.toLocaleString()}
                                </span>
                              </div>
                              <p className={`text-xs ${tx.isMatched ? 'text-neutral-500 line-through' : 'text-white'} font-light truncate mb-2`}>
                                {tx.description}
                              </p>

                              {tx.isMatched && (
                                <span className="absolute bottom-2 right-2 text-emerald-400 flex items-center gap-1 font-mono text-[8px]">
                                  <CheckCircle2 size={10} /> MATCHED & CLEARED
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Virtual Accounting Book Records */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <h6 className="font-mono text-[9px] uppercase tracking-wider text-white">2. Accounting Books Ledger</h6>
                        </div>

                        <div className="space-y-2">
                          {ledgerDocs.map(doc => (
                            <button
                              key={doc.id}
                              disabled={doc.isMatched}
                              onClick={() => {
                                setSelectedDocId(doc.id);
                                setReconcileError(null);
                                setReconcileSuccess(null);
                              }}
                              className={`w-full p-4 border text-left flex flex-col justify-between transition-all rounded-sm relative ${
                                doc.isMatched
                                  ? 'border-neutral-900 bg-neutral-950/30 opacity-40 cursor-default'
                                  : selectedDocId === doc.id
                                    ? 'border-amber-400 bg-amber-950/5'
                                    : 'border-editorial bg-transparent hover:border-editorial-dim cursor-pointer'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-1 gap-2">
                                <span className="font-mono text-[8px] bg-white/[0.04] px-1.5 py-0.5 text-editorial-dim select-none rounded">{doc.type.toUpperCase()}</span>
                                <span className={`text-[10px] font-mono font-bold ${doc.isMatched ? 'text-neutral-500' : 'text-white'}`}>
                                  ${doc.amount.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between items-end mt-2">
                                <div>
                                  <p className={`text-xs ${doc.isMatched ? 'text-neutral-500' : 'text-white'} font-medium`}>{doc.party}</p>
                                  <p className="text-[10px] text-editorial-dim font-mono">{doc.reference}</p>
                                </div>
                              </div>

                              {doc.isMatched && (
                                <span className="absolute bottom-2 right-2 text-emerald-400 flex items-center gap-1 font-mono text-[8px]">
                                  <CheckCircle2 size={10} /> RECONCILED
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Match Action Ribbon */}
                    <div className="pt-6 border-t border-editorial flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-[11px] text-editorial-dim font-light leading-relaxed max-w-md">
                        {selectedTxId && selectedDocId ? (
                          <p>
                            Matching Bank Item <span className="text-white font-mono">"{bankTxs.find(t => t.id === selectedTxId)?.description}"</span> to accounting document <span className="text-white font-mono">"{ledgerDocs.find(d => d.id === selectedDocId)?.reference}"</span>.
                          </p>
                        ) : (
                          <p>Select one transaction from the Bank statement feed and one record from the Ledger above to execute reconciliation matching.</p>
                        )}
                      </div>

                      <button
                        onClick={handleReconcile}
                        disabled={!selectedTxId || !selectedDocId}
                        className={`px-6 py-3 font-mono text-[10px] uppercase tracking-widest cursor-pointer flex items-center gap-2 select-none shrink-0 transition-all ${
                          selectedTxId && selectedDocId
                            ? 'bg-editorial-text text-black font-semibold border border-editorial-text'
                            : 'bg-white/[0.02] text-white/30 border border-editorial cursor-not-allowed'
                        }`}
                      >
                        Reconcile Match
                        <ArrowRight size={12} />
                      </button>
                    </div>

                    {/* Recently matched timeline */}
                    {recentlyReconciled.length > 0 && (
                      <div className="pt-6 border-t border-editorial space-y-3">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block">Verified Reconciliation Audit Log</span>
                        <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
                          {recentlyReconciled.map((pair, idx) => (
                            <div key={idx} className="p-3 bg-neutral-900/40 border border-editorial/40 rounded flex items-center justify-between gap-4 text-xs mt-1">
                              <div className="truncate">
                                <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest block font-bold">MATCH VERIFIED</span>
                                <span className="text-white font-light block mt-0.5 truncate">{pair.txDescription}</span>
                                <span className="text-[10px] text-editorial-dim font-mono">{pair.docReference} | Reconciled Date: {pair.date}</span>
                              </div>
                              <div className="text-[11px] font-mono font-bold text-white shrink-0">
                                ${pair.amount.toLocaleString()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* COMPONENT C: PREPARATION OF FINAL STATEMENTS */}
              <div className="border-t border-editorial pt-16" id="final-statements-section">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 inline-flex bg-white/[0.03] border border-editorial text-editorial-text">
                        <FileSpreadsheet size={16} />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                        Ledger Compilation Phase
                      </span>
                    </div>

                    <h4 className="font-serif italic text-3xl text-white leading-tight">
                      Preparation of Final Statements
                    </h4>

                    <div className="text-xs font-light leading-relaxed text-editorial-dim space-y-4">
                      <p>
                        Once your transactional records are reconciled and verified line-by-line, the subledgers go through corporate month-end adjustments to prepare <strong>unbiased financial statements</strong>. 
                      </p>
                      <p>
                        This critical stage compiles disparate ledger entries into strict P&L, Balance Sheet, and Cash Flow formats. Raw lists are parsed, assigned appropriate general classification hierarchies (Chart of Accounts), and formatted with precision.
                      </p>
                      <p className="border-l border-editorial-accent pl-4 text-white italic font-serif">
                        "Reliable final reports are never made from scratch in a vacuum. They are formed through structured ETL (Extract, Transform, Load) pipelines that consume clean bank data and generate executive-facing scorecards."
                      </p>
                    </div>

                    {/* Alternatives and Toolsets Section */}
                    <div className="pt-6 border-t border-editorial/40 space-y-4">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block">
                        SOFTWARE CLASSIFICATION & ALTERNATIVES
                      </span>
                      
                      <div className="space-y-4">
                        {/* Domain 1 */}
                        <div className="p-4 border border-editorial bg-white/[0.01]">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-serif italic text-sm text-white">1. Spreadsheets & Audit Workbooks</span>
                            <span className="font-mono text-[8px] uppercase text-[#107c41]">Excel Baseline</span>
                          </div>
                          <p className="text-[10px] text-editorial-dim font-light leading-relaxed mb-2">
                            The canvas of finance. Essential for posting manual general ledger adjustments, building cash forecasts, and ad-hoc troubleshooting models.
                          </p>
                          <div className="flex gap-2 text-[8px] font-mono">
                            <span className="text-editorial-dim">Alternatives:</span>
                            <span className="text-white">Google Sheets (Web-Native)</span>
                            <span className="text-editorial-dim">|</span>
                            <span className="text-white">LibreOffice Calc (Free Offline)</span>
                          </div>
                        </div>

                        {/* Domain 2 */}
                        <div className="p-4 border border-editorial bg-white/[0.01]">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-serif italic text-sm text-white">2. ETL Modeling & Transformations</span>
                            <span className="font-mono text-[8px] uppercase text-[#1f87c4]">Power Query Baseline</span>
                          </div>
                          <p className="text-[10px] text-editorial-dim font-light leading-relaxed mb-2">
                            Automated transformation layer. Unpivots irregular columns, parses multi-currency feeds, and maps ledger IDs to dynamic accounts.
                          </p>
                          <div className="flex gap-2 text-[8px] font-mono flex-wrap">
                            <span className="text-editorial-dim font-sans">Alternatives:</span>
                            <span className="text-white">dbt / SQL (Analytics Engineering)</span>
                            <span className="text-editorial-dim">|</span>
                            <span className="text-white">Python Pandas (Programmatic Scripting)</span>
                          </div>
                        </div>

                        {/* Domain 3 */}
                        <div className="p-4 border border-editorial bg-white/[0.01]">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-serif italic text-sm text-white">3. Reporting & BI Analytics</span>
                            <span className="font-mono text-[8px] uppercase text-[#f2c811]">Power BI Baseline</span>
                          </div>
                          <p className="text-[10px] text-editorial-dim font-light leading-relaxed mb-2">
                            Interactive visual intelligence. Converts dry tables into drillable graphs detailing runways, gross margins, and customer cohort trends.
                          </p>
                          <div className="flex gap-2 text-[8px] font-mono flex-wrap">
                            <span className="text-editorial-dim font-sans">Alternatives:</span>
                            <span className="text-white">Tableau (Enterprise BI)</span>
                            <span className="text-editorial-dim">|</span>
                            <span className="text-white">Looker Studio (Lightweight Web Board)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ACTIVE PREPARATION PIPELINE INTERACTIVE ENGINE */}
                  <div className="lg:col-span-7 p-8 border border-editorial bg-neutral-950/40 rounded-sm space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-editorial">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#107c41] block">Tactile Transformation Sandbox</span>
                        <h5 className="font-serif italic text-lg text-white">MS Power Toolset Pipeline Compiler</h5>
                      </div>
                      {pipelineState !== 'idle' && (
                        <button
                          onClick={handleResetPipeline}
                          className="px-4 py-2 font-mono text-[8px] uppercase tracking-widest border border-editorial hover:border-white hover:text-white flex items-center gap-1.5 transition-all text-editorial-dim cursor-pointer"
                        >
                          <RefreshCw size={10} />
                          Reset Pipeline
                        </button>
                      )}
                    </div>

                    <p className="text-xs font-light text-editorial-dim leading-relaxed">
                      Most finance workflows waste countless hours copy-pasting tables. Our pipeline links transactional feeds to a structured analytics model using <strong>Power Query</strong>, reporting the outcome directly to a <strong>Power BI</strong> dashboards layer.
                    </p>

                    {/* Interactive Pipeline State Display */}
                    <div className="relative p-6 border border-editorial bg-white/[0.01] rounded-sm space-y-6">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-editorial-dim">Current Pipeline Phase:</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-semibold ${
                          pipelineState === 'compiled'
                            ? 'bg-emerald-950/20 border border-emerald-500/30 text-emerald-400'
                            : pipelineState === 'idle'
                              ? 'bg-neutral-900 border border-editorial text-editorial-dim'
                              : 'bg-amber-950/20 border border-amber-500/30 text-amber-400 animate-pulse'
                        }`}>
                          {pipelineState.toUpperCase()}
                        </span>
                      </div>

                      {/* Step-by-Step Flow Chart */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        {/* Process Block 1 */}
                        <div className={`p-4 border transition-all ${
                          pipelineState === 'extracting'
                            ? 'border-amber-400 bg-amber-950/5 text-white'
                            : pipelineState !== 'idle'
                              ? 'border-emerald-500/30 bg-emerald-950/5 text-emerald-400/80'
                              : 'border-editorial bg-transparent text-editorial-dim/60'
                        } rounded-sm`}>
                          <span className="font-mono text-[9px] uppercase tracking-widest block mb-1">1. Excel Extract</span>
                          <p className="text-[10px] font-light leading-snug">Extract active ledger and post adjustment entries.</p>
                          {pipelineState === 'extracting' && (
                            <div className="w-full bg-neutral-900 h-1 mt-3 overflow-hidden rounded">
                              <div className="bg-amber-400 h-full animate-pulse" style={{ width: '100%' }}></div>
                            </div>
                          )}
                        </div>

                        {/* Process Block 2 */}
                        <div className={`p-4 border transition-all ${
                          pipelineState === 'transforming'
                            ? 'border-amber-400 bg-amber-950/5 text-white'
                            : (pipelineState === 'loading' || pipelineState === 'compiled')
                              ? 'border-emerald-500/30 bg-emerald-950/5 text-emerald-400/80'
                              : 'border-editorial bg-transparent text-editorial-dim/60'
                        } rounded-sm`}>
                          <span className="font-mono text-[9px] uppercase tracking-widest block mb-1">2. Power Query ETL</span>
                          <p className="text-[10px] font-light leading-snug">Apply custom transformation rules, filter outliers.</p>
                          {pipelineState === 'transforming' && (
                            <div className="w-full bg-neutral-900 h-1 mt-3 overflow-hidden rounded">
                              <div className="bg-amber-400 h-full animate-pulse" style={{ width: '100%' }}></div>
                            </div>
                          )}
                        </div>

                        {/* Process Block 3 */}
                        <div className={`p-4 border transition-all ${
                          pipelineState === 'loading'
                            ? 'border-amber-400 bg-amber-950/5 text-white'
                            : pipelineState === 'compiled'
                              ? 'border-emerald-500 bg-emerald-950/5 text-emerald-400 font-medium'
                              : 'border-editorial bg-transparent text-editorial-dim/60'
                        } rounded-sm`}>
                          <span className="font-mono text-[9px] uppercase tracking-widest block mb-1">3. Power BI Load</span>
                          <p className="text-[10px] font-light leading-snug">Formulate DAX calculations and build dash cards.</p>
                          {pipelineState === 'loading' && (
                            <div className="w-full bg-neutral-900 h-1 mt-3 overflow-hidden rounded">
                              <div className="bg-amber-400 h-full animate-pulse" style={{ width: '100%' }}></div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Trigger Call block */}
                      {pipelineState === 'idle' && (
                        <div className="text-center py-6">
                          <button
                            onClick={handleCompilePipeline}
                            className="px-6 py-3 bg-white text-black font-semibold font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all cursor-pointer inline-flex items-center gap-2"
                          >
                            Compile Reporting Pipeline
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      )}

                      {/* Display progress loader */}
                      {['extracting', 'transforming', 'loading'].includes(pipelineState) && (
                        <div className="p-4 bg-neutral-900/60 border border-editorial border-dashed font-mono text-[10px] text-amber-400 flex items-center justify-center gap-2">
                          <RefreshCw size={12} className="animate-spin" />
                          <span>PROCESSING PIPELINE STEPS ON LOCAL MACHINE SCHEMA...</span>
                        </div>
                      )}

                      {/* Success Results Modal card */}
                      {pipelineState === 'compiled' && compiledSummary && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-6 border border-emerald-500/20 bg-emerald-950/10 rounded space-y-4"
                        >
                          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                            <span className="font-serif italic text-white flex items-center gap-1.5 text-base">
                              <CheckCircle2 size={16} className="text-emerald-400" /> Compiled Executive closing scorecard
                            </span>
                            <span className="font-mono text-[9px] text-emerald-400 bg-emerald-900/10 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                              {compiledSummary.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <span className="font-mono text-[8px] text-editorial-dim uppercase block">TOTAL REVENUE (INFLOW)</span>
                              <span className="text-lg font-serif text-white font-semibold">
                                ${compiledSummary.revenue.toLocaleString()}
                              </span>
                            </div>
                            <div>
                              <span className="font-mono text-[8px] text-editorial-dim uppercase block">TOTAL EXPENSES (OUTFLOW)</span>
                              <span className="text-lg font-serif text-[#ff6b6b] font-semibold">
                                -${compiledSummary.expenses.toLocaleString()}
                              </span>
                            </div>
                            <div>
                              <span className="font-mono text-[8px] text-editorial-dim uppercase block">NET OPERATING INCOME</span>
                              <span className={`text-lg font-serif ${compiledSummary.netIncome >= 0 ? 'text-emerald-400' : 'text-red-400'} font-semibold`}>
                                ${compiledSummary.netIncome.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 bg-neutral-900/40 rounded border border-editorial/40 text-[11px] text-editorial-dim font-light leading-relaxed">
                            <strong className="text-white">Active Audit Checklist:</strong> Consolidated {compiledSummary.reconciliationPercentage}% of bank ledger accounts. Outflows and inflows mapped accurately to P&L categories. High-fidelity sheets are fully optimized for multi-view CPA reviews, with all discrepancies resolved.
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Guide Info block */}
                    <div className="flex border-t border-editorial pt-4 justify-between items-center">
                      <span className="text-[10px] font-mono text-editorial-dim">
                        Pipeline Status: {pipelineState === 'compiled' ? 'Success Compiled' : 'Waiting on Extraction'}
                      </span>
                      <a 
                        href="#accounting-suites"
                        className="text-[10px] font-mono text-white/80 hover:text-white flex items-center gap-1 leading-none border-b border-white/[0.2] pb-0.5 transition-colors"
                      >
                        Back to general ledger tools
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPONENT D: THE EXCEL COGNITIVE LAYER & WHAT-IF STRATEGY */}
              <div className="border-t border-editorial pt-16" id="excel-what-if-section">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 inline-flex bg-white/[0.03] border border-editorial text-editorial-text">
                        <TrendingUp size={16} />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                        Cognitive Modeling & Forecasting
                      </span>
                    </div>

                    <h4 className="font-serif italic text-3xl text-white leading-tight">
                      Excel, and Why Excel?
                    </h4>

                    <div className="text-xs font-light leading-relaxed text-editorial-dim space-y-4">
                      <p>
                        Standard accounting softwares look fundamentally **backward**. They excel at retroactively compiling ledgers to generate a historic "compliance report" to satisfy regulations. 
                      </p>
                      <p>
                        But knowing what happened in the past is only half the battle. **Excel allows you to use that data to not just study what has already occurred, but draft real-time "What-If" scenarios.** 
                      </p>
                      <p>
                        This is an essential step in business planning. For example, you do not just need to know why your spending went up; you want to actively model **how to reduce that spending, how to be hyper-efficient with capital, and how efficient spending can pivot the entire trajectory of your business.**
                      </p>
                      
                      <div className="p-4 border border-editorial bg-emerald-950/[0.02] rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-emerald-500/50" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-emerald-400 block mb-1">STRATEGIC PRINCIPLE</span>
                        <p className="text-[11px] text-editorial-dim font-light leading-relaxed">
                          While accounting platforms provide corporate scorecards, Excel provides an interactive workspace to model growth. Every dollar shaved from operational drag can be recycled into high-yield channels, compounding business enterprise value.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ACTIVE WHAT-IF PLANNER SANDBOX */}
                  <div className="lg:col-span-7 p-8 border border-editorial bg-neutral-950/40 rounded-sm space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-editorial">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-emerald-500 block">Interactive Trajectory Compiler</span>
                        <h5 className="font-serif italic text-lg text-white">Drafting Spending & Efficiency Trajectories</h5>
                      </div>
                    </div>

                    <p className="text-xs font-light text-editorial-dim leading-relaxed">
                      Use the sliders below to adjust your current monthly spending and simulate a proposed efficiency cut. See the live dynamic projection of saved cash over 12 months and model how it redirects capital into enterprise growth.
                    </p>

                    <div className="space-y-6">
                      {/* Control Sliders */}
                      <div className="grid sm:grid-cols-2 gap-6 p-4 border border-editorial/40 rounded-sm bg-white/[0.01]">
                        <div className="space-y-2">
                          <label className="flex justify-between items-center text-[10px] font-mono text-editorial-dim">
                            <span>CURRENT MONTHLY SPEND</span>
                            <span className="text-white font-semibold font-mono">${baselineSpending.toLocaleString()}</span>
                          </label>
                          <input
                            type="range"
                            min="5000"
                            max="50000"
                            step="1000"
                            value={baselineSpending}
                            onChange={(e) => setBaselineSpending(Number(e.target.value))}
                            className="w-full accent-white bg-neutral-800 cursor-pointer h-1.5 rounded-lg"
                          />
                          <div className="flex justify-between text-[8px] font-mono text-editorial-dim/50">
                            <span>$5,000</span>
                            <span>$50,000</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="flex justify-between items-center text-[10px] font-mono text-editorial-dim">
                            <span>SPEND OPTIMIZATION CUT</span>
                            <span className="text-emerald-400 font-semibold font-mono">{spendReductionPercent}%</span>
                          </label>
                          <input
                            type="range"
                            min="5"
                            max="60"
                            step="5"
                            value={spendReductionPercent}
                            onChange={(e) => setSpendReductionPercent(Number(e.target.value))}
                            className="w-full accent-emerald-500 bg-neutral-800 cursor-pointer h-1.5 rounded-lg"
                          />
                          <div className="flex justify-between text-[8px] font-mono text-editorial-dim/50">
                            <span>5% (Conservative)</span>
                            <span>60% (Drastic)</span>
                          </div>
                        </div>
                      </div>

                      {/* Modeling Outcome Cards */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 border border-editorial bg-neutral-900/35 rounded-sm space-y-2">
                          <span className="font-mono text-[8px] tracking-widest uppercase text-red-400 block">
                            Backward Accounting View (Compliance Only)
                          </span>
                          <p className="text-[11px] text-editorial-dim font-light leading-relaxed">
                            A historical accounting suite logs a static overhead of <strong className="text-white">${baselineSpending.toLocaleString()}</strong>. It satisfies bookkeeping requirements but treats expenses as unchangeable facts.
                          </p>
                          <div className="pt-2 border-t border-editorial/40 text-xs font-mono text-red-300">
                            Status: Static Compliance Record
                          </div>
                        </div>

                        <div className="p-4 border border-emerald-500/20 bg-emerald-950/5 rounded-sm space-y-2">
                          <span className="font-mono text-[8px] tracking-widest uppercase text-emerald-400 block">
                            Forward Excel View ("What-If" Planning)
                          </span>
                          <p className="text-[11px] text-editorial-dim font-light leading-relaxed">
                            By planning an efficiency cut, you unlock <strong className="text-white">${savedCapital.toLocaleString()}</strong> in liquid cash every month.
                          </p>
                          <div className="pt-2 border-t border-emerald-500/10 text-xs font-mono text-emerald-300 flex justify-between">
                            <span>Monthly Savings:</span>
                            <span className="font-bold">+${savedCapital.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* 12-Month Projections and Trajectory Impact */}
                      <div className="p-5 border border-dashed border-editorial/60 bg-neutral-900/10 rounded-sm space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-white font-bold">
                            12-Month Trajectory Projection
                          </span>
                          <span className="text-[9px] md:text-[10px] text-emerald-400 font-mono bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-500/20">
                            Dynamic Forecast
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-6 text-center py-2">
                          <div className="border-r border-editorial/45">
                            <span className="font-mono text-[8px] text-editorial-dim uppercase block mb-1">YEARLY REDUNDANT OVERHEAD</span>
                            <span className="text-xl font-serif text-white/50">${(baselineSpending * 12).toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="font-mono text-[8px] text-emerald-400 uppercase block mb-1">ANNUAL CAPITAL RECAPITALIZED</span>
                            <span className="text-xl font-serif text-emerald-400 font-bold">${(savedCapital * 12).toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="p-4 bg-white/[0.01] border border-editorial/40 text-[11px] text-editorial-dim font-light leading-relaxed rounded-sm space-y-2">
                          <p>
                            <strong className="text-white">The Compounding Effect:</strong> If this unlocked annual capital of <strong className="text-white">${(savedCapital * 12).toLocaleString()}</strong> is redirected toward acquiring high-lifetime-value assets or efficient customer acquisition channels (assuming a standard 3x return multiplier), this simple planning adjustment expands your enterprise value by <strong className="text-emerald-400">${((savedCapital * 12) * 3).toLocaleString()}</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* COMPONENT E: EXCEL STRATEGIC FORMULA & STRUCTURAL READINESS GUIDE */}
              <div className="border-t border-editorial pt-16 mt-16" id="excel-guide-section">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 inline-flex bg-white/[0.03] border border-editorial text-emerald-400">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#107c41]">
                      Interactive Technical Curriculum
                    </span>
                    <h3 className="font-serif italic text-3xl text-white leading-tight">
                      Excel Sectional Guide & Analytical Readiness
                    </h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  
                  {/* LEFT COLUMN: DESIGNING SOFTWARE FOR ANALYTICAL READINESS */}
                  <div className="lg:col-span-5 space-y-8">
                    
                    {/* Core Introduction */}
                    <div className="space-y-4">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#107c41] block">
                        Architectural Foundations
                      </span>
                      <h4 className="font-serif italic text-xl text-white">
                        Designing Software for Analytical Readiness
                      </h4>
                      <p className="text-xs font-light text-editorial-dim leading-relaxed">
                        To unlock the power of Excel modeling, Power Query, or Power BI, data must be structured for machine consumption rather than human aesthetic layout preferences. Preparing analytical software means enforcing two strict disciplines:
                      </p>
                    </div>

                    {/* Tabular Data Normalization */}
                    <div className="p-6 border border-editorial bg-neutral-950/20 space-y-4 rounded-sm">
                      <div className="flex items-center gap-2 text-white font-serif italic text-base">
                        <Database size={14} className="text-[#107c41]" />
                        1. Tabular Data Normalization
                      </div>
                      <p className="text-[11px] text-editorial-dim font-light leading-relaxed">
                        Avoid merged cells, blank sub-header offset rows, and storing dynamic data attributes across column names (e.g., separate columns for "Jan-Sales", "Feb-Sales"). Normalized data consists of a <strong>flat tabular structure</strong> where columns represent strict attributes and rows hold atomic observations.
                      </p>

                      {/* Interactive Tabular Layout Demo */}
                      <div className="space-y-3 pt-2">
                        <span className="font-mono text-[8px] text-editorial-dim uppercase block">Tabular Design Preview:</span>
                        
                        <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
                          {/* BAD VIEW */}
                          <div className="p-3 border border-red-500/20 bg-red-950/5 text-red-300 rounded">
                            <span className="text-red-400 font-bold block mb-1">❌ Visual Report (Not Queryable)</span>
                            <div className="space-y-1 text-[8px] leading-tight">
                              <div><strong>A1: "Software Category"</strong> [Merged]</div>
                              <div className="text-red-300/60 pl-2">─ Row 2: "" [Blank divider]</div>
                              <div><strong>B3: "Jan-Spend"</strong> | <strong>C3: "Feb-Spend"</strong></div>
                              <div className="text-red-300/80">"Slack" | $120 | $150</div>
                            </div>
                          </div>

                          {/* GOOD VIEW */}
                          <div className="p-3 border border-emerald-500/20 bg-emerald-950/5 text-emerald-300 rounded">
                            <span className="text-emerald-400 font-bold block mb-1">✅ Normalized Flat Table</span>
                            <div className="space-y-1 text-[8px] leading-tight">
                              <div className="text-white font-bold">[Category] | [Date] | [Amount]</div>
                              <div className="h-[1px] bg-emerald-500/20 my-1" />
                              <div>"Software" | 2026-01-01 | $120</div>
                              <div>"Software" | 2026-02-01 | $150</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-[10px] text-editorial-dim italic leading-snug">
                          Converting "Visual-first Pivot Shapes" into normalized flat tables ensures direct <strong>XLOOKUP</strong> and <strong>Power Query ETL</strong> compatibility.
                        </p>
                      </div>
                    </div>

                    {/* Type Casting Integrity */}
                    <div className="p-6 border border-editorial bg-neutral-950/20 space-y-4 rounded-sm">
                      <div className="flex items-center gap-2 text-white font-serif italic text-base">
                        <Layers size={14} className="text-[#107c41]" />
                        2. Type Casting Integrity
                      </div>
                      <p className="text-[11px] text-editorial-dim font-light leading-relaxed">
                        Data storage must maintain pristine datatype boundaries. Dates stored as string descriptions (like <em>"May 22, 2026"</em>) instead of true serial dates, or numbers containing currency prefixes inside text blocks (like <em>"$1,450 text"</em>) break lookups and aggregations. Every column must hold a single type: strictly Numeric, strictly Serial Date, or strictly Text.
                      </p>

                      <div className="p-4 border border-editorial bg-white/[0.01] rounded">
                        <span className="font-mono text-[8px] text-editorial-dim uppercase block mb-2">Live Type Casting Validator:</span>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-white">Text-Input Block:</span>
                            <span className="text-editorial-dim">"48250.90"</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-center text-[9px] font-mono">
                            <div className="p-2 border border-red-500/20 bg-red-950/5">
                              <span className="text-red-400 block font-bold">Raw Text String</span>
                              <div className="text-white text-xs mt-1">"{valueInput}"</div>
                              <span className="text-red-300 text-[8px] block mt-1">SUM() outcome: <strong>$0</strong></span>
                            </div>
                            <div className="p-2 border border-emerald-500/20 bg-emerald-950/5">
                              <span className="text-emerald-400 block font-bold">VALUE() Cast Float</span>
                              <div className="text-white text-xs mt-1">
                                {isNaN(parseFloat(valueInput)) ? 'Error' : parseFloat(valueInput).toLocaleString()}
                              </div>
                              <span className="text-emerald-300 text-[8px] block mt-1">SUM() outcome: <strong>${isNaN(parseFloat(valueInput)) ? '0' : parseFloat(valueInput).toLocaleString()}</strong></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: INTERACTIVE FORMULA MASTERCLASS & SIMULATOR */}
                  <div className="lg:col-span-7 p-8 border border-editorial bg-neutral-950/40 rounded-sm space-y-6">
                    <div className="pb-4 border-b border-editorial">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#107c41] block">Tactile Formula Laboratory</span>
                      <h5 className="font-serif italic text-xl text-white">Interactive Formula Sandbox</h5>
                    </div>

                    <p className="text-xs font-light text-editorial-dim leading-relaxed">
                      Select a category to inspect the definitive modern Excel formulas. Leverage the interactive sandboxes to modify local input streams and witness true Excel-equivalent compiler evaluations.
                    </p>

                    {/* Category Navigation Tabs */}
                    <div className="grid grid-cols-4 border border-editorial/60 rounded overflow-hidden">
                      {[
                        { id: 'cleaning', label: '1. Clean' },
                        { id: 'mapping', label: '2. Maps' },
                        { id: 'finance', label: '3. Math' },
                        { id: 'formatting', label: '4. Format' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setSelectedFormulaTab(tab.id as any);
                            // Auto reset active sub formula
                            if (tab.id === 'cleaning') setSelectedFormulaId('trim');
                            if (tab.id === 'mapping') setSelectedFormulaId('xlookup');
                            if (tab.id === 'finance') setSelectedFormulaId('sumifs');
                            if (tab.id === 'formatting') setSelectedFormulaId('numberformat');
                          }}
                          className={`py-3 text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                            selectedFormulaTab === tab.id
                              ? 'bg-white text-black font-semibold'
                              : 'bg-neutral-900 border-r border-[#333]/40 text-editorial-dim hover:text-white'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Sub-Formula Navigation buttons */}
                    <div className="flex gap-2 flex-wrap pb-2">
                      {selectedFormulaTab === 'cleaning' && (
                        <>
                          <button
                            onClick={() => setSelectedFormulaId('trim')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'trim' ? 'border-[#107c41] bg-[#107c41]/10 text-[#107c41]' : 'border-editorial text-editorial-dim'}`}
                          >
                            TRIM()
                          </button>
                          <button
                            onClick={() => setSelectedFormulaId('value')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'value' ? 'border-[#107c41] bg-[#107c41]/10 text-[#107c41]' : 'border-editorial text-editorial-dim'}`}
                          >
                            VALUE()
                          </button>
                          <button
                            onClick={() => setSelectedFormulaId('textbefore')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'textbefore' ? 'border-[#107c41] bg-[#107c41]/10 text-[#107c41]' : 'border-editorial text-editorial-dim'}`}
                          >
                            TEXTBEFORE / TEXTAFTER
                          </button>
                        </>
                      )}

                      {selectedFormulaTab === 'mapping' && (
                        <>
                          <button
                            onClick={() => setSelectedFormulaId('xlookup')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'xlookup' ? 'border-[#156e9c] bg-[#156e9c]/10 text-[#2ba0df]' : 'border-editorial text-editorial-dim'}`}
                          >
                            XLOOKUP()
                          </button>
                          <button
                            onClick={() => setSelectedFormulaId('indexmatch')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'indexmatch' ? 'border-[#156e9c] bg-[#156e9c]/10 text-[#2ba0df]' : 'border-editorial text-editorial-dim'}`}
                          >
                            INDEX & MATCH
                          </button>
                        </>
                      )}

                      {selectedFormulaTab === 'finance' && (
                        <>
                          <button
                            onClick={() => setSelectedFormulaId('sumifs')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'sumifs' ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-editorial text-editorial-dim'}`}
                          >
                            SUMIFS()
                          </button>
                          <button
                            onClick={() => setSelectedFormulaId('edate')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'edate' ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-editorial text-editorial-dim'}`}
                          >
                            EDATE()
                          </button>
                        </>
                      )}

                      {selectedFormulaTab === 'formatting' && (
                        <>
                          <button
                            onClick={() => setSelectedFormulaId('numberformat')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'numberformat' ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-editorial text-editorial-dim'}`}
                          >
                            Custom Number Formatting
                          </button>
                          <button
                            onClick={() => setSelectedFormulaId('conditional')}
                            className={`px-3 py-1.5 font-mono text-[10px] border cursor-pointer transition-all ${selectedFormulaId === 'conditional' ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-editorial text-editorial-dim'}`}
                          >
                            Conditional Formula Formatting
                          </button>
                        </>
                      )}
                    </div>

                    {/* ACTIVE FORMULA SIMULATOR LAYOUT WORKSPACE */}
                    <div className="p-6 border border-editorial/60 bg-white/[0.01] rounded space-y-4 relative overflow-hidden">
                      
                      {/* 1. TRIM SCREEN */}
                      {selectedFormulaId === 'trim' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-white">TRIM(text)</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Strips away problematic trailing/leading spaces and condenses inner duplicates down to single space dividers. Prevent errors during data matching routines.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-emerald-950 border border-emerald-500/20 text-[#107c41]">DATA CLEANING</span>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 space-y-3">
                            <label className="block text-[10px] font-mono text-editorial-dim">
                              1. INPUT STRING BLOCK (TRY ADDING DOUBLE SPACES):
                            </label>
                            <input
                              type="text"
                              value={trimInput}
                              onChange={(e) => setTrimInput(e.target.value)}
                              className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2.5 text-white focus:border-white focus:outline-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-editorial-dim block">LIVE EXCEL COMPILATION RUN:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                              <div className="p-3 border border-red-500/20 bg-red-950/5">
                                <span className="text-red-400 text-[8px] block mb-1">RAW DATA (LEN: {trimInput.length}):</span>
                                <span className="text-white block truncate">"{trimInput}"</span>
                              </div>
                              <div className="p-3 border border-emerald-500/20 bg-emerald-500/5">
                                <span className="text-emerald-400 text-[8px] block mb-1">
                                  =TRIM(A1) (LEN: {trimInput.trim().replace(/\s+/g, ' ').length}):
                                </span>
                                <span className="text-white block font-bold truncate">
                                  "{trimInput.trim().replace(/\s+/g, ' ')}"
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. VALUE SCREEN */}
                      {selectedFormulaId === 'value' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-white">VALUE(text)</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Converts textual digits extracted from API or CSV files back into clean operational numbers. Type Casting Integrity is necessary to run calculations.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-emerald-950 border border-emerald-500/20 text-[#107c41]">DATA CLEANING</span>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 space-y-3">
                            <label className="block text-[10px] font-mono text-editorial-dim">
                              1. STRING TO CONVERT (SIMULATING TEXT NUMERIC DIGITS):
                            </label>
                            <input
                              type="text"
                              value={valueInput}
                              onChange={(e) => setValueInput(e.target.value)}
                              className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2.5 text-white focus:border-white focus:outline-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-editorial-dim block">LIVE EXCEL COMPILATION RUN:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                              <div className="p-3 border border-editorial bg-transparent">
                                <span className="text-editorial-dim text-[8px] block mb-1">EXCEL CELL VALUE:</span>
                                <span className="text-white block">Value: "{valueInput}" [Type: Text]</span>
                              </div>
                              <div className="p-3 border border-emerald-500/20 bg-emerald-500/5">
                                <span className="text-emerald-400 text-[8px] block mb-1">=VALUE(A1) CONVERSION OUTCOME</span>
                                <span className="text-emerald-400 block font-bold">
                                  {isNaN(parseFloat(valueInput)) ? (
                                    <span className="text-red-400 font-bold">Error: #VALUE! (Invalid Digit Input)</span>
                                  ) : (
                                    <>
                                      Value: {parseFloat(valueInput)} [Type: Numeric Number]
                                    </>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. TEXTBEFORE / TEXTAFTER SCREEN */}
                      {selectedFormulaId === 'textbefore' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-white">TEXTBEFORE(text, delimiter) / TEXTAFTER(text, delimiter)</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Native Excel parsing. Extracts structural tags, general codes, or system ids out of compound strings on the fly without complex string slices.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-emerald-950 border border-emerald-500/20 text-[#107c41]">DATA CLEANING</span>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4 p-4 border border-editorial bg-neutral-950/20">
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-editorial-dim">
                                COMPOUND STRING INPUT:
                              </label>
                              <input
                                type="text"
                                value={textBeforeInput}
                                onChange={(e) => setTextBeforeInput(e.target.value)}
                                className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:border-white focus:outline-none"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-editorial-dim">
                                DELIMITER KEY:
                              </label>
                              <input
                                type="text"
                                value={textBeforeDelim}
                                onChange={(e) => setTextBeforeDelim(e.target.value)}
                                className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:border-white focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-editorial-dim block">LIVE EXCEL COMPILATION RUN:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                              <div className="p-3 border border-emerald-500/20 bg-emerald-500/5">
                                <span className="text-emerald-400 text-[8px] block mb-1">=TEXTBEFORE(A1, "{textBeforeDelim}"):</span>
                                <span className="text-white block font-bold truncate">
                                  {evalTextBefore(textBeforeInput, textBeforeDelim)}
                                </span>
                              </div>
                              <div className="p-3 border border-emerald-500/20 bg-emerald-500/5">
                                <span className="text-emerald-400 text-[8px] block mb-1">=TEXTAFTER(A1, "{textBeforeDelim}"):</span>
                                <span className="text-white block font-bold truncate">
                                  {evalTextAfter(textBeforeInput, textBeforeDelim)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. XLOOKUP SCREEN */}
                      {selectedFormulaId === 'xlookup' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-[#2ba0df]">XLOOKUP(lookup, lookup_vector, return_vector, [if_not_found])</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Standard robust matching syntax. Performs faster matching, defaults to elegant exact matchmaking, and easily resolves from leftward column vectors without breaks.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-blue-950 border border-blue-500/20 text-[#2ba0df]">DYNAMIC MAPPING</span>
                          </div>

                          {/* Reference Table display */}
                          <div className="p-3 border border-editorial bg-neutral-950/40 space-y-2">
                            <span className="font-mono text-[8px] text-editorial-dim uppercase block">EXCEL REFERENCE GRID (100% LOCAL DATA):</span>
                            <table className="w-full text-[9px] font-mono text-editorial-dim text-left">
                              <thead>
                                <tr className="border-b border-editorial text-white">
                                  <th className="pb-1">[ID Column]</th>
                                  <th className="pb-1">[Description]</th>
                                  <th className="pb-1">[Amount Row]</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mockLookupTable.map((row) => (
                                  <tr key={row.id} className={xlookupSearchId === row.id ? 'bg-blue-950/20 text-white font-bold' : ''}>
                                    <td className="py-1">{row.id}</td>
                                    <td>{row.desc}</td>
                                    <td className={row.amt < 0 ? 'text-red-400' : 'text-emerald-400'}>
                                      ${row.amt.toLocaleString()}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 block space-y-3">
                            <label className="block text-[10px] font-mono text-editorial-dim">
                              SELECT SEARCH LOOKUP VALUE:
                            </label>
                            <select
                              value={xlookupSearchId}
                              onChange={(e) => setXlookupSearchId(e.target.value)}
                              className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:border-white focus:outline-none"
                            >
                              <option value="TX-101">TX-101</option>
                              <option value="TX-102">TX-102</option>
                              <option value="TX-103">TX-103</option>
                              <option value="TX-104">TX-104</option>
                              <option value="TX-INVALID">TX-INVALID (Simulate Error Case)</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-editorial-dim block font-bold">EXCEL CALULATION COMPILER EVALUATION:</span>
                            <div className="p-4 border border-blue-500/20 bg-blue-950/5 text-xs font-mono space-y-2">
                              <span className="text-[#2ba0df] text-[9px] block mb-1">
                                =XLOOKUP("{xlookupSearchId}", ID_Column, Description_Column, "TX-NOT-FOUND")
                              </span>
                              <div className="flex justify-between items-center text-white border-t border-editorial/40 pt-2 text-sm mt-1">
                                <span>Output Record Retrieved:</span>
                                <strong className="text-[#2ba0df]">
                                  {mockLookupTable.find(r => r.id === xlookupSearchId)?.desc || '"TX-NOT-FOUND"'}
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 5. INDEX & MATCH SCREEN */}
                      {selectedFormulaId === 'indexmatch' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-[#2ba0df]">INDEX(array, MATCH(lookup_val, lookup_vector, 0))</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Legendary classic. Combines coordinate index slicing with offset match vectors, supporting advanced bidirectional vertical & horizontal schema lookups.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-blue-950 border border-blue-500/20 text-[#2ba0df]">DYNAMIC MAPPING</span>
                          </div>

                          {/* Reference Table display */}
                          <div className="p-3 border border-editorial bg-neutral-950/40 space-y-2">
                            <span className="font-mono text-[8px] text-editorial-dim uppercase block">EXCEL CELL RANGES:</span>
                            <table className="w-full text-[9px] font-mono text-editorial-dim text-left">
                              <thead>
                                <tr className="border-b border-editorial text-white">
                                  <th className="pb-1">[Line Index]</th>
                                  <th className="pb-1">[ID range]</th>
                                  <th className="pb-1">[Category range]</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mockLookupTable.map((row, i) => (
                                  <tr key={row.id} className={indexMatchSearchId === row.id ? 'bg-blue-950/20 text-white font-bold' : ''}>
                                    <td className="py-1">Row {i+1}</td>
                                    <td>{row.id}</td>
                                    <td className="text-slate-300">{row.cat}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 block space-y-3">
                            <label className="block text-[10px] font-mono text-editorial-dim">
                              SELECT SEARCH ARBITRARY ID FOR MATCH:
                            </label>
                            <select
                              value={indexMatchSearchId}
                              onChange={(e) => setIndexMatchSearchId(e.target.value)}
                              className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:border-white focus:outline-none"
                            >
                              <option value="TX-101">TX-101</option>
                              <option value="TX-102">TX-102</option>
                              <option value="TX-103">TX-103</option>
                              <option value="TX-104">TX-104</option>
                              <option value="TX-INVALID">TX-INVALID (Will throw N/A error)</option>
                            </select>
                          </div>

                          <div className="space-y-4">
                            <span className="font-mono text-[9px] text-editorial-dim block">COMPUTED EXCEL EVALUATION:</span>
                            <div className="p-4 border border-blue-500/20 bg-blue-950/5 text-[11px] font-mono space-y-3">
                              
                              <div className="pb-2 border-b border-editorial/40">
                                <span className="text-[#2ba0df] text-[9px] block mb-1">
                                  Step 1: =MATCH("{indexMatchSearchId}", ID_Range, 0)
                                </span>
                                <div className="flex justify-between items-center text-white mt-0.5">
                                  <span>Lookup Row Match Index:</span>
                                  <strong className="text-amber-400">
                                    {mockLookupTable.findIndex(r => r.id === indexMatchSearchId) !== -1 
                                      ? `Row ${mockLookupTable.findIndex(r => r.id === indexMatchSearchId) + 1} found` 
                                      : '#N/A (Match Error)'}
                                  </strong>
                                </div>
                              </div>

                              <div>
                                <span className="text-[#2ba0df] text-[9px] block mb-1">
                                  Step 2: =INDEX(Category_Range, Step_1_Index)
                                </span>
                                <div className="flex justify-between items-center text-white mt-0.5">
                                  <span>Retrieved Category Attribute:</span>
                                  <strong className="text-emerald-400">
                                    {mockLookupTable.find(r => r.id === indexMatchSearchId)?.cat || '#N/A'}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 6. SUMIFS SCREEN */}
                      {selectedFormulaId === 'sumifs' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-amber-400">SUMIFS(sum_range, criteria_range1, criteria1, ...)</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Aggregates cash ledger flows dynamically. Ideal for calculating segmented expenses or computing sales runs within strict target month boundaries on flat general tables.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-amber-950 border border-amber-500/20 text-amber-400">FINANCIAL MATHEMATICS</span>
                          </div>

                          {/* Reference Table */}
                          <div className="p-3 border border-editorial bg-neutral-950/40 space-y-1">
                            <span className="font-mono text-[8px] text-editorial-dim uppercase block">TRANSACTION JOURNAL GRID:</span>
                            <table className="w-full text-[9px] font-mono text-editorial-dim text-left">
                              <thead>
                                <tr className="border-b border-editorial text-white">
                                  <th className="pb-1">[Category]</th>
                                  <th className="pb-1">[Vendor Name]</th>
                                  <th className="pb-1">[Operating Expense]</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mockSumifsTable.map((row, i) => (
                                  <tr key={i} className={sumifsCategory === row.category ? 'bg-amber-950/10 text-white font-medium' : ''}>
                                    <td className="py-0.5">{row.category}</td>
                                    <td>{row.vendor}</td>
                                    <td>${row.amount.toLocaleString()}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 block space-y-3">
                            <label className="block text-[10px] font-mono text-editorial-dim">
                              SELECT TARGET CATEGORY TO MATCH EXCEL CALCULATOR:
                            </label>
                            <select
                              value={sumifsCategory}
                              onChange={(e) => setSumifsCategory(e.target.value)}
                              className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:border-white focus:outline-none"
                            >
                              <option value="Software">Software</option>
                              <option value="Marketing">Marketing</option>
                              <option value="Facilities">Facilities</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-editorial-dim block">COMPUTED EXCEL EVALUATION:</span>
                            <div className="p-4 border border-amber-500/20 bg-amber-950/5 text-xs font-mono space-y-2">
                              <span className="text-amber-400 text-[9px] block mb-1">
                                =SUMIFS(Expense_Amount_Range, Category_Attribute_Range, "{sumifsCategory}")
                              </span>
                              <div className="flex justify-between items-center text-white border-t border-editorial/40 pt-2 text-sm mt-1">
                                <span>Summed Ledger Total Outcome:</span>
                                <strong className="text-amber-400 text-base font-bold">
                                  ${mockSumifsTable
                                    .filter(item => item.category === sumifsCategory)
                                    .reduce((acc, curr) => acc + curr.amount, 0)
                                    .toLocaleString()}
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 7. EDATE SCREEN */}
                      {selectedFormulaId === 'edate' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-amber-400">EDATE(start_date, months)</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Rolls dates perfectly forward or backward by strict dynamic monthly intervals. Crucial for automated schedule forecasts, contract closures, and audit runway lines.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-amber-950 border border-amber-500/20 text-amber-400">FINANCIAL MATHEMATICS</span>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4 p-4 border border-editorial bg-neutral-950/20">
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-editorial-dim">
                                START SYSTEM DATE (ISO):
                              </label>
                              <input
                                type="date"
                                value={edateStartDate}
                                onChange={(e) => setEdateStartDate(e.target.value)}
                                className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:outline-none"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-editorial-dim">
                                MONTHS STEP MODIFIER:
                              </label>
                              <input
                                type="number"
                                min="-24"
                                max="24"
                                value={edateMonths}
                                onChange={(e) => setEdateMonths(Number(e.target.value))}
                                className="w-full text-xs font-mono bg-neutral-900 border border-editorial p-2 text-white focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-editorial-dim block">COMPUTED EXCEL EVALUATION:</span>
                            <div className="p-4 border border-amber-500/20 bg-amber-950/5 text-xs font-mono">
                              <span className="text-amber-400 text-[9px] block mb-1">
                                =EDATE("{edateStartDate}", {edateMonths})
                              </span>
                              <div className="flex justify-between items-center text-white border-t border-editorial/40 pt-2 text-sm mt-1">
                                <span>Adjusted Serial Date Output:</span>
                                <strong className="text-amber-400 text-sm font-bold">
                                  {evalEdate(edateStartDate, edateMonths)}
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 8. NUMBER FORMAT SCREEN */}
                      {selectedFormulaId === 'numberformat' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-purple-400">Custom Number Formatting</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Defines precise, human-readable monetary styles in static cells. Standard format handles positive, negative, and zero valuations with independent accounting spacing rules.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-purple-950 border border-purple-500/20 text-purple-400">PROFESSIONAL STYLING</span>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 space-y-4">
                            <div className="flex justify-between items-center">
                              <label className="text-[10px] font-mono text-editorial-dim">
                                SLIDER INPUT CAPITAL FLOWS:
                              </label>
                              <span className="text-white font-mono text-xs font-bold">${numFormatValue.toLocaleString()}</span>
                            </div>
                            <input
                              type="range"
                              min="-30000"
                              max="30000"
                              step="500"
                              value={numFormatValue}
                              onChange={(e) => setNumFormatValue(Number(e.target.value))}
                              className="w-full accent-purple-500 bg-neutral-800 cursor-pointer h-1.5 rounded-lg"
                            />
                            <div className="flex justify-between text-[8px] font-mono text-editorial-dim">
                              <span>-$30,000 (Overhead Outflow)</span>
                              <span>$0 (Zero Cash)</span>
                              <span>+$30,000 (Capital Inflow)</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <span className="font-mono text-[9px] text-[#2ba0df] uppercase block">Excel Format Token Decoder:</span>
                            <div className="p-4 border border-purple-500/20 bg-purple-950/5 text-[11px] font-mono space-y-3">
                              <div className="pb-1">
                                <span className="text-purple-400 block mb-1">Standard Accounting Pattern Token:</span>
                                <span className="text-white font-bold block bg-neutral-900 border border-editorial p-2 rounded text-[10px] overflow-x-auto whitespace-nowrap">
                                  `_($* #,##0.00_);_($* (#,##0.00);_($* "-"_);_(@_)`
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2 text-center text-[10px] mt-2 pt-2 border-t border-editorial/40">
                                <div>
                                  <span className="text-slate-400 block mb-1">Section 1 (Positive)</span>
                                  <span className="text-emerald-400 font-bold">$ 14,500.50</span>
                                </div>
                                <div className="border-x border-editorial/45">
                                  <span className="text-slate-400 block mb-1">Section 2 (Negative)</span>
                                  <span className="text-red-400 font-bold">($ 14,500.50)</span>
                                </div>
                                <div>
                                  <span className="text-slate-400 block mb-1">Section 3 (Zero)</span>
                                  <span className="text-amber-400 font-bold">$   -   </span>
                                </div>
                              </div>

                              <div className="h-[1px] bg-editorial/40 my-2" />

                              <div className="flex justify-between items-center text-xs mt-1">
                                <span className="text-white text-[10px]">Rendered Account View:</span>
                                <strong className={`text-sm ${numFormatValue < 0 ? 'text-red-400' : numFormatValue === 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                                  {formatCustomNumber(numFormatValue)}
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 9. CONDITIONAL FORMATTING */}
                      {selectedFormulaId === 'conditional' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-mono text-xs text-purple-400">Conditional Formatting via Formulas</h6>
                              <p className="text-[11px] text-editorial-dim mt-1">
                                Rules to evaluate rows and assign visual warnings. Flags budget leaks or low reconciliation completion systematically according to specific logic boundaries.
                              </p>
                            </div>
                            <span className="font-mono text-[8px] uppercase px-1.5 bg-purple-950 border border-purple-500/20 text-purple-400">PROFESSIONAL STYLING</span>
                          </div>

                          <div className="p-4 border border-editorial bg-neutral-950/20 space-y-4">
                            <div className="flex justify-between items-center">
                              <label className="text-[10px] font-mono text-editorial-dim">
                                SIMULATE RECONCILIATION MATCH-RATE STATUS:
                              </label>
                              <span className="text-white font-mono text-xs font-bold">{conditionalValue}%</span>
                            </div>
                            <input
                              type="range"
                              min="10"
                              max="100"
                              step="5"
                              value={conditionalValue}
                              onChange={(e) => setConditionalValue(Number(e.target.value))}
                              className="w-full accent-purple-500 bg-neutral-800 cursor-pointer h-1.5 rounded-lg"
                            />
                            <div className="flex justify-between text-[8px] font-mono text-editorial-dim">
                              <span>10% (Alert Status)</span>
                              <span>60% (Medium Close)</span>
                              <span>100% (Fully Reconciled)</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-[#2ba0df] uppercase block">Rule applied: `=AND(Rate{'<'}=80%, Status="Pending")`</span>
                            <div className="p-4 border border-purple-500/20 bg-purple-950/5 text-xs font-mono space-y-3">
                              <span className="text-purple-400 text-[9px] block">PREVIEW OF REPORT BLOCK ROW:</span>

                              <div className={`p-4 border rounded transition-colors duration-300 ${
                                conditionalValue < 40 
                                  ? 'bg-red-950/30 border-red-500/40 text-red-200' 
                                  : conditionalValue < 80 
                                    ? 'bg-amber-950/30 border-amber-500/40 text-amber-200' 
                                    : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                              }`}>
                                <div className="flex justify-between items-center">
                                  <div>
                                    <span className="font-serif italic text-white text-base">CPA Audit Closed - Subledger 12</span>
                                    <p className="text-[10px] text-editorial-dim/80 mt-1 font-sans leading-tight">
                                      Match rate: <strong className="text-white">{conditionalValue}%</strong>. Automatic formula highlighting rules active.
                                    </p>
                                  </div>
                                  <span className={`px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider rounded uppercase ${
                                    conditionalValue < 40 
                                      ? 'text-red-400 bg-red-900/20' 
                                      : conditionalValue < 80 
                                        ? 'text-amber-400 bg-amber-900/20' 
                                        : 'text-emerald-400 bg-emerald-900/20'
                                  }`}>
                                    {conditionalValue < 40 ? 'CRITICAL LEAK ALERT' : conditionalValue < 80 ? 'ATTENTION REQUIRED' : 'COMPLIANCE TARGET ACHIEVED'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Footer / Shortcut Navigation */}
                    <div className="flex border-t border-editorial/40 pt-4 justify-between items-center text-[10px] font-mono text-editorial-dim">
                      <span>Interactive Sandbox active. 100% Client-Side.</span>
                      <a 
                        href="#final-statements-section" 
                        className="text-white/80 hover:text-white border-b border-white/[0.2] pb-0.5 leading-none transition-colors"
                      >
                        Back to general statement compiling
                      </a>
                    </div>

                  </div>

                </div>
              </div>

              {/* COMPONENT F: POWER BI - VISUAL STORYTELLING & PATTERN COGNITION */}
              <div className="border-t border-editorial pt-16 mt-16" id="powerbi-section">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 inline-flex bg-white/[0.03] border border-editorial text-amber-400">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-amber-500">
                      Pattern Recognition & Analytical Storytelling
                    </span>
                    <h3 className="font-serif italic text-3xl text-white leading-tight">
                      Power BI - From Grids to Instinctive Visual Insights
                    </h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  {/* LEFT COLUMN: THE DRY NUMBERS & DATA CONTROLS */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-amber-500 block">
                        Tabular Raw Origin
                      </span>
                      <h4 className="font-serif italic text-xl text-white">
                        The Sheet of Numbers
                      </h4>
                      <p className="text-xs font-light text-editorial-dim leading-relaxed">
                        Formulas in Excel solve specific quantitative calculations. But to synthesize strategy-level insights, humans must recognize <strong>patterns, variances, and correlations</strong>. Tweak the raw operational figures below to witness how dry tabular rows compile in real-time versus how they translate visually.
                      </p>
                    </div>

                    {/* Dynamic Controllers */}
                    <div className="p-6 border border-editorial bg-neutral-950/20 space-y-5 rounded-sm">
                      <span className="font-mono text-[9px] text-amber-400 uppercase tracking-wider block border-b border-editorial pb-2">
                        Modify Database Ledger Rows:
                      </span>

                      {/* Software Spend Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-white">Row 1: Software Subscription Overhead</span>
                          <span className="text-amber-400 font-bold">${pbiSoftwareSpend.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="30000"
                          step="1000"
                          value={pbiSoftwareSpend}
                          onChange={(e) => setPbiSoftwareSpend(Number(e.target.value))}
                          className="w-full accent-amber-500 bg-neutral-800 cursor-pointer h-1.5 rounded text-amber-500"
                        />
                      </div>

                      {/* Marketing Spend Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-white">Row 2: Marketing & Ad Campaigns</span>
                          <span className="text-amber-400 font-bold">${pbiMarketingSpend.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="30000"
                          step="1000"
                          value={pbiMarketingSpend}
                          onChange={(e) => setPbiMarketingSpend(Number(e.target.value))}
                          className="w-full accent-amber-500 bg-neutral-800 cursor-pointer h-1.5 rounded text-amber-500"
                        />
                      </div>

                      {/* Facilities Spend Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-white">Row 3: Office Facilities Lease</span>
                          <span className="text-amber-400 font-bold">${pbiFacilitiesSpend.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="2000"
                          max="15000"
                          step="550"
                          value={pbiFacilitiesSpend}
                          onChange={(e) => setPbiFacilitiesSpend(Number(e.target.value))}
                          className="w-full accent-amber-500 bg-neutral-800 cursor-pointer h-1.5 rounded text-amber-500"
                        />
                      </div>

                      {/* Compliance Rate Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-white">Audit Reconciliation Fidelity</span>
                          <span className={`font-bold ${pbiComplianceRate < 85 ? 'text-red-400' : 'text-emerald-400'}`}>{pbiComplianceRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          step="1"
                          value={pbiComplianceRate}
                          onChange={(e) => setPbiComplianceRate(Number(e.target.value))}
                          className="w-full accent-amber-500 bg-neutral-800 cursor-pointer h-1.5 rounded text-amber-500"
                        />
                      </div>
                    </div>

                    {/* The Raw Sheet Table View */}
                    <div className="p-4 border border-editorial bg-neutral-950/40 rounded-sm space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[8px] text-editorial-dim uppercase block">Ledger_Extract_Source.csv</span>
                        <span className="font-mono text-[8px] text-zinc-500">Excel Rows: 4</span>
                      </div>
                      
                      <table className="w-full text-[10px] font-mono text-editorial-dim">
                        <thead>
                          <tr className="border-b border-editorial text-white text-left">
                            <th className="pb-1 text-[9px] font-mono">Row_ID</th>
                            <th className="pb-1 text-[9px] font-mono">Cost_Category</th>
                            <th className="pb-1 text-[9px] font-mono">Fidelity_Cap</th>
                            <th className="pb-1 text-[9px] font-mono text-right">Value_USD</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-editorial/20 hover:bg-white/[0.01]">
                            <td className="py-1">ROW_001</td>
                            <td className="text-slate-300">Software</td>
                            <td>Acc-High</td>
                            <td className="text-right text-white font-bold">${pbiSoftwareSpend.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b border-editorial/20 hover:bg-white/[0.01]">
                            <td className="py-1">ROW_002</td>
                            <td className="text-slate-300">Marketing</td>
                            <td>Acc-High</td>
                            <td className="text-right text-white font-bold">${pbiMarketingSpend.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b border-editorial/20 hover:bg-white/[0.01]">
                            <td className="py-1">ROW_003</td>
                            <td className="text-slate-300">Facilities</td>
                            <td>Acc-Med</td>
                            <td className="text-right text-white font-bold">${pbiFacilitiesSpend.toLocaleString()}</td>
                          </tr>
                          <tr className="hover:bg-white/[0.01]">
                            <td className="py-1">ROW_004</td>
                            <td className="text-slate-300">Audit_Rate</td>
                            <td>{pbiComplianceRate}%</td>
                            <td className="text-right text-teal-400">---</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-[10px] text-editorial-dim italic leading-snug">
                        To a raw database or simple spreadsheet sheet, these values are just disjointed entries. There is no instant sensory response mapping spatial ratios or identifying organizational vulnerabilities.
                      </p>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: THE POWER BI CANVAS AND PATTERN RECOGNITION */}
                  <div className="lg:col-span-7 p-8 border border-editorial bg-neutral-950/40 rounded-sm space-y-6">
                    <div className="pb-4 border-b border-editorial flex justify-between items-center flex-wrap gap-2">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-amber-500 block">Analytical Storyteller Canvas</span>
                        <h5 className="font-serif italic text-xl text-white">Power BI Dashboard Mock</h5>
                      </div>
                      <span className="font-mono text-[9px] p-1 border border-amber-500/30 text-amber-500 bg-amber-500/5 uppercase tracking-widest rounded-sm">
                        Live Dashboard Render
                      </span>
                    </div>

                    <p className="text-xs font-light text-editorial-dim leading-relaxed">
                      Power BI synthesizes lists of numbers into instantaneous visual insights. Click on the visual pattern facets below to see the dry numbers schema convert into spatial, interactive narratives.
                    </p>

                    {/* Pattern Navigator Tabs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 border border-editorial/60 rounded overflow-hidden divide-y sm:divide-y-0 divide-x divide-editorial/40">
                      {[
                        { id: 'all', label: '1. Executive Story' },
                        { id: 'categories', label: '2. Proportional Share' },
                        { id: 'trends', label: '3. Risk Indicators' },
                        { id: 'alerts', label: '4. Dynamic Anomalies' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setPbiActiveMetric(tab.id as any)}
                          className={`py-2.5 px-1 text-[9px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                            pbiActiveMetric === tab.id
                              ? 'bg-amber-500 text-black font-semibold'
                              : 'bg-neutral-900 text-editorial-dim hover:text-white_80'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="p-6 border border-amber-500/10 bg-amber-500/[0.01] rounded-sm min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Dynamic Canvas Area */}
                      <div className="space-y-6">
                        
                        {/* TAB 1: EXECUTIVE STORY (KPI SCORECARD) */}
                        {pbiActiveMetric === 'all' && (
                          <div className="space-y-4 animate-fadeIn">
                            <span className="font-mono text-[8.5px] uppercase text-amber-500 tracking-wider font-bold">Executive Pattern Summary:</span>
                            <p className="text-[11px] text-editorial-dim leading-relaxed">
                              By rolling up individual categories instantly, Power BI delivers spatial priority. Instead of studying grids row-by-row, decision-makers comprehend the entire scale of deployment immediately.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {/* Scorecard 1: Total Spend */}
                              <div className="p-4 border border-editorial bg-neutral-950/40 text-center rounded">
                                <span className="font-mono text-[8px] text-editorial-dim block uppercase">Total Outlay</span>
                                <div className="text-lg font-serif italic text-white mt-1">
                                  ${(pbiSoftwareSpend + pbiMarketingSpend + pbiFacilitiesSpend).toLocaleString()}
                                </div>
                                <span className="text-[8px] font-mono text-zinc-500 block mt-1">Summed database entries</span>
                              </div>

                              {/* Scorecard 2: Asset Density */}
                              <div className="p-4 border border-editorial bg-neutral-950/40 text-center rounded">
                                <span className="font-mono text-[8px] text-editorial-dim block uppercase">Software Ratio</span>
                                <div className="text-lg font-serif italic text-white mt-1">
                                  {Math.round((pbiSoftwareSpend / (pbiSoftwareSpend + pbiMarketingSpend + pbiFacilitiesSpend || 1)) * 100)}%
                                </div>
                                <span className="text-[8px] font-mono text-zinc-500 block mt-1">Global cost ratio</span>
                              </div>

                              {/* Scorecard 3: Audit Safety */}
                              <div className={`p-4 border text-center rounded ${pbiComplianceRate < 85 ? 'border-red-500/20 bg-red-950/10' : 'border-emerald-500/20 bg-emerald-950/10'}`}>
                                <span className="font-mono text-[8px] text-editorial-dim block uppercase">Audit Security</span>
                                <div className={`text-lg font-serif italic font-bold mt-1 ${pbiComplianceRate < 85 ? 'text-red-400' : 'text-emerald-400'}`}>
                                  {pbiComplianceRate < 85 ? "At Risk" : "Secure"}
                                </div>
                                <span className={`text-[8px] font-mono block mt-1 ${pbiComplianceRate < 85 ? 'text-red-300' : 'text-emerald-300'}`}>Fidelity: {pbiComplianceRate}%</span>
                              </div>
                            </div>

                            {/* Cognitive Alignment Card */}
                            <div className="p-3 border border-editorial bg-neutral-900/30 text-[11px] text-editorial-dim flex items-center gap-3">
                              <ChevronRight size={16} className="text-amber-500 flex-shrink-0 animate-pulse" />
                              <span>
                                <strong>Visual narrative insight:</strong> Real-time allocation points to <strong className="text-white">{pbiSoftwareSpend > pbiMarketingSpend ? "Software subscriptions" : "Marketing campaigns"}</strong> as our primary cost driver. This pattern is resolved immediately without scanning raw cells!
                              </span>
                            </div>
                          </div>
                        )}

                        {/* TAB 2: PROPORTIONAL SHARE (AESTHETIC BARS) */}
                        {pbiActiveMetric === 'categories' && (
                          <div className="space-y-4 animate-fadeIn">
                            <span className="font-mono text-[8.5px] uppercase text-amber-500 tracking-wider font-bold">Spatial Allocation Ratio:</span>
                            <p className="text-[11px] text-editorial-dim leading-relaxed">
                              By resizing visual containers, the brain recognizes exactly which budget items capture the lion's share of financial oxygen of the enterprise.
                            </p>

                            {/* Bar Layout Chart */}
                            <div className="p-4 border border-editorial bg-neutral-950/40 rounded space-y-4">
                              
                              {/* Bar 1: Software */}
                              <div className="space-y-1">
                                <div className="flex justify-between items-center text-[10px] font-mono text-editorial-dim">
                                  <span className="text-white font-medium">Software Stack</span>
                                  <span>${pbiSoftwareSpend.toLocaleString()} ({Math.round((pbiSoftwareSpend / (pbiSoftwareSpend + pbiMarketingSpend + pbiFacilitiesSpend || 1)) * 100)}%)</span>
                                </div>
                                <div className="h-4 w-full bg-neutral-900 rounded-sm overflow-hidden border border-editorial/20">
                                  <div 
                                    className="h-full bg-amber-500 transition-all duration-500 ease-out" 
                                    style={{ width: `${(pbiSoftwareSpend / 30000) * 100}%` }}
                                  />
                                </div>
                              </div>

                              {/* Bar 2: Marketing */}
                              <div className="space-y-1">
                                <div className="flex justify-between items-center text-[10px] font-mono text-editorial-dim">
                                  <span className="text-white font-medium">Marketing Campaign</span>
                                  <span>${pbiMarketingSpend.toLocaleString()} ({Math.round((pbiMarketingSpend / (pbiSoftwareSpend + pbiMarketingSpend + pbiFacilitiesSpend || 1)) * 100)}%)</span>
                                </div>
                                <div className="h-4 w-full bg-neutral-900 rounded-sm overflow-hidden border border-editorial/20">
                                  <div 
                                    className="h-full bg-amber-400 transition-all duration-500 ease-out" 
                                    style={{ width: `${(pbiMarketingSpend / 30000) * 100}%` }}
                                  />
                                </div>
                              </div>

                              {/* Bar 3: Facilities */}
                              <div className="space-y-1">
                                <div className="flex justify-between items-center text-[10px] font-mono text-editorial-dim">
                                  <span className="text-white font-medium">Facilities Lease</span>
                                  <span>${pbiFacilitiesSpend.toLocaleString()} ({Math.round((pbiFacilitiesSpend / (pbiSoftwareSpend + pbiMarketingSpend + pbiFacilitiesSpend || 1)) * 100)}%)</span>
                                </div>
                                <div className="h-4 w-full bg-neutral-900 rounded-sm overflow-hidden border border-editorial/20">
                                  <div 
                                    className="h-full bg-zinc-400 transition-all duration-500 ease-out" 
                                    style={{ width: `${(pbiFacilitiesSpend / 30000) * 100}%` }}
                                  />
                                </div>
                              </div>

                            </div>

                            <div className="text-[10px] text-editorial-dim italic font-mono text-center block pt-1">
                              Note: Visual bounds scale against a static $30,000 baseline budget benchmark.
                            </div>
                          </div>
                        )}

                        {/* TAB 3: RISK INDICATORS */}
                        {pbiActiveMetric === 'trends' && (
                          <div className="space-y-4 animate-fadeIn">
                            <span className="font-mono text-[8.5px] uppercase text-amber-500 tracking-wider font-bold">Trend & Security Indicators:</span>
                            <p className="text-[11px] text-editorial-dim leading-relaxed">
                              Trend lines represent trajectories rather than static state indicators. Visualizing direction and curves helps spot dangerous runway depletion or runaway spending immediately.
                            </p>

                            {/* Visualizing dynamic health scores */}
                            <div className="p-4 border border-editorial bg-neutral-950/40 rounded space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                
                                <div className="p-3 border border-editorial/30 bg-neutral-950/20 rounded">
                                  <span className="font-mono text-[8px] text-zinc-500 block">EXCESS COST BURDEN PATTERN:</span>
                                  <div className="flex items-center gap-2 mt-2">
                                    <div className={`w-3.5 h-3.5 rounded-full ${pbiSoftwareSpend + pbiMarketingSpend > 24000 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                                    <span className="text-xs font-mono font-medium text-white text-left">
                                      {pbiSoftwareSpend + pbiMarketingSpend > 24000 ? "Active Spillover" : "Stable Boundary"}
                                    </span>
                                  </div>
                                  <span className="text-[9px] font-mono text-editorial-dim block mt-1 text-left">Aggregated limit marker: $24,000.</span>
                                </div>

                                <div className="p-3 border border-editorial/30 bg-neutral-950/20 rounded text-left">
                                  <span className="font-mono text-[8px] text-zinc-500 block">AUDIT COMPLIANCE LEVEL:</span>
                                  <div className="flex items-center gap-2 mt-2">
                                    <div className={`w-3.5 h-3.5 rounded-full ${pbiComplianceRate < 85 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                                    <span className="text-xs font-mono font-medium text-white">
                                      {pbiComplianceRate < 85 ? "Audit Risk Alert" : "Corporate Verified"}
                                    </span>
                                  </div>
                                  <span className="text-[9px] font-mono text-editorial-dim block mt-1">Fidelity target threshold: 85%.</span>
                                </div>

                              </div>

                              {/* Simulated SVG Graph Trend Line */}
                              <div className="border border-editorial/40 bg-black/60 p-3 rounded text-[9px] font-mono text-editorial-dim text-left">
                                <span className="block mb-2 text-[8px] uppercase text-zinc-500 tracking-wider">Historical 6-Month Expenditure Trend:</span>
                                <div className="h-16 relative flex items-end">
                                  {/* SVG Line path dynamically calculated from values! */}
                                  <svg className="w-full h-full absolute inset-0 text-amber-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path 
                                      d={`M 0 18 Q 20 ${20 - (pbiSoftwareSpend / 2000)} 40 ${20 - (pbiMarketingSpend / 1500)} T 80 ${20 - ((pbiSoftwareSpend + pbiMarketingSpend) / 2800)} T 100 ${18 - ((pbiSoftwareSpend + pbiMarketingSpend + pbiFacilitiesSpend) / 3000)}`} 
                                      fill="none" 
                                      stroke="currentColor" 
                                      strokeWidth="1.5"
                                      className="transition-all duration-700"
                                    />
                                  </svg>
                                  <div className="absolute left-[5%] bottom-1 leading-none text-[#555]">Jan</div>
                                  <div className="absolute left-[25%] bottom-1 leading-none text-[#555]">Feb</div>
                                  <div className="absolute left-[45%] bottom-1 leading-none text-[#555]">Mar</div>
                                  <div className="absolute left-[65%] bottom-1 leading-none text-[#555]">Apr</div>
                                  <div className="absolute right-[5%] bottom-1 leading-none text-[#fff] font-bold">Today</div>
                                </div>
                                <p className="mt-2 text-[8px] leading-tight text-neutral-500">
                                  Curve slope dynamically responds to underlying ledger row tweaks in your Sheet of Numbers.
                                </p>
                              </div>

                            </div>
                          </div>
                        )}

                        {/* TAB 4: DYNAMIC ANOMALIES */}
                        {pbiActiveMetric === 'alerts' && (
                          <div className="space-y-4 animate-fadeIn text-left">
                            <span className="font-mono text-[8.5px] uppercase text-amber-500 tracking-wider font-bold">Dynamic Anomaly Flags:</span>
                            <p className="text-[11px] text-editorial-dim leading-relaxed">
                              Instead of expecting humans to systematically compare sheet parameters to find warnings, Power BI logic automatically surfaces active alerts when multi-factor rules are breached.
                            </p>

                            <div className="space-y-2">
                              {/* Alert 1 */}
                              {pbiSoftwareSpend > 18000 ? (
                                <div className="p-3 border border-red-500/20 bg-red-950/10 rounded flex items-start gap-2.5">
                                  <span className="text-red-400 text-[11px] font-bold font-mono">[ALERT]</span>
                                  <div className="text-xs font-light text-red-100">
                                    <strong>Runtime Software Inflations:</strong> Subscriptions represent ${pbiSoftwareSpend.toLocaleString()}. This unchecked expansion is classified as high-risk operating bleed.
                                  </div>
                                </div>
                              ) : (
                                <div className="p-3 border border-emerald-500/20 bg-emerald-950/10 rounded flex items-start gap-2.5 animate-fadeIn">
                                  <span className="text-emerald-400 text-[11px] font-bold font-mono">[SECURE]</span>
                                  <div className="text-xs font-light text-emerald-100">
                                    <strong>Software spend optimized:</strong> Under standard operational limits ($18,000 threshold).
                                  </div>
                                </div>
                              )}

                              {/* Alert 2 */}
                              {pbiComplianceRate < 85 ? (
                                <div className="p-3 border border-amber-500/20 bg-amber-950/10 rounded flex items-start gap-2.5">
                                  <span className="text-amber-400 text-[11px] font-bold font-mono">[WARNING]</span>
                                  <div className="text-xs font-light text-amber-100">
                                    <strong>Fidelity Deficit Risk:</strong> Matching rate ({pbiComplianceRate}%) is under the security benchmark of 85%. Remediate immediately with Excel data cleaning or matching.
                                  </div>
                                </div>
                              ) : (
                                <div className="p-3 border border-emerald-500/20 bg-emerald-950/10 rounded flex items-start gap-2.5 animate-fadeIn">
                                  <span className="text-emerald-400 text-[11px] font-bold font-mono">[SECURE]</span>
                                  <div className="text-xs font-light text-[#a7f3d0]">
                                    <strong>Audit Readiness validated:</strong> Complete reconciliation confidence ({pbiComplianceRate}%) guarantees quick corporate close approval.
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Dashboard Footer / Analytical Truth */}
                      <div className="border-t border-editorial/40 pt-4 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                        <span>Power BI Logic Engine Mimic</span>
                        <span>Interactive Narrative: Active</span>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Philosophical Insights Block */}
                <div className="mt-8 p-6 bg-white/[0.01] border border-editorial rounded text-left">
                  <div className="grid md:grid-cols-3 gap-6 text-[11px]">
                    <div className="space-y-1">
                      <strong className="text-white font-serif italic block text-xs">Why Visuals Trump Tables</strong>
                      <p className="text-editorial-dim leading-relaxed">
                        A spreadsheet provides hyper-exact decimal precision. Visuals provide perspective. By mapping space, trend lines, and color cues, the mind instantly absorbs proportion and anomalies to establish structural alignment.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-white font-serif italic block text-xs">Alternative Business Intelligence Tools</strong>
                      <p className="text-editorial-dim leading-relaxed">
                        While <strong>Power BI</strong> excels within the Microsoft ecosystem, <strong>Looker Studio</strong> handles Google Workspace telemetry elegantly, and <strong>Tableau</strong> excels in deep exploration science. Regardless of platform, all rely on fully normalized tabular schemas.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-white font-serif italic block text-xs">The Engineer's Golden Rule</strong>
                      <p className="text-editorial-dim leading-relaxed">
                        Design systems to build databases and exports cleanly with normalized flat schemas. Let downstream BI suites worry about aggregation, coloring, and storytelling. Never bake aesthetic merges or human-oriented layouts directly into raw database rows!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
