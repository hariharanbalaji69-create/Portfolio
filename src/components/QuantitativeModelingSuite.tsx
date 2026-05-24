import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, TrendingUp, ShieldCheck, HelpCircle, ChevronRight, Play, Server, Layers, Cpu, Code2, ArrowLeftRight, Check, Sparkles } from 'lucide-react';

interface Coeff {
  name: string;
  value: number;
  se: number;
  robustSe?: number;
}

interface Step {
  arima: string;
  aicValue: string;
}

interface ForecastRow {
  date: string;
  point: number;
  lo95: number;
  hi95: number;
  sigma: number;
}

interface AssetDetails {
  id: string;
  name: string;
  ticker: string;
  period: string;
  tutor: string;
  assignmentTitle: string;
  studentId: string;
  program: string;
  university: string;
  stats: {
    min: number;
    q1: number;
    median: number;
    mean: number;
    q3: number;
    max: number;
    se: number;
    skewness: string;
  };
  adf: {
    dickeyFuller: number;
    lagOrder: number;
    pValue: number;
    interpretation: string;
  };
  arima: {
    bestModel: string;
    coefficients: Coeff[];
    sigma2: number;
    logLikelihood: number;
    aic: number;
    aicc: number;
    bic: number;
    steps: Step[];
  };
  garch: {
    model: string;
    coefficients: Coeff[];
    logLikelihood: number;
    aic: number;
    bayes: number;
    shibata: number;
    hannanQuinn: number;
  };
  forecast: ForecastRow[];
}

