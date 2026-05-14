import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from "@google/genai";
import { CheckCircle2, AlertCircle, Sparkles, Loader2, ClipboardList } from 'lucide-react';

const PROFILE_SUMMARY = `
Name: Hariharan Balaji
Role: Finance Professional × Data Scientist
Location: UK Resident (Indian National)
Education: MSc Banking & Finance (U. Birmingham), First-class Bachelors (Jain Uni).
Key Skills: 
- Econometrics: ARIMA, GARCH, Panel Data, Fixed Effects, Stata, RStudio.
- Finance: DCF, 3-Statement Modeling, SaaS Metrics (CAC, LTV, Churn), Equity Research.
- Data: SQL, Python (Pandas/NumPy), Min-Max Normalization, Log Transformations.
Experience & Projects:
- Bhacker Haji Internship: Reconciliation (completed early) & Year-end audit support.
- Klubworks Internship: Consolidated angel investor database leading to stage 1 funding.
- HDI analysis (cited 100+ times).
- Bank resilience & profitability modeling.
- AMZN stock forecasting (98.85% accuracy).
- Salesforce vs Freshworks industry study.
Current Work: 
- Parity (Social utility tool in React Native/Flutter).
- Active Quant Portfolio management (0.67% daily growth).
`;

interface AnalysisResult {
  score: number;
  feasibility: string;
  strengths: string[];
  gaps: string[];
  summary: string;
}

export default function FitChecker() {
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function analyzeFit() {
    if (!jobDescription.trim()) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Compare this Job Description to my Professional Profile.
        
        MY PROFILE:
        ${PROFILE_SUMMARY}
        
        JOB DESCRIPTION:
        ${jobDescription}`,
        config: {
          systemInstruction: "You are an expert career consultant and technical recruiter. Evaluate the feasibility of the candidate for the provided job description. Return a score from 0-100 and a breakdown of strengths, potential gaps, and a concise final verdict. Be objective and critical but fair.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER },
              feasibility: { type: Type.STRING },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              gaps: { type: Type.ARRAY, items: { type: Type.STRING } },
              summary: { type: Type.STRING }
            },
            required: ["score", "feasibility", "strengths", "gaps", "summary"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}') as AnalysisResult;
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Analysis failed. Please ensure the description is clear or try again later.");
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <section id="checker" className="bg-editorial-bg py-32 border-b border-editorial">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim mb-8">AI Integration / Compatibility</h2>
              <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-tight mb-10">Is this the right <span className="italic">Synergy?</span></h3>
              <p className="text-sm font-light text-editorial-dim leading-relaxed mb-12">
                Paste a job description or list of responsibilities below. My AI model will analyze your requirements against my quantitative and financial background to assess the match.
              </p>

              </motion.div>
          </div>

          <div className="lg:w-7/12">
            <div className="space-y-8">
              <div className="relative">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste Job Description / Responsibilities here..."
                  className="w-full h-64 bg-black border border-editorial p-6 text-white font-light text-sm focus:outline-none focus:border-white transition-colors resize-none placeholder:text-editorial-dim/30"
                />
                <div className="absolute top-4 right-4 text-editorial-dim/20 pointer-events-none">
                  <ClipboardList size={24} />
                </div>
              </div>

              <button
                onClick={analyzeFit}
                disabled={isAnalyzing || !jobDescription.trim()}
                className="w-full py-6 bg-white text-black font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin" size={14} />
                    Analyzing Alignment...
                  </>
                ) : (
                  'Calculate Feasibility Score'
                )}
              </button>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-6 border border-red-900/50 bg-red-900/10 text-red-500 text-xs flex items-center gap-4"
                  >
                    <AlertCircle size={16} />
                    {error}
                  </motion.div>
                )}

                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-10 border border-editorial bg-white/[0.02]"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-10">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim mb-2">Feasibility Score</div>
                        <div className="text-7xl font-serif italic text-white">{result.score}<span className="text-2xl opacity-30">/100</span></div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-dim mb-2">Verdict</div>
                        <div className="text-2xl font-serif text-white">{result.feasibility}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-white mb-6 border-b border-editorial pb-2">Core Strengths</h4>
                        <ul className="space-y-4">
                          {result.strengths.map((s, i) => (
                            <li key={i} className="text-sm font-light text-editorial-dim flex items-start gap-3">
                              <CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-white mb-6 border-b border-editorial pb-2">Gap Analysis</h4>
                        <ul className="space-y-4">
                          {result.gaps.map((g, i) => (
                            <li key={i} className="text-sm font-light text-editorial-dim flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-editorial-accent rounded-full mt-2 shrink-0" />
                              {g}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-editorial">
                      <p className="text-sm italic leading-relaxed text-editorial-dim">
                        {result.summary}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