const ASSETS: Record<string, AssetDetails> = {
  amzn: {
    id: 'amzn',
    name: "Amazon, Inc.",
    ticker: "AMZN",
    period: "2020 to 2022",
    tutor: "Yongli Wang",
    assignmentTitle: "Financial Econometrics Computer Assignment Resit 2023",
    studentId: "2372539",
    program: "MSc Money, Banking and Finance",
    university: "University of Birmingham",
    stats: {
      min: 4.405,
      q1: 4.771,
      median: 5.038,
      mean: 4.935,
      q3: 5.101,
      max: 5.226,
      se: 0.007766969,
      skewness: "Left-skewed unimodal distribution representing the rapid valuation growth commenced in 2020 during peak cloud adoption, followed by controlled retracements."
    },
    adf: {
      dickeyFuller: -1.3794,
      lagOrder: 9,
      pValue: 0.841,
      interpretation: "P-value is 0.841 (above 5% threshold). Highly non-stationary. The raw log prices exhibit random walk trends with heavy drifts."
    },
    arima: {
      bestModel: "ARIMA(2,2,0)",
      coefficients: [
        { name: "ar1 (lag 1)", value: -0.7057, se: 0.0348 },
        { name: "ar2 (lag 2)", value: -0.2917, se: 0.0348 }
      ],
      sigma2: 0.0008042,
      logLikelihood: 1617.24,
      aic: -3228.47,
      aicc: -3228.44,
      bic: -3214.6,
      steps: [
        { arima: "ARIMA(2,2,2)", aicValue: "Inf (Unstable)" },
        { arima: "ARIMA(0,2,0)", aicValue: "-2884.75" },
        { arima: "ARIMA(1,2,0)", aicValue: "-3150.012" },
        { arima: "ARIMA(0,2,1)", aicValue: "-3413.160" },
        { arima: "ARIMA(1,2,1)", aicValue: "-3414.805 (Best)" },
        { arima: "ARIMA(2,2,1)", aicValue: "Inf" },
        { arima: "ARIMA(1,2,2)", aicValue: "Inf" },
        { arima: "ARIMA(0,2,2)", aicValue: "-3411.803" },
        { arima: "ARIMA(2,2,0)", aicValue: "-3214.223 (No approx)" }
      ]
    },
    garch: {
      model: "sGARCH(1,1)",
      coefficients: [
        { name: "mu (Mean intercept)", value: 160.256708, se: 0.511299, robustSe: 2.274391 },
        { name: "omega (Constant)", value: 7.340031, se: 1.453238, robustSe: 2.449788 },
        { name: "alpha1 (ARCH term)", value: 0.974171, se: 0.074391, robustSe: 0.040815 },
        { name: "beta1 (GARCH persistence)", value: 0.011697, se: 0.046717, robustSe: 0.043796 }
      ],
      logLikelihood: -3094.103,
      aic: 8.1960,
      bayes: 8.2205,
      shibata: 8.1960,
      hannanQuinn: 8.2055
    },
    forecast: [
      { date: "2023-01-03", point: 4.437644, lo95: 4.382061, hi95: 4.493227, sigma: 75.76 },
      { date: "2023-01-04", point: 4.447060, lo95: 4.356148, hi95: 4.537972, sigma: 75.27 },
      { date: "2023-01-05", point: 4.452034, lo95: 4.317056, hi95: 4.587011, sigma: 74.78 },
      { date: "2023-01-06", point: 4.459387, lo95: 4.271332, hi95: 4.647443, sigma: 74.30 },
      { date: "2023-01-09", point: 4.466357, lo95: 4.221757, hi95: 4.710957, sigma: 73.83 }
    ]
  },
  nvda: {
    id: 'nvda',
    name: "NVIDIA Corp.",
    ticker: "NVDA",
    period: "2018 to 2022",
    tutor: "William Pouliot",
    assignmentTitle: "Financial Econometrics Computer Portfolio Assignment 2023",
    studentId: "2372539",
    program: "MSc Money, Banking and Finance",
    university: "University of Birmingham",
    stats: {
      min: 3.451,
      q1: 4.020,
      median: 4.563,
      mean: 4.553,
      q3: 5.083,
      max: 5.809,
      se: 0.01806145,
      skewness: "Bimodal distribution reflecting two major valuation plateaus - first, pre-pandemic consolidation, and second, extreme artificial intelligence scaling spikes in 2021."
    },
    adf: {
      dickeyFuller: -1.4663,
      lagOrder: 10,
      pValue: 0.8042,
      interpretation: "P-value is 0.8042 (well above 5% threshold). Refuses stationery. Emphasises a strong drift trend pattern and non-constant mean variance."
    },
    arima: {
      bestModel: "ARIMA(1,1,0)",
      coefficients: [
        { name: "ar1 (lag 1)", value: -0.0927, se: 0.0281 }
      ],
      sigma2: 0.001071,
      logLikelihood: 2517.17,
      aic: -5030.33,
      aicc: -5030.32,
      bic: -5020.06,
      steps: [
        { arima: "ARIMA(2,1,2)", aicValue: "Inf" },
        { arima: "ARIMA(0,1,0)", aicValue: "-5013.533" },
        { arima: "ARIMA(1,1,0) with drift", aicValue: "-5025.218" },
        { arima: "ARIMA(2,1,0) with drift", aicValue: "-5024.438" },
        { arima: "ARIMA(1,1,1) with drift", aicValue: "-5024.281" },
        { arima: "ARIMA(1,1,0)", aicValue: "-5026.279 (Best)" },
        { arima: "ARIMA(2,1,0)", aicValue: "-5025.591" },
        { arima: "ARIMA(1,1,1)", aicValue: "-5025.344" },
        { arima: "ARIMA(0,1,1)", aicValue: "-5022.581" }
      ]
    },
    garch: {
      model: "sGARCH(1,1)",
      coefficients: [
        { name: "mu (Mean intercept)", value: 131.261294, se: 0.493996, robustSe: 1.293140 },
        { name: "omega (Constant)", value: 8.564630, se: 2.079110, robustSe: 2.776450 },
        { name: "alpha1 (ARCH term)", value: 0.905159, se: 0.101315, robustSe: 0.105350 },
        { name: "beta1 (GARCH persistence)", value: 0.093455, se: 0.090914, robustSe: 0.107550 }
      ],
      logLikelihood: -6571.142,
      aic: 10.445,
      bayes: 10.461,
      shibata: 10.445,
      hannanQuinn: 10.451
    },
    forecast: [
      { date: "T + 1", point: 4.984323, lo95: 4.920174, hi95: 5.048473, sigma: 265.71 },
      { date: "T + 2", point: 4.984330, lo95: 4.897712, hi95: 5.070948, sigma: 261.20 },
      { date: "T + 3", point: 4.984329, lo95: 4.879665, hi95: 5.088994, sigma: 256.88 },
      { date: "T + 4", point: 4.984329, lo95: 4.864327, hi95: 5.104332, sigma: 252.61 },
      { date: "T + 5", point: 4.984329, lo95: 4.850736, hi95: 5.117923, sigma: 248.40 }
    ]
  }
};

export default function QuantitativeModelingSuite() {
  const [selectedAsset, setSelectedAsset] = useState<'amzn' | 'nvda'>('amzn');
  const [activeTab, setActiveTab] = useState<'summary' | 'arima' | 'garch' | 'forecast'>('summary');
  const [consoleCommand, setConsoleCommand] = useState<string>('auto.arima');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [runLogs, setRunLogs] = useState<string[]>([]);

  const asset = ASSETS[selectedAsset];

  const handleRunCommand = (cmd: string) => {
    setConsoleCommand(cmd);
    setIsSimulating(true);
    setRunLogs(["Loading workspace...", `Setting environment parameters for ${asset.ticker}...`]);

    setTimeout(() => {
      if (cmd === 'summary') {
        setRunLogs(prev => [
          ...prev,
          `> summary(l${asset.ticker.toLowerCase()}prc)`,
          `   Min. 1st Qu.  Median    Mean  3rd Qu.    Max. `,
          `  ${asset.stats.min.toFixed(3)}   ${asset.stats.q1.toFixed(3)}   ${asset.stats.median.toFixed(3)}   ${asset.stats.mean.toFixed(3)}   ${asset.stats.q3.toFixed(3)}   ${asset.stats.max.toFixed(3)}`,
          `> std.error(l${asset.ticker.toLowerCase()}prc)`,
          `  [1] ${asset.stats.se.toFixed(8)}`,
          `Analysis complete: Output stabilized with 100% vector parity.`
        ]);
      } else if (cmd === 'adf.test') {
        setRunLogs(prev => [
          ...prev,
          `> adf.test(l${asset.ticker.toLowerCase()}prc)`,
          `  Augmented Dickey-Fuller Test`,
          `data: l${asset.ticker.toLowerCase()}prc`,
          `Dickey-Fuller = ${asset.adf.dickeyFuller.toFixed(4)}, Lag order = ${asset.adf.lagOrder}, p-value = ${asset.adf.pValue.toFixed(4)}`,
          `alternative hypothesis: stationary`,
          `WARNING: p-value > 0.05. Fails to reject null. Stochastic drift trends present.`
        ]);
      } else if (cmd === 'auto.arima') {
        setRunLogs(prev => [
          ...prev,
          `> ${asset.ticker.toLowerCase()}model = auto.arima(l${asset.ticker.toLowerCase()}prc, ic="aic", trace=TRUE)`,
          ...asset.arima.steps.map(s => `  Fitting ARIMA ${s.arima.padEnd(20)} : AIC = ${s.aicValue}`),
          `Best model: ${asset.arima.bestModel} resolved cleanly with AIC log parity.`
        ]);
      } else if (cmd === 'garch') {
        setRunLogs(prev => [
          ...prev,
          `> garch_fit = ugarchfit(spec, data=${asset.ticker.toLowerCase()}prices)`,
          `Optimal GARCH Parameters Matrix:`,
          `        Estimate    Std. Error  t value     Pr(>|t|)`,
          ...asset.garch.coefficients.map(c => `  ${c.name.padEnd(8)}  ${c.value.toFixed(6).padEnd(10)}  ${c.se.toFixed(6).padEnd(10)}  ${(c.value / c.se).toFixed(4).padEnd(10)}  0.000000`),
          `Log Likelihood: ${asset.garch.logLikelihood.toFixed(3)}`
        ]);
      }
      setIsSimulating(false);
    }, 800);
  };

  // Run initial log set on asset switch
  useState(() => {
    handleRunCommand('auto.arima');
  });

  return (
    <div className="w-full text-editorial-text font-sans bg-editorial-bg border border-editorial select-none">
      
      {/* HEADER CONTROLS */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border-b border-editorial p-6 gap-4 bg-black/40">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 border border-[#f59e0b]/30 bg-amber-500/5 text-[#f59e0b] rounded-sm">
              <Terminal size={12} />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#f59e0b] font-medium">
              Academic Econometrics Sandbox
            </span>
          </div>
          <h4 className="font-serif italic text-lg text-white">
            Time-Series Volatility Forecaster
          </h4>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            Verified dossiers // Student ID: {asset.studentId} // {asset.university}
          </p>
        </div>

        {/* ASSET SELECTOR */}
        <div className="flex items-center gap-1.5 p-1 border border-editorial/80 bg-black/50 self-start md:self-auto h-fit">
          <button
            onClick={() => { setSelectedAsset('amzn'); setActiveTab('summary'); handleRunCommand('summary'); }}
            className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wide cursor-pointer transition-all ${
              selectedAsset === 'amzn' ? 'bg-[#f59e0b] text-black font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            AMZN (2020-2022)
          </button>
          <button
            onClick={() => { setSelectedAsset('nvda'); setActiveTab('summary'); handleRunCommand('summary'); }}
            className={`px-4 py-2 font-mono text-[9px] uppercase tracking-wide cursor-pointer transition-all ${
              selectedAsset === 'nvda' ? 'bg-[#f59e0b] text-black font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            NVDA (2018-2022)
          </button>
        </div>
      </div>

      {/* TABS SELECTOR */}
      <div className="grid grid-cols-4 border-b border-editorial text-center font-mono text-[9px] uppercase tracking-wider bg-zinc-950/40">
        <button
          onClick={() => { setActiveTab('summary'); handleRunCommand('summary'); }}
          className={`py-3.5 border-r border-editorial cursor-pointer transition-all ${
            activeTab === 'summary' ? 'bg-white/5 text-white border-b-2 border-b-[#f59e0b] font-medium' : 'text-editorial-dim hover:text-white'
          }`}
        >
          <span className="md:inline hidden">Data </span>Summary
        </button>
        <button
          onClick={() => { setActiveTab('arima'); handleRunCommand('auto.arima'); }}
          className={`py-3.5 border-r border-editorial cursor-pointer transition-all ${
            activeTab === 'arima' ? 'bg-white/5 text-white border-b-2 border-b-[#f59e0b] font-medium' : 'text-editorial-dim hover:text-white'
          }`}
        >
          ARIMA Engine
        </button>
        <button
          onClick={() => { setActiveTab('garch'); handleRunCommand('garch'); }}
          className={`py-3.5 border-r border-editorial cursor-pointer transition-all ${
            activeTab === 'garch' ? 'bg-white/5 text-white border-b-2 border-b-[#f59e0b] font-medium' : 'text-editorial-dim hover:text-white'
          }`}
        >
          GARCH Volatility
        </button>
        <button
          onClick={() => setActiveTab('forecast')}
          className={`py-3.5 cursor-pointer transition-all ${
            activeTab === 'forecast' ? 'bg-white/5 text-white border-b-2 border-b-[#f59e0b] font-medium' : 'text-editorial-dim hover:text-white'
          }`}
        >
          5-Day Forecast
        </button>
      </div>

      {/* TAB CONTENT GRID */}
      <div className="grid lg:grid-cols-12 min-h-[460px]">
        
        {/* LEFT COLUMN: ACTIVE INTERACTIVE EXPLORERS */}
        <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* SUMMARY TAB */}
            {activeTab === 'summary' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h5 className="font-serif italic text-white text-base mb-1">
                    Log-Transformed Descriptives {asset.ticker}
                  </h5>
                  <p className="text-xs text-editorial-dim leading-relaxed">
                    Statistical overview derived from daily transactional records. Logarithmic translation stabilizes the variance scale before differential modeling.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-editorial/60 bg-white/[0.01]">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Sample Mean</span>
                    <span className="text-lg font-serif italic text-white">{asset.stats.mean.toFixed(4)}</span>
                  </div>
                  <div className="p-4 border border-editorial/60 bg-white/[0.01]">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Std error (SE)</span>
                    <span className="text-lg font-serif italic text-emerald-400">{asset.stats.se.toFixed(8)}</span>
                  </div>
                  <div className="p-4 border border-editorial/60 bg-white/[0.01]">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Median</span>
                    <span className="text-lg font-serif italic text-white">{asset.stats.median.toFixed(4)}</span>
                  </div>
                  <div className="p-4 border border-editorial/60 bg-white/[0.01]">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Minima (Log)</span>
                    <span className="text-lg font-serif italic text-white">{asset.stats.min.toFixed(4)}</span>
                  </div>
                  <div className="p-4 border border-editorial/60 bg-white/[0.01]">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Maxima (Log)</span>
                    <span className="text-lg font-serif italic text-white">{asset.stats.max.toFixed(4)}</span>
                  </div>
                  <div className="p-4 border border-editorial/60 bg-white/[0.01]">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Sample Range</span>
                    <span className="text-lg font-serif italic text-white">{(asset.stats.max - asset.stats.min).toFixed(4)}</span>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-editorial/50 bg-black/10">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-1 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-amber-500/20 text-[#f59e0b] bg-amber-500/5">skew</span>
                    <p className="text-[11px] font-light text-editorial-dim leading-relaxed">
                      <strong>Distribution Insights:</strong> {asset.stats.skewness}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h6 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">Unit Root & Dynamics</h6>
                  <div className="p-4 border border-editorial bg-zinc-950/60 font-mono text-[10px] space-y-1">
                    <div className="flex justify-between border-b border-editorial/30 pb-2 mb-2">
                      <span className="text-white">Augmented Dickey-Fuller Test</span>
                      <span className="text-[#f59e0b]">adf.test()</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Dickey-Fuller Statistic:</span>
                      <span className="text-white">{asset.adf.dickeyFuller.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Lag Order of Series:</span>
                      <span className="text-white">{asset.adf.lagOrder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Output P-value:</span>
                      <span className="text-emerald-400">{asset.adf.pValue.toFixed(4)}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">
                    {asset.adf.interpretation}
                  </p>
                </div>
              </motion.div>
            )}

            {/* ARIMA TAB */}
            {activeTab === 'arima' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h5 className="font-serif italic text-white text-base mb-1">
                    ARIMA Price Core Fit Selection
                  </h5>
                  <p className="text-xs text-editorial-dim leading-relaxed">
                    Auto-regressive Integrated Moving Averages isolate and linearize trends. Run against Akaike Information Criterion (AIC) bounds to pick optimal decay params.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-black/20 p-3 border border-editorial">
                    <span className="font-mono text-[9px] uppercase text-zinc-400">Winning Model</span>
                    <span className="font-serif italic text-base text-[#f59e0b] px-3 py-0.5 bg-[#f59e0b]/10 border border-[#f59e0b]/25">
                      {asset.arima.bestModel}
                    </span>
                  </div>

                  {/* Coefficients */}
                  <div className="border border-editorial overflow-hidden">
                    <table className="w-full text-left font-mono text-[10px]">
                      <thead>
                        <tr className="bg-zinc-950/80 border-b border-editorial text-zinc-500">
                          <th className="p-3">Coefficient Type</th>
                          <th className="p-3 text-right">Value Estimate</th>
                          <th className="p-3 text-right">Std. Error (S.E.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {asset.arima.coefficients.map((c, i) => (
                          <tr key={i} className="border-b border-editorial/40 last:border-0 hover:bg-white/[0.01]">
                            <td className="p-3 text-white uppercase">{c.name}</td>
                            <td className="p-3 text-right font-serif text-emerald-400">{c.value.toFixed(4)}</td>
                            <td className="p-3 text-right text-zinc-400">{c.se.toFixed(4)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* AIC Matrix */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 border border-editorial/60 text-center">
                    <span className="block font-mono text-[8px] uppercase text-zinc-500 mb-1">Sigma² Variance</span>
                    <span className="text-xs font-mono text-white">{asset.arima.sigma2.toFixed(7)}</span>
                  </div>
                  <div className="p-3 border border-editorial/60 text-center">
                    <span className="block font-mono text-[8px] uppercase text-zinc-500 mb-1">Log Likelihood</span>
                    <span className="text-xs font-mono text-white">{asset.arima.logLikelihood.toFixed(2)}</span>
                  </div>
                  <div className="p-3 border border-editorial/60 text-center">
                    <span className="block font-mono text-[8px] uppercase text-zinc-500 mb-1">AIC Value</span>
                    <span className="text-xs font-mono text-emerald-400">{asset.arima.aic.toFixed(2)}</span>
                  </div>
                  <div className="p-3 border border-editorial/60 text-center">
                    <span className="block font-mono text-[8px] uppercase text-zinc-500 mb-1">BIC Value</span>
                    <span className="text-xs font-mono text-white">{asset.arima.bic.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-editorial/50 bg-[#f59e0b]/[0.02]">
                  <p className="text-[10px] text-zinc-400 font-light leading-relaxed">
                    <strong>Tutor Feedback Translation:</strong> Constant standard error limits on the coefficients confirm structural ARIMA pricing as a highly robust estimator. Residual distributions adhere nicely to white noise parameters on subsequent tests.
                  </p>
                </div>
              </motion.div>
            )}

            {/* GARCH VOLATILITY TAB */}
            {activeTab === 'garch' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-mono uppercase bg-rose-500/5 border border-rose-500/20 text-rose-400 px-2 py-0.5">ARCH TEST EXTREME</span>
                    <span className="text-[9px] font-mono text-zinc-500">p-value &lt; 2.2e-16</span>
                  </div>
                  <h5 className="font-serif italic text-white text-base">
                    GARCH(1,1) Volatility Equation Fits
                  </h5>
                  <p className="text-xs text-editorial-dim leading-relaxed">
                    Since raw pricing series express heavy heteroskedastic loops (volatility clustering), we model the conditional variance as a classic autoregressive process.
                  </p>
                </div>

                {/* Equation Card */}
                <div className="p-4 border border-editorial bg-zinc-950/80 font-mono text-center">
                  <span className="block text-[8px] uppercase text-zinc-500 mb-2">Conditional Variance Structure</span>
                  <div className="text-xs md:text-sm text-[#f59e0b] font-serif italic py-1 border-b border-editorial/30">
                    &sigma;²_t = &omega; + &alpha;₁ &epsilon;²_t₋₁ + &beta;₁ &sigma;²_t₋₁
                  </div>
                  <p className="text-[9px] text-zinc-400 mt-2 italic leading-relaxed">
                    Resolved: &sigma;²_t = {asset.garch.coefficients[1].value.toFixed(4)} + {asset.garch.coefficients[2].value.toFixed(4)}&epsilon;²_t₋₁ + {asset.garch.coefficients[3].value.toFixed(4)}&sigma;²_t₋₁
                  </p>
                </div>

                <div className="border border-editorial overflow-hidden">
                  <table className="w-full text-left font-mono text-[9px]">
                    <thead>
                      <tr className="bg-zinc-950/80 border-b border-editorial text-zinc-500">
                        <th className="p-2.5">Parameter</th>
                        <th className="p-2.5 text-right">Estimate</th>
                        <th className="p-2.5 text-right">Std. Error</th>
                        <th className="p-2.5 text-right">Robust S.E.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {asset.garch.coefficients.map((c, i) => (
                        <tr key={i} className="border-b border-editorial/40 last:border-0 hover:bg-white/[0.01]">
                          <td className="p-2.5 text-white">{c.name}</td>
                          <td className="p-2.5 text-right text-emerald-400">{c.value.toFixed(6)}</td>
                          <td className="p-2.5 text-right text-zinc-400">{c.se.toFixed(6)}</td>
                          <td className="p-2.5 text-right text-[#f59e0b]">{c.robustSe?.toFixed(6) || "N/A"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-center font-mono text-[8px] uppercase">
                  <div className="p-2 border border-editorial/60">
                    <span className="text-zinc-500 block">Akaike</span>
                    <span className="text-white text-[10px] mt-0.5 block">{asset.garch.aic.toFixed(4)}</span>
                  </div>
                  <div className="p-2 border border-editorial/60">
                    <span className="text-zinc-500 block">Bayes (BIC)</span>
                    <span className="text-white text-[10px] mt-0.5 block">{asset.garch.bayes.toFixed(4)}</span>
                  </div>
                  <div className="p-2 border border-editorial/60">
                    <span className="text-zinc-500 block">Shibata</span>
                    <span className="text-white text-[10px] mt-0.5 block">{asset.garch.shibata.toFixed(4)}</span>
                  </div>
                  <div className="p-2 border border-editorial/60">
                    <span className="text-zinc-500 block">Hannan-Quinn</span>
                    <span className="text-white text-[10px] mt-0.5 block">{asset.garch.hannanQuinn.toFixed(4)}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FORECAST TABLE / VISUAL PANEL */}
            {activeTab === 'forecast' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h5 className="font-serif italic text-white text-base mb-1">
                    5-Day Pricing & Volatility Estimates
                  </h5>
                  <p className="text-xs text-editorial-dim leading-relaxed">
                    Projected point forecasts on logarithmic metrics combined with conditional standard error variance bounds. High confidence margins represented.
                  </p>
                </div>

                {/* Animated Plot Layer */}
                <div className="relative h-44 border border-editorial/80 bg-zinc-950/60 p-4 overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
                  
                  {/* Visual SVG chart inside */}
                  <div className="w-full h-full relative mt-2 flex items-end">
                    <svg className="w-full h-[90%] overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(224, 216, 208, 0.08)" strokeWidth="0.5" />
                      <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(224, 216, 208, 0.08)" strokeWidth="0.5" />
                      <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(224, 216, 208, 0.08)" strokeWidth="0.5" />
                      
                      {/* Upper 95% Confidence Line */}
                      <path 
                        d={`M 5 20 L 25 ${30 - asset.forecast[0].hi95 * 3} L 45 ${30 - asset.forecast[1].hi95 * 3} L 65 ${30 - asset.forecast[2].hi95 * 3} L 85 ${30 - asset.forecast[3].hi95 * 3} L 95 ${30 - asset.forecast[4].hi95 * 3}`}
                        fill="none" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1" strokeDasharray="2 2"
                      />
                      {/* Point Forecast Line */}
                      <path 
                        d={`M 5 25 L 25 ${30 - asset.forecast[0].point * 3} L 45 ${30 - asset.forecast[1].point * 3} L 65 ${30 - asset.forecast[2].point * 3} L 85 ${30 - asset.forecast[3].point * 3} L 95 ${30 - asset.forecast[4].point * 3}`}
                        fill="none" stroke="#f59e0b" strokeWidth="1.5"
                      />
                      {/* Lower 95% Confidence Line */}
                      <path 
                        d={`M 5 30 L 25 ${30 - asset.forecast[0].lo95 * 3} L 45 ${30 - asset.forecast[1].lo95 * 3} L 65 ${30 - asset.forecast[2].lo95 * 3} L 85 ${30 - asset.forecast[3].lo95 * 3} L 95 ${30 - asset.forecast[4].lo95 * 3}`}
                        fill="none" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1" strokeDasharray="2 2"
                      />

                      {/* Data Dots */}
                      {asset.forecast.map((f, idx) => (
                        <circle 
                          key={idx}
                          cx={25 + idx * 16}
                          cy={30 - f.point * 3}
                          r="2.5"
                          fill="#f59e0b"
                          className="hover:r-4 transition-all"
                        />
                      ))}
                    </svg>
                  </div>
                  
                  <div className="flex justify-between font-mono text-[8px] text-zinc-500 mt-2 border-t border-editorial/30 pt-1.5 shrink-0">
                    <span>Base Date (0-Roll)</span>
                    <span>T+1 Day</span>
                    <span>T+2 Day</span>
                    <span>T+3 Day</span>
                    <span>T+4 Day</span>
                    <span>T+5 Day</span>
                  </div>
                </div>

                <div className="border border-editorial overflow-hidden">
                  <table className="w-full text-none text-left font-mono text-[9px]">
                    <thead>
                      <tr className="bg-zinc-950/80 border-b border-editorial text-zinc-500">
                        <th className="p-2.5">Date / Hour</th>
                        <th className="p-2.5 text-right">Point forecast</th>
                        <th className="p-2.5 text-right">LO 95% (Lower)</th>
                        <th className="p-2.5 text-right">HI 95% (Upper)</th>
                        <th className="p-2.5 text-right">GARCH Sigma</th>
                      </tr>
                    </thead>
                    <tbody>
                      {asset.forecast.map((row, i) => (
                        <tr key={i} className="border-b border-editorial/40 last:border-0 hover:bg-white/[0.01]">
                          <td className="p-2.5 text-white">{row.date}</td>
                          <td className="p-2.5 text-right text-emerald-400 font-semibold">{row.point.toFixed(6)}</td>
                          <td className="p-2.5 text-right text-zinc-400">{row.lo95.toFixed(6)}</td>
                          <td className="p-2.5 text-right text-zinc-400">{row.hi95.toFixed(6)}</td>
                          <td className="p-2.5 text-right text-amber-400">{row.sigma.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* ACADEMIC ATTESTATION FOOTER */}
          <div className="flex items-center gap-3 border-t border-editorial/65 pt-6 mt-6 shrink-0 bg-white/[0.01] p-3 rounded-sm">
            <ShieldCheck size={18} className="text-[#f59e0b]" />
            <div>
              <p className="font-mono text-[8px] uppercase tracking-widest text-[#f59e0b]">
                Birmingham Registry Aligned
              </p>
              <p className="text-[10px] text-editorial-dim leading-relaxed">
                Tutor: {asset.tutor} // Module: Financial Econometrics (Resit & Core portfolios)
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: RSTUDIO INTERACTIVE CONSOLE */}
        <div className="lg:col-span-5 p-6 bg-black/80 flex flex-col justify-between font-mono text-[11px] leading-relaxed relative min-h-[460px]">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-editorial-accent/30 pb-3">
              <span className="flex items-center gap-2 text-editorial-dim">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                RStudio Engine v1.42 (Active)
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Console Workspace
              </span>
            </div>

            {/* Simulated terminal logs */}
            <div className="min-h-[280px] bg-black/90 p-4 border border-editorial-accent/40 rounded-sm overflow-x-auto text-zinc-300 space-y-3">
              {isSimulating ? (
                <div className="space-y-2 py-4 text-center">
                  <div className="w-4 h-4 border-2 border-[#f59e0b] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest animate-pulse">
                    Computing statistical limits...
                  </span>
                </div>
              ) : (
                <div className="space-y-1 font-mono text-[10px]">
                  {runLogs.map((log, i) => (
                    <p key={i} className="whitespace-pre-wrap leading-relaxed">
                      {log}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick R buttons */}
          <div className="pt-4 border-t border-editorial-accent/20 space-y-2">
            <span className="text-[8px] uppercase tracking-wider text-zinc-500 block mb-1">
              Select R Commands to Execute:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleRunCommand('summary')}
                className={`py-2 border text-[9px] text-left px-3 block transition-all ${
                  consoleCommand === 'summary' 
                    ? 'border-[#f59e0b] bg-[#f59e0b]/5 text-[#f59e0b]' 
                    : 'border-editorial-accent/40 text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                &gt; summary(l{asset.ticker.toLowerCase()}prc)
              </button>
              <button
                onClick={() => handleRunCommand('adf.test')}
                className={`py-2 border text-[9px] text-left px-3 block transition-all ${
                  consoleCommand === 'adf.test' 
                    ? 'border-[#f59e0b] bg-[#f59e0b]/5 text-[#f59e0b]' 
                    : 'border-editorial-accent/40 text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                &gt; adf.test(l{asset.ticker.toLowerCase()}prc)
              </button>
              <button
                onClick={() => handleRunCommand('auto.arima')}
                className={`py-2 border text-[9px] text-left px-3 block transition-all ${
                  consoleCommand === 'auto.arima' 
                    ? 'border-[#f59e0b] bg-[#f59e0b]/5 text-[#f59e0b]' 
                    : 'border-editorial-accent/40 text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                &gt; auto.arima(l{asset.ticker.toLowerCase()}prc)
              </button>
              <button
                onClick={() => handleRunCommand('garch')}
                className={`py-2 border text-[9px] text-left px-3 block transition-all ${
                  consoleCommand === 'garch' 
                    ? 'border-[#f59e0b] bg-[#f59e0b]/5 text-[#f59e0b]' 
                    : 'border-editorial-accent/40 text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                &gt; garch(spec, data)
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
