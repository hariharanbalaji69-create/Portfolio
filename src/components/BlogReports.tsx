import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Plus, 
  BookOpen, 
  Trash2, 
  Calendar, 
  Award, 
  Check, 
  Search, 
  Filter, 
  Edit3, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  X,
  User,
  Clock,
  Send,
  Download,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
  metrics?: string;
  isUserGenerated?: boolean;
}

interface EGuideChapter {
  title: string;
  content: string;
}

interface EGuideQuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

interface EGuide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  readingTime: string;
  difficulty: 'Intermediate' | 'Advanced' | 'Expert';
  chapters: EGuideChapter[];
  quiz: EGuideQuizQuestion[];
  tags: string[];
}

const E_GUIDES: EGuide[] = [
  {
    id: 'guide-sovereign-ai',
    title: 'Sovereign AI Infrastructure: The Enterprise Blueprint',
    subtitle: 'A strategic playbook for migrating enterprise workloads to sovereign clusters to stabilize margins.',
    description: 'An executive manual exploring the transition of AI and database workloads from public hyper-scalers to localized private clusters. Models operational margins and latency gains under strict sovereign data parameters.',
    author: 'Hariharan Balaji',
    readingTime: '25 min read',
    difficulty: 'Advanced',
    tags: ['Sovereign AI', 'Infrastructure Costing', 'Private Cloud', 'Enterprise CapEx'],
    chapters: [
      {
        title: 'Chapter 1: The Public Hyper-scaler Cost Penalty',
        content: `In the current post-2024 technology environment, public hyper-scalers (AWS, GCP, Azure) are suffering from margin saturation due to intensive compute demands. For enterprises, scaling LLMs and database replication servers inside these public tenants results in an invisible "compute tax."

Every outbound API call, relational join across multi-region boundaries, or model invocation is charged on a variable utility model. While convenient initially, this seat-plus-usage framework leads to severe corporate margin compression. At scale, operational expenditures (OpEx) for cloud databases can grow by up to **4x year-on-year**, completely outperforming linear revenue growth. 

To stabilize operating margins above 30%, technology architects must evaluate localized sovereign hardware structures that exchange continuous variable OpEx for predictable, depreciable capital expenditures (CapEx).`
      },
      {
        title: 'Chapter 2: Hardware Orchestration & Bare-Metal clusters',
        content: `Mitigating hyper-scaler overhead requires building or leasing dedicated bare-metal infrastructure. Unlike multi-tenant virtual environments, bare-metal clusters eliminate hyper-visor latency and give direct access to the underlying computing cores.

To model this transition, we evaluate:
1. **Compute Nodes:** Procuring clustered nodes equipped with modular H100 or local hardware equivalents.
2. **Local Storage Parity:** Utilizing redundant NVMe matrices connected via ultra-low-latency local switching.
3. **CapEx versus OpEx NPV:** A Net Present Value analysis demonstrates that transitioning a continuous 200-node database workload from standard public hyper-scalers to a 5-year depreciable lease on proprietary servers reduces cumulative infrastructure costs by **34.8%** over a 36-month horizon.`
      },
      {
        title: 'Chapter 3: Sovereign Decentralization & Data Privacy',
        content: `Data sovereignty is no longer just a regulatory compliance constraint; it is a primary competitive advantage. As enterprises deploy Agentforce or other autonomous workflows, feeding proprietary business logs and transaction records to external hyper-scalers poses severe privacy risks.

By establishing high-performance local servers within regulated boundaries, companies guarantee absolute data control. The operational parameters for secure sovereign hosting include:
- **Zero-Trust Token Enclaves:** Restricting model training access keys so that client records are completely unexposed.
- **Micro-regional Hubs:** Distributing localized nodes across specific regulatory zones (e.g., EU GDPR, India sovereign zones) to minimize international legal liabilities.
- **Proprietary Router Layers:** Building self-contained DNS and authentication gateways, rendering the entire database cluster silent to external crawling networks.`
      }
    ],
    quiz: [
      {
        question: 'What is the primary financial draw of migrating from public hyper-scalers to bare-metal sovereign clusters for scale workloads?',
        options: [
          'Completely eliminating the need for R&D departments',
          'Replacing volatile, high-growth variable OpEx with predictable, depreciable CapEx',
          'Bypassing national and federal tax audits entirely',
          'Increasing headcount to manage the physical servers'
        ],
        answerIndex: 1,
        explanation: 'Sovereign bare-metal clusters replace volatile, high-growth variable OpEx (utility-based public compute) with structured, depreciable CapEx (hardware leases/ownership), which stabilizes long-term margins.'
      },
      {
        question: 'Which metric was reported to reduce cumulative infrastructure costs by 34.8% in our Net Present Value (NPV) simulation?',
        options: [
          'Deploying more general seat-based licenses under public clouds',
          'Transitioning a continuous 200-node server workload to a 5-year depreciable proprietary lease',
          'Shifting all workloads to offshore third-party data broker networks',
          'Shutting down client database indexes to conserve electrical utility'
        ],
        answerIndex: 1,
        explanation: 'Transitioning a continuous 200-node database workload to a 5-year depreciable physical lease demonstrated a 34.8% reduction in total infrastructure costs under our NPV parameters.'
      }
    ]
  },
  {
    id: 'guide-ledger-parity',
    title: 'Advanced Ledger Parity & Reconciliation Handbook',
    subtitle: 'A programmatic and operational handbook for eliminating floating-point errors and managing sub-penny variances in high-frequency streams.',
    description: 'A detailed manual on designing double-entry systems for sub-penny financial streams. Covers binary representation errors, scaled-integer database fields, and bidirectional reconciliation validation loops.',
    author: 'Hariharan Balaji',
    readingTime: '18 min read',
    difficulty: 'Expert',
    tags: ['Ledger Audit', 'Data Integrity', 'Numerical Safety', 'HFT Reconciler'],
    chapters: [
      {
        title: 'Chapter 1: Floating-Point Decay in Ledgers',
        content: `In standard software architectures, programmers frequently leverage double-precision floating-point numbers (IEEE 754) to store transaction values. While suitable for simple scientific estimates, floating-point decimals introduce chronic, cumulative inaccuracies when applied to financial accounting ledgers.

For instance, due to binary base-2 representation limitations, the simple subtraction:
\`0.3 - 0.2\` returns \`0.09999999999999998\` in absolute JavaScript runtime instead of \`0.1\`.

When compiling high-frequency transaction streams representing millions of daily records, these minor micro-decimal rounding disparities aggregate into major balance sheet variances. This rounding decay is a common cause of reconciliation failure, resulting in unaccounted-for sub-penny leakage.`
      },
      {
        title: 'Chapter 2: Fixed-Point Arithmetic (Parity Core)',
        content: `To achieve 100% bookkeeping precision, a modern ledger must discard native floats. Instead, it must represent all monetary amounts using **Fixed-Point Scaling**.

Under this paradigm, every transaction amount is multiplied by a scaling coefficient to store values strictly as BigInts or Standard Integers inside the database schema.
- **Micro-Currency Unit scaling:** For USD, we multiply every amount by **1,000,000** (representing micro-cents). Thus, a transaction of \`$100.50\` is stored strictly as \`100500000\` integers.
- **Double-Entry Balance Constraint:** Validating total assets, liabilities, and equities strictly using integer math prevents any rounding variance of sub-penny fractions.

All calculation code operates on scaled integers initially, only scaling back down to standard floating decimals at the absolute final visual screen presentation layer.`
      },
      {
        title: 'Chapter 3: Bidirectional Reconciliation Streams',
        content: `Once a scaled-integer ledger baseline is active, the system executes continuous **Bidirectional Reconciliation**. This process verifies ledger integrity against external statement records (e.g. Stripe logs, bank clearing APIs).

The system maps outbound charges against inbound receipts using a stateful Delta Matrix:
- **Phase A (Schema Parsing):** Direct translation of external statements into standard ledger schemas.
- **Phase B (Transactional Matching):** Utilizing unique correlation hashes to match entries.
- **Phase C (Exception Isolation):** Flags any unmatched transactions or delta variations exceeding a zero-integer threshold.

Deploying this bidirectional engine enables real-time auditing, shortening average book-closing timelines from standard 5-day intervals down to mere fractions of a second.`
      }
    ],
    quiz: [
      {
        question: 'Why do IEEE 754 floating-point numbers cause leakage on high-frequency accounting ledgers?',
        options: [
          'They consume twice as much disk storage space as standard text columns',
          'Binary base-2 representations introduce tiny, cumulative rounding inaccuracies during basic math operations',
          'Hyper-scalers refuse to host databases containing float structures',
          'They automatically convert negative values into positive assets'
        ],
        answerIndex: 1,
        explanation: 'Tiny sub-decimal float inaccuracies (e.g. 0.3 - 0.2 rendering as 0.0999...) accumulate into noticeable balance variances when compiling high-frequency portfolios.'
      },
      {
        question: 'What scaling strategy does the "Parity Core" model recommend for precise USD transactions?',
        options: [
          'Storing numbers as visual strings containing commas',
          'Rounding every account value up to the nearest logical dollar',
          'Multiplying every amount by 1,000,000 to store values strictly as safe integers (micro-cents)',
          'Converting all currencies to Bitcoin before calculating totals'
        ],
        answerIndex: 2,
        explanation: 'Multiplying financial values by a large scalar like 1,000,000 allows all ledger steps to run on safe, integer-based math, avoiding float-point decay.'
      }
    ]
  },
  {
    id: 'guide-agentforce-deployer',
    title: 'The Agentforce Deployers Handbook',
    subtitle: 'A technical guide to configuring Salesforce Agentforce, optimizing prompt targets, and managing consumption-based API cost limits.',
    description: 'A practical handbook on defining deterministic boundaries for Salesforce autonomous agents, optimizing structured context pools, and managing token budgets to protect against high compute expenses.',
    author: 'Hariharan Balaji',
    readingTime: '15 min read',
    difficulty: 'Expert',
    tags: ['Agentforce', 'Salesforce AI', 'Cost Optimization', 'Prompt Engineering'],
    chapters: [
      {
        title: 'Chapter 1: Autonomous Agent Boundaries',
        content: `Salesforce Agentforce introduces autonomous AI agents designed to handle customer requests and ledger queries without hard-coded tree structures. However, giving an unstructured LLM agency over live account records poses significant risk.

To design safe agent environments:
- **Strict Guardrail Actions:** Define explicit metadata schemas representing what an agent CAN and CANNOT execute.
- **Verification Gates:** Require multi-factor human authentication for high-impact actions (e.g., initiating wire payouts or processing substantial refunds).
- **Deterministic Routing:** When confidence scores fall below **85%**, the agent must gracefully fallback and route to human experts with an integrated log.`
      },
      {
        title: 'Chapter 2: Financial Prompt Architectures',
        content: `Financial ledger agents require precise, zero-shot prompt structures. If an agent receives a generic, conversational context, it is prone to hallucination or inaccurate rounding assumptions.

We build context injection tables that supply the agent with structured factual records. Prior to querying the model:
1. Identify customer ID and query intent.
2. Retrieve exact ledger balances as scaled integers from our Parity Core database.
3. Inject balances alongside a system prompt enforcing the Rule of 40 mathematical bounds.

Example of a robust agent rule:
> "You are an automated treasury auditor. All calculations must be performed on integers. If balance sheet credits mismatch debits, throw an immediate ledger exception and do not proceed."`
      },
      {
        title: 'Chapter 3: Token Budget Limits we Manage',
        content: `With Salesforce's transitioning from legacy seat subscriptions to a consumption-oriented, per-use pricing model (charging per active agent session), monitoring cumulative API token budgets is critical.

A single recursive query loop where an agent fails to locate a balance can trigger dozens of model calls, incurring immense API costs within seconds.

Proactive cost-containment measures include:
- **Call-Cap Throttling:** Restrict any single session to a hard maximum of **5 autonomous model calls** before halting.
- **Session Duration Expiry:** Force-expire sessions that stay idle or loop continuously for more than **3 minutes**.
- **Real-Time Cost Audit Monitors:** Maintain a localized, persistent cost log tracker displaying cumulative daily API token expenditure across active departments.`
      }
    ],
    quiz: [
      {
        question: 'What is a critical fallback step when Agentforce confidence scores drop below 85%?',
        options: [
          'Force-terminating the entire corporate client contract with no logs',
          'The agent must gracefully transition the thread to a human specialist with unified transcripts',
          'Doubling the API call limits to try the search again',
          'Ignoring the user query'
        ],
        answerIndex: 1,
        explanation: 'Gracefully transferring the session to human analysts with context transcripts is the standard protocol to maintain strict transaction-handling safety.'
      },
      {
        question: 'Under consumption-based pricing models, how can enterprises prevent recursive loop cost spikes?',
        options: [
          'Using a hard limit cap, such as throttling sessions to a maximum of 5 autonomous model calls',
          'By completely disabling the agent after the first customer uses it',
          'Refusing to run the agent during standard working hours',
          'Setting local browser cookies to block internet connections'
        ],
        answerIndex: 0,
        explanation: 'Hard session throttling (e.g. limiting to 5 model calls per interaction) prevents looping processes from driving high, unchecked consumption charges.'
      }
    ]
  }
];

const INITIAL_REPORTS: BlogPost[] = [
  {
    id: 'report-cx-market',
    title: 'CX Support: Market Annual Report – SaaS Giants, Volatility Clusters & Pricing Disruption',
    category: 'Quantitative Research',
    summary: 'A systemic evaluation of customer experience sector leaders, modeling Salesforce, Zoho, Freshworks, LeadSquared, and Ameyo operations, financial dynamics, and server-pricing scenarios.',
    content: `## Executive Summary
This memorandum presents our findings on top enterprise performers in the Customer Experience (CX) sector. The focus spans Salesforce (Service Cloud, Agentforce), Zoho Corp (Desk, CRM), Freshworks (Freshdesk, Freshchat), LeadSquared (CRM and Automation), and Ameyo by Exotel (Omni VoiceBot). 

The report evaluates operational metrics, capital structure mutations, market volatility clusters, sovereign data infrastructure spending, and projects financial outcomes up to 2030 under fluctuating cloud compute costs.

---

## 1. Competitive Landscape Matrix (FY26)

| Metrics / Parameters | Salesforce | Zoho Corp | Freshworks | LeadSquared | Ameyo (Exotel) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Market Share** | 22% | 6% | 9% | 2% – 4% | 3% – 5% |
| **Primary Focus** | Profitability | Scale | Cost / Efficiency | Revenue Ops | Omnichannel |
| **Total Revenue** | $41.53 Billion | $1.48 Billion | $838.8 Million | $65M – $75M | $60M – $70M |
| **Projected Rev** | $45.40 Billion | $1.75 Billion | $958M – $964M | $85M+ | $80M+ |
| **YoY Growth** | ~9.6% | ~17.8% | ~15.0% | ~35% – 40% | ~25% – 30% |
| **Net WC Changes** | -$13.6B (Net WC) | +$225 Million | +$780 Million | Mod. Expansion | Stable Assets |
| **R&D Allocation** | 9.10% | 29.00% | 12.00% | GenAI Focus | Voice AI / NLP |
| **Marketing Spend** | 4.20% | 31.30% | 18.00% | Enterprise-g | Cross-selling |
| **Net Profit Change** | +4.50% | -5.60% | +21.90% | Scaling Up | Break-even |

---

## 2. Strategic Assessment & Asset Dynamics

### Salesforce (Enterprise Heavy)
Salesforce reported an operating income of **$8.3 billion** with margins exceeding **30%**. It utilizes a unique **-$13.6 billion negative working capital model** to fund intensive AI CapEx—specifically for **Agentforce** deployment—while shifting sales motions towards high-value enterprise accounts.

### Zoho Corp (Scale Focus)
Zoho crossed a critical **$1.48 billion revenue milestone** with **17.8% growth** and a **31.2% EBITDA margin**, comfortably outperforming the standard Rule of 40 framework. Profits are heavily re-invested into custom **Sovereign AI hardware infrastructure** and local data centers to maintain data sovereignty.

### Freshworks (Lean Optimization)
Freshworks projects FY26 revenues between **$958 million and $964 million**, keeping an adjusted free cash flow margin of **26.6%**. The corporate mandate transitions the organization from high-liquidity startup structures into lean asset optimization, focusing heavily on embedding the **Freddy AI Engine** across employee systems.

### LeadSquared & Ameyo (The Disruptors)
* **LeadSquared** targets a **$85M+ revenue horizon** (~40% growth) by targeting automated sales workgroups and GenAI integrations in high-volume regions (India, SEA, US).
* **Ameyo (by Exotel)** has secured sustainable profitability at the **₹500 crore threshold** by combining Voice AI R&D with a cross-selling offensive across the Exotel telephony pool.

---

## 3. Freshworks Balance Sheet Projections

Our forecasting for December 31, 2026, details a company transitioning from a cash-rich setup to an intensive operational deployment.

### Liquidity Constraints
* **Cash on Hand:** Projected to descend to **759.37**, a major drawdown from the 1,187.62 peak in 2023.
* **Current Liabilities:** All-time high of **608.349**.
* **Current Ratio:** Narrows to **1.74** (down from historic multi-year averages above 6.0).
* **Accumulated Deficit:** The Retained Earnings ledger is forecasted to improve substantially to **-3,368.43**, validating a consistent net-positive operational outcome.

---

## 4. Volatility Clusters & Pricing Transitions

Public equity markets reacted sharply to the friction between AI R&D expenditures and immediate profit conversions. We isolated major stock outliers:

\`\`\`
Salesforce (CRM) Outlier Clusters:
- 13/01/2026: -7.07% (Anxiety over initial Agentforce monetization)
- 09/04/2025:  8.68% (Validation of unified Data Cloud adoption)

Freshworks (FRSH) Outlier Clusters:
- 03/04/2025: -10.21% (Concerns surrounding R&D intensity)
- 11/02/2026: -16.38% (Announcements of lean restructuring & layoffs)
\`\`\`

### Pricing Model Paradigm Shift
To protect margins, both platforms are shifting from legacy seat-based subscription models to **consumption-based / per-use utility pricing**. While this coordinates clients' costs with actual output, it adds variance to corporate treasury inflows.

---

## 5. Server Pricing Disruption Scenarios (2025 - 2030)

As global hardware limits are reached, reduction in operational server pricing plays a deciding role in maintaining gross margins. We modeled two distinct operational trajectories:

### Scenario A: High-Compute Cost Saturation (Base Case)
In this model, massive LLM compute demands and high storage costs saturate profit margins, despite linear revenue growth.

| Metric ($ in Millions) | 2025 (Act) | 2026 (Y1) | 2027 (Y2) | 2028 (Y3) | 2029 (Y4) | 2030 (Y5) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Total Revenue** | $838.8 | $964.6 | $1,099.7 | $1,231.6 | $1,354.8 | $1,490.3 |
| **COGS (High Compute)** | $126.1 | $144.7 | $165.0 | $246.3 | $338.7 | $417.3 |
| **Gross Profit** | $712.7 | $819.9 | $934.7 | $985.3 | $1,016.1 | $1,073.0 |
| **Gross Margin %** | **85.0%** | **85.0%** | **85.0%** | **80.0%** | **75.0%** | **72.0%** |

### Scenario B: Optimized Server & Pricing Disruption (3% COGS Decline Loop)
In this model, increased server efficiency, regional localized compute, or a transition from cloud OpEx to proprietary CapEx drives structural optimization.

| Metric ($ in Millions) | 2025 (Act) | 2026 (Y1) | 2027 (Y2) | 2028 (Y3) | 2029 (Y4) | 2030 (Y5) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Total Revenue** | $838.8 | $964.6 | $1,099.7 | $1,231.6 | $1,354.8 | $1,490.3 |
| **COGS (Optimized)** | $126.1 | $144.7 | $165.0 | $160.1 | $169.4 | $178.8 |
| **Gross Profit** | $712.7 | $819.9 | $934.7 | $1,071.5 | $1,185.4 | $1,311.5 |
| **Gross Margin %** | **85.0%** | **85.0%** | **85.0%** | **87.0%** | **87.5%** | **88.0%** |

---

## Strategic Recommendation
1. **Localize Sovereignty:** Transitioning workloads from public cloud hyper-scalers (AWS, GCP, MS) to hybrid architectures can protect long-term margins as AI computation charges experience a **4x YoY increase**.
2. **Formulate Hybrid Workspaces:** Sovereign instances are key. Enterprises seeking privacy cannot bear the full costs of proprietary data center builds. Hybrid deployment offers a validated middle ground.`,
    date: 'May 23, 2026',
    readingTime: '7 min read',
    author: 'Hariharan Balaji',
    tags: ['SaaS Analytics', 'CX Market Report', 'Valuation Outliers', 'Compute Forecasting'],
    metrics: 'Salesforce EBIT > 30%, Zoho Growth 17.8%'
  },
  {
    id: 'report-salesforce-crm-trends',
    title: 'CRM Report: 2026 Strategic Trends – Salesforce Operational Audit',
    category: 'Ledger Audit',
    summary: 'A thorough corporate evaluation of Salesforce’s 2026 performance under their "Lean Ops" strategy, inspecting Rule of 40 adherence, debt structure mutations, capital stresses, and AI consolidation premiums.',
    content: `## Executive Overview & "Rule of 40" Check
This operational report assesses the financial and strategic performance of Salesforce in the 2026 fiscal year. Applying the standard Rule of 40 framework (YoY Revenue Growth + Operating Margin), the company registered a Score of **31.05**, placing it slightly below the premium 40% benchmark.

Despite this, Salesforce exhibited remarkable bottom-line expansion:
- **Net Profit Margin (NPM):** Jumped to **17.96%** (up from a near-breakeven **0.66%** in 2023).
- **Remaining Performance Obligations (RPO):** Reached **$63.4 Billion** (+11% YoY), securing multi-year revenue predictability due to low (8%) enterprise churn.
- **Prepaid Assets Outlay:** Surged by **+282.5%**, indicating intensive upfront outlays to secure AWS infrastructure capacity for Agentforce.

---

## 1. Income Statement & Efficiency Analysis

Deploying a strict "Lean Ops" strategy, Salesforce successfully lowered its operating expenditure floor across all key categories over a three-year cycle:

| Metric | 2023 | 2024 | 2025 | 2026 (Projected) |
| :--- | :---: | :---: | :---: | :---: |
| **Gross Profit %** | 73.33% | 75.49% | 77.19% | 77.67% |
| **Operating Margin %** | 5.92% | 17.21% | 20.22% | 21.47% |
| **Operating Exp %** | 67.41% | 58.28% | 56.96% | 56.20% |

Operating expenditures (OpEx) compressed from **67.41%** to **56.20%**, driving immediate gross margin expansion towards **77.67%**. This bottom-line turnaround is largely attributed to severe headcount discipline (including a ~10% lay-off cycle) and streamlined general and administrative flows.

---

## 2. Cash Conversion & Working Capital Stresses

While profitability indicators are exceptionally healthy, the balance sheet exhibits significant capital stress under the new operational blueprint:

### The Accounts Receivable Drag
* **Receivables Growth:** Surged by **+77.30%**, pacing significantly faster than top-line revenue.
* **Collection Efficiency:** Only **58.97%** of Outstanding Receivables were successfully collected within expected timelines.
* **Liquidity Inflow Pressure:** This collection lag serves as a major drag on active working capital.

$$\Delta_{Receivables} = -\$2.16\text{ Billion}$$

If Salesforce fails to optimize collections (using standard DSO controls), this persistent lag will put considerable pressure on cash runways.

---

## 3. Debt-Funded Capital Restructurings & AI Buyouts

Instead of diluting equity holders or completely draining liquid reserves, Salesforce pivoted to a leverage-funded growth framework to finance massive AI acquisitions:

- **Long-Term Debt Issuance:** Doubled year-over-year, rising by **$6.0 Billion**.
- **Change in Working Capital:** **$781 Million**.
- **Acquisition Premium (M&A):** Average premium of **76.0%** (calculated as *Goodwill-Invested Capital* against *Invested Capital* of **$73.58 Billion**).
- **AI Purchases of Business:** Capital outlays of **$9.26 Billion**, placing **$57.94 Billion** in Goodwill on the asset register.

This highly leveraged capital structure offers high-yield returns if Agentforce scaling is successful. However, the core vulnerability remains the complexity of integrating these buyouts and managing scheduled debt servicing if top-line growth begins to stall.

---

## 4. Debt Servicing & Operational Health Indicators

Despite the debt expansion, Salesforce maintains strong coverage ratios that guarantee near-term solvability:

- **Interest Coverage Ratio:** **29.6x** (Earnings Before Interest & Taxes relative to Interest Expense).
- **Debt Service Coverage Ratio:** **11.6x** (Free Cash Flow relative to scheduled debt payments).

These standard balance sheet ratios confirm that Salesforce has plenty of financial runway to absorb the **$6.0 Billion** debt increase. Furthermore, Free Cash Flow stands at a highly efficient **$14.4 Billion** on **$41.53 Billion** of total annual revenue.

---

## Core Takeaways
1. **Consolidated Value Proposition:** Incorporating niche AI products into a unified platform (Customer 360) enhances Salesforce's pricing power and keeps Churn low at **8%**.
2. **Cost Discipline First:** Prioritize margin preservation in mature systems before chasing inorganic growth.
3. **M&A Integration Execution:** Salesforce's primary threat is the organizational integration fatigue of its many AI acquisitions.`,
    date: 'May 23, 2026',
    readingTime: '6 min read',
    author: 'Hariharan Balaji',
    tags: ['Salesforce Audit', 'CRM Trends', 'Debt Restructuring', 'M&A Premium'],
    metrics: 'NPM: 17.96%, FCF: $14.4B'
  },
  {
    id: 'report-life-weights',
    title: 'Weights, Math, and Your Everyday Life – Is Your Reality Beating the Benchmark?',
    category: 'Macroeconomics',
    summary: 'An exploration of life weight optimization using Modern Portfolio Theory, re-engineering standard budgets into high-alpha generators aligned to a non-negotiable Happiness Score.',
    content: `## Executive Overview

If you’ve spent any time in finance, you’re likely familiar with Modern Portfolio Theory and the mechanics of a weighted portfolio. You analyze individual assets, adjust for volatility, assign a specific percentage weight to each holding, and try to maximize your risk-adjusted return—the elusive Sharpe Ratio.

But why stop at equities?

If you view your life as a fund, your time, energy, and capital are your investable assets. Most people let their life-weights drift on autopilot, ending up heavily over-allocated to noise and radically under-allocated to things that actually drive long-term structural performance.

Let’s re-engineer the asset allocation of daily life and build a personal framework that actually beats the benchmark.

---

## 1. Asset Allocation: The Life Portfolio

In a standard financial portfolio, you might split your capital across Large-Cap Equities, Fixed Income, and Alternatives. In the Life Portfolio, your core asset classes scale into **Work, Finances, Hobbies, and Core Priorities**. To optimize this fund, every single allocation must be explicitly benchmarked against a single, non-negotiable metric: **The Happiness Score**.

### THE LIFE PORTFOLIO ALLOCATION MODEL

| Core Asset Class | Weight Allocation | Strategic Operational Character |
| :--- | :---: | :--- |
| **Work** | **30%** | The Core Engine. High-yielding asset. Requires maintenance but capitalization-weights your operations. |
| **Finances** | **40%** | The Growth Engine. Capital structure. Actively optimized to secure future structural autonomy. |
| **Hobbies** | **15%** | Alpha Generator. Custom asymmetric bets. Delivers massive margins relative to active weight allocation. |
| **Core Priorities** | **15%** | Alpha Generator. High-conviction focus zones that maximize long-term structural returns. |

### Asset Class Breakthroughs
* **Work (The Core Engine):** This is your high-yielding asset. It requires systematic maintenance and time capital, but it effectively capitalization-weights the rest of your operations.
* **Finances (The Growth Engine):** Your capital structure. It shouldn't just sit in cash eroding due to inflation; it needs to be actively optimized to buy you future structural autonomy.
* **Hobbies & Priorities (The Alpha Generators):** These are your high-conviction asymmetric bets. They might take up a smaller percentage of your total weight, but when properly selected based on your unique profile, their return on investment (ROI) to your Happiness Score is massive.

---

## 2. Setting Your Financial Weights: A Study in Low Overhead

Here is where benchmarking becomes incredibly handy. To optimize your financial weights, you need a general checklist of money going out versus money coming in. When you strip away external expectations, an optimized, low-overhead capital structure can become beautifully streamlined:

| Budget Category | Weight Allocation | Tactical Strategy |
| :--- | :---: | :--- |
| **Fixed Overhead (Housing)** | **0%** | Living rent-free. Absolute baseline asset preservation. |
| **Transport** | **Minimal** | Utilizing a scooter for daily local transit; cars are high-depreciation, high-maintenance assets kept strictly for edge-case utility. |
| **Health & Commitments** | **Low / Fixed** | Gym and fitness memberships form the primary recurring line items. Food is kept lean, highly nutritious, and viewed as a health supplement. |
| **Tech & Infrastructure** | **Targeted Investment** | Active capital is directed toward software—both the tools required to build professional architectures and systems, and software needed for low-cost entertainment. |
| **The Surplus** | **MAX WEIGHT** | Because operational overhead is aggressively minimized, the vast majority of cash flow is diverted straight into growth vehicles. |

By ruthlessly reducing the weight of low-ROI status assets (expensive lease cars, high-frequency travel, draining social obligations), you maximize your investable surplus without lowering your happiness score. In fact, you raise it by eliminating unnecessary operational volatility.

---

## 3. Where is Your Surplus Growing?

When your cash flow checklist leaves you with a heavy surplus, you have a fiduciary duty to your future self to put it to work. If you don't want to actively manage a portfolio—downloading daily price feeds, adjusting for volatility, and forecasting individual stock gains—you need to outsource it cleanly.

> **A Golden Rule for Passive Allocators:** If you are seeking a managed fund to park your surplus, look for structural alignment. Seek out high-performing, agile funds or managers that operate on a performance-fee basis—meaning **they only take a cut of the gains they actually generate for you**. If they don't generate alpha, they don't get paid. That is how you align incentives.

---

## 4. Rebalance Your Fund

Is your current life portfolio overweighted in high-stress, low-return activities? Are your financial inflows leaking into high-overhead expenses that don't actually move the needle on your Happiness Score? It might be time for a comprehensive rebalancing.

Stay tuned for upcoming deep-dives into different financial products and tools you can utilize to optimize your capital.

Want to audit your own financial framework?
Contact me today for a comprehensive evaluation of your current financials, and let’s build a data-driven structure tailored to your life.`,
    date: 'May 24, 2026',
    readingTime: '5 min read',
    author: 'Hariharan Balaji',
    tags: ['Portfolio Allocation', 'Modern Portfolio Theory', 'Happiness Score', 'Low Overhead'],
    metrics: 'Overhead: 0%, Cash Surplus: Max'
  }
];

export default function BlogReports() {
  const [reports, setReports] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeReport, setActiveReport] = useState<BlogPost | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Form states for a new report
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Quantitative Research');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [metrics, setMetrics] = useState('');
  const [authorName, setAuthorName] = useState('Hariharan Balaji');

  // SubTab configuration: reports vs. eguides
  const [activeSubTab, setActiveSubTab] = useState<'reports' | 'guides'>('reports');
  
  // EGuide states
  const [activeGuide, setActiveGuide] = useState<EGuide | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [guidesProgress, setGuidesProgress] = useState<Record<string, number>>({});
  
  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizQuestionIdx, setCurrentQuizQuestionIdx] = useState(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('hari_blog_reports_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const hasLifeWeights = parsed.some((r: any) => r.id === 'report-life-weights');
        if (!hasLifeWeights) {
          const freshReport = INITIAL_REPORTS.find(r => r.id === 'report-life-weights');
          if (freshReport) {
            const updated = [freshReport, ...parsed];
            setReports(updated);
            localStorage.setItem('hari_blog_reports_v3', JSON.stringify(updated));
          } else {
            setReports(parsed);
          }
        } else {
          setReports(parsed);
        }
      } catch (e) {
        setReports(INITIAL_REPORTS);
      }
    } else {
      setReports(INITIAL_REPORTS);
      localStorage.setItem('hari_blog_reports_v3', JSON.stringify(INITIAL_REPORTS));
    }

    const savedProgress = localStorage.getItem('hari_eguides_progress_v1');
    if (savedProgress) {
      try {
        setGuidesProgress(JSON.parse(savedProgress));
      } catch (e) {
        setGuidesProgress({});
      }
    }
  }, []);

  const updateGuideProgress = (guideId: string, chapterIdx: number) => {
    const newProgress = {
      ...guidesProgress,
      [guideId]: Math.max(guidesProgress[guideId] || 0, chapterIdx + 1)
    };
    setGuidesProgress(newProgress);
    localStorage.setItem('hari_eguides_progress_v1', JSON.stringify(newProgress));
  };

  const saveReports = (newReports: BlogPost[]) => {
    setReports(newReports);
    localStorage.setItem('hari_blog_reports_v3', JSON.stringify(newReports));
  };

  const handleCreateReport = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !summary || !content) {
      alert('Please fill out all required fields: Title, Summary, and Content.');
      return;
    }

    const words = content.split(/\s+/).length;
    const computedReadingTime = `${Math.ceil(words / 150)} min read`;
    const formattedTags = tags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const newReport: BlogPost = {
      id: `report-user-${Date.now()}`,
      title,
      category,
      summary,
      content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readingTime: computedReadingTime,
      author: authorName || 'Hariharan Balaji',
      tags: formattedTags.length > 0 ? formattedTags : ['User Draft', 'Advisory Brief'],
      metrics: metrics || undefined,
      isUserGenerated: true
    };

    const updated = [newReport, ...reports];
    saveReports(updated);

    // Reset Form
    setTitle('');
    setSummary('');
    setContent('');
    setTags('');
    setMetrics('');
    setIsPublishing(false);
    
    setSuccessMessage('Report successfully audited and published list.');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleDeleteReport = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this published report?')) {
      const updated = reports.filter(r => r.id !== id);
      saveReports(updated);
      if (activeReport?.id === id) {
        setActiveReport(null);
      }
    }
  };

  // Extract all categories
  const categoriesList = ['All', 'Quantitative Research', 'Ledger Audit', 'Macroeconomics', 'Tech Infrastructure'];

  // Filter conditions
  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          report.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          report.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || report.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog-reports" className="bg-editorial-bg py-20 border-b border-editorial overflow-hidden min-h-[75vh]">
      <div className="section-container">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim block mb-4">
              05 / Research Ledger & Advisory Bulletins
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] italic text-white font-light">
              Advisory Publications
            </h2>
            <p className="text-xs font-light text-editorial-dim leading-relaxed max-w-xl mt-2">
              A workspace interface to audit, publish, and inspect professional reports, modeling outputs, and ledger reconciliation whitepapers. Fully stateful with persistent storage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsPublishing(!isPublishing)}
              className="flex items-center gap-2 px-6 py-3 bg-[#f59e0b] hover:bg-amber-600 text-black font-semibold font-mono text-[9px] uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              <Plus size={13} className="stroke-[3]" />
              {isPublishing ? 'Cancel Draft' : 'Publish Report'}
            </button>
          </div>
        </div>

        {/* SUB-SECTION TOGGLE */}
        <div className="flex border-b border-editorial mb-8">
          <button
            onClick={() => { setActiveSubTab('reports'); setSearchQuery(''); }}
            className={`px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] relative transition-colors cursor-pointer ${
              activeSubTab === 'reports' ? 'text-white font-medium' : 'text-editorial-dim hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText size={13} />
              Research Ledger ({reports.length})
            </div>
            {activeSubTab === 'reports' && (
              <motion.div layoutId="subTabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b]" />
            )}
          </button>
          <button
            onClick={() => { setActiveSubTab('guides'); }}
            className={`px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] relative transition-colors cursor-pointer ${
              activeSubTab === 'guides' ? 'text-white font-medium' : 'text-editorial-dim hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={13} />
              E-Guides & Playbooks ({E_GUIDES.length})
            </div>
            {activeSubTab === 'guides' && (
              <motion.div layoutId="subTabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b]" />
            )}
          </button>
        </div>

        {/* NOTIFICATION SENSOR */}
        {successMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono flex items-center gap-3 decoration-clone"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Sparkles size={14} />
            <span>{successMessage}</span>
          </motion.div>
        )}

        {/* DRAFT PUBLISHING INTERFACES */}
        <AnimatePresence>
          {isPublishing && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mb-12 border border-editorial bg-[#141414]/90 p-6 md:p-8 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between pb-6 border-b border-editorial/60 mb-6">
                <div className="flex items-center gap-3">
                  <Edit3 size={16} className="text-[#f59e0b]" />
                  <h3 className="font-serif text-lg italic text-white font-normal">
                    Draft Report Terminal
                  </h3>
                </div>
                <button 
                  onClick={() => setIsPublishing(false)}
                  className="p-1 hover:bg-white/5 border border-transparent hover:border-editorial text-editorial-dim hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleCreateReport} className="grid md:grid-cols-2 gap-6">
                {/* Left Side fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                      Report Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Multidimensional Variance Analysis..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-black/60 border border-editorial px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] focus:bg-black transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                        Classification <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-black/60 border border-editorial px-3 py-3 text-xs text-zinc-300 focus:outline-none focus:border-[#f59e0b] cursor-pointer"
                      >
                        <option value="Quantitative Research">Quantitative Research</option>
                        <option value="Ledger Audit">Ledger Audit</option>
                        <option value="Macroeconomics">Macroeconomics</option>
                        <option value="Tech Infrastructure">Tech Infrastructure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                        Author Name
                      </label>
                      <input
                        type="text"
                        placeholder="Hariharan Balaji"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="w-full bg-black/60 border border-editorial px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                      Brief Abstract / Summary <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      placeholder="A short one-sentence summarizing the thesis statement and econometric conclusions..."
                      rows={3}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full bg-black/60 border border-editorial px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] focus:bg-black transition-all resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                        Quantitative metrics
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. R²=0.98, t-stat=4.6"
                        value={metrics}
                        onChange={(e) => setMetrics(e.target.value)}
                        className="w-full bg-black/60 border border-editorial px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] focus:bg-black transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Risk, Math, Ledger"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="w-full bg-black/60 border border-editorial px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f59e0b] focus:bg-black transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side fields (Content Area) */}
                <div className="flex flex-col h-full">
                  <label className="block font-mono text-[8px] uppercase tracking-widest text-zinc-400 mb-2">
                    Full Scientific Content (Markdown friendly) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    placeholder="## Report Section 1
Type your complete quantitative findings, double-entry mathematical formulations, and structured matrices here... "
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full flex-grow bg-black/60 border border-editorial px-4 py-3 text-xs text-white font-mono focus:outline-none focus:border-[#f59e0b] focus:bg-black transition-all min-h-[220px]"
                  />

                  <div className="pt-4 flex justify-end gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsPublishing(false)}
                      className="px-5 py-2.5 border border-editorial text-editorial-dim hover:text-white text-[9px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-zinc-200 text-black font-semibold font-mono text-[9px] uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      <Send size={11} />
                      Commit Report
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {activeSubTab === 'reports' ? (
          <>
            {/* SEARCH AND FILTER WORKSPACE */}
            <div className="border border-editorial bg-[#101010]/80 p-5 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search bar input */}
              <div className="relative flex-grow max-w-lg">
                <span className="absolute inset-y-0 left-3.5 flex items-center text-zinc-500">
                  <Search size={14} />
                </span>
                <input
                  type="text"
                  placeholder="Query reports by tag, title, or index summary..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/50 border border-editorial/80 px-10 py-2.5 text-xs text-white focus:outline-none focus:border-[#f59e0b] transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-3.5 flex items-center text-zinc-400 hover:text-white"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* Filters List */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 mr-2 flex items-center gap-1">
                  <Filter size={10} /> Mode:
                </span>
                {categoriesList.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 font-mono text-[9px] uppercase tracking-wide border transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-white/10 text-[#f59e0b] border-[#f59e0b]'
                        : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* REPORTS GRID */}
            {filteredReports.length === 0 ? (
              <div className="border border-dashed border-editorial/60 py-20 text-center">
                <FileText size={32} className="mx-auto text-editorial-dim/60 mb-3" />
                <h4 className="font-serif italic text-white text-lg font-light">No audited reports match constraints</h4>
                <p className="text-xs text-editorial-dim mt-1">Clear search query or publish a new report above.</p>
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="mt-4 px-4 py-2 bg-white/[0.04] border border-editorial text-[9px] font-mono uppercase tracking-wider text-white hover:bg-white/[0.08]"
                  >
                    Reset Engine Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    onClick={() => setActiveReport(report)}
                    className="group border border-editorial bg-[#121212]/40 hover:bg-[#161616]/60 transition-all duration-300 cursor-pointer p-6 flex flex-col justify-between h-[300px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#f59e0b] bg-amber-500/5 px-2 py-0.5 border border-amber-500/10">
                          {report.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[8px] text-zinc-500 uppercase">
                            {report.readingTime}
                          </span>
                          {report.isUserGenerated && (
                            <button
                              onClick={(e) => handleDeleteReport(report.id, e)}
                              className="p-1 hover:bg-neutral-800 text-red-400 rounded transition-all hover:text-red-300 block"
                              title="Delete report"
                            >
                              <Trash2 size={11} />
                            </button>
                          )}
                        </div>
                      </div>

                      <h4 className="font-serif italic text-white text-base group-hover:text-[#f59e0b] transition-colors leading-snug line-clamp-2">
                        {report.title}
                      </h4>
                      
                      <p className="text-[11px] font-light text-editorial-dim leading-relaxed mt-3 line-clamp-3">
                        {report.summary}
                      </p>
                    </div>

                    <div>
                      {/* Performance Indicators */}
                      {report.metrics && (
                        <div className="mb-4 flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 w-fit rounded-none">
                          <TrendingUp size={10} />
                          <span>{report.metrics}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-editorial/40">
                        <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500">
                          <Calendar size={11} />
                          <span>{report.date}</span>
                        </div>
                        <span className="flex items-center text-[9px] font-mono text-zinc-400 group-hover:text-amber-100 transition-colors uppercase gap-1 shrink-0">
                          Inspect Report <ChevronRight size={11} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            {/* E-guides banner */}
            <div className="p-6 border border-[#f59e0b]/20 bg-amber-500/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="font-serif italic text-lg text-white font-medium flex items-center gap-2">
                  <Sparkles size={16} className="text-[#f59e0b]" /> Interactive Advisory Handbooks
                </h3>
                <p className="text-xs text-editorial-dim font-light max-w-2xl leading-relaxed">
                  Curated strategic study guides mapping enterprise operational patterns, sub-penny double-entry reconciliation ledgers, and Agentforce architectures. Track your lesson progress and acquire functional certification.
                </p>
              </div>
              <div className="font-mono text-[10px] text-zinc-500 border border-editorial px-4 py-2.5 bg-black/40 text-center md:text-right shrink-0">
                ACTIVE COVERS: {E_GUIDES.length} / COMPLETED: {Object.keys(guidesProgress).filter(k => guidesProgress[k] >= (E_GUIDES.find(g => g.id === k)?.chapters.length || 999)).length}
              </div>
            </div>

            {/* E-GUIDES GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {E_GUIDES.map((guide) => {
                const currentProgress = guidesProgress[guide.id] || 0;
                const totalChapters = guide.chapters.length;
                const progressPercent = Math.round((currentProgress / totalChapters) * 100);
                const isCompleted = currentProgress >= totalChapters;

                return (
                  <div
                    key={guide.id}
                    className="group border border-editorial bg-[#121212]/40 hover:bg-[#161616]/60 transition-all duration-300 p-6 flex flex-col justify-between h-[360px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border ${
                          guide.difficulty === 'Expert' 
                            ? 'text-rose-400 bg-rose-400/5 border-rose-400/10'
                            : 'text-amber-400 bg-amber-400/5 border-amber-400/10'
                        }`}>
                          {guide.difficulty} GUIDE
                        </span>
                        <span className="font-mono text-[8px] text-zinc-500 uppercase">
                          {guide.readingTime}
                        </span>
                      </div>

                      <h4 className="font-serif italic text-white text-lg group-hover:text-[#f59e0b] transition-colors leading-snug line-clamp-2">
                        {guide.title}
                      </h4>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mt-1">
                        By {guide.author}
                      </p>
                      
                      <p className="text-[11px] font-light text-editorial-dim leading-relaxed mt-3 line-clamp-3">
                        {guide.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-editorial/40">
                      {/* Progress bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[8px] font-mono text-zinc-400">
                          <span>Reading completion</span>
                          <span className={isCompleted ? 'text-emerald-400 font-semibold' : ''}>
                            {isCompleted ? 'Completed (100%)' : `${currentProgress} / ${totalChapters} Chapters (${progressPercent}%)`}
                          </span>
                        </div>
                        <div className="h-1 bg-editorial/40 w-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${isCompleted ? 'bg-emerald-400' : 'bg-[#f59e0b]'}`} 
                            style={{ width: `${progressPercent}%` }} 
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveGuide(guide);
                          // Determine starting chapter: either currentProgress (which is chapterIndex + 1), bounded
                          const resumeIdx = Math.min(Math.max(0, currentProgress - 1), totalChapters - 1);
                          setActiveChapterIndex(resumeIdx);
                          setQuizStarted(false);
                          setShowQuizResult(false);
                          setSelectedAnswerIdx(null);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-black hover:bg-zinc-200 text-[10px] font-mono uppercase tracking-[0.1em] transition-all font-semibold cursor-pointer group-hover:bg-[#f59e0b] group-hover:text-black"
                      >
                        <BookOpen size={11} />
                        {currentProgress > 0 ? (isCompleted ? "Re-read Handbook" : "Resume Playbook") : "Open Handbook"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FOCUSED DEEP READING VIEW (LIGHTBOX MODAL) */}
        <AnimatePresence>
          {activeReport && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReport(null)}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              {/* Escape control button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveReport(null);
                }}
                className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 hover:bg-white text-white hover:text-black transition-all rounded-full cursor-pointer z-[110]"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.96, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.96, y: -15, opacity: 0 }}
                transition={{ type: "spring", damping: 24, stiffness: 280 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[90vh] bg-editorial-bg border border-editorial rounded-none overflow-y-auto cursor-default flex flex-col scrollbar-thin scrollbar-thumb-editorial"
              >
                {/* Visual Header block */}
                <div className="p-8 border-b border-editorial bg-[#131313]">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#f59e0b] bg-amber-500/10 border border-[#f59e0b]/20 px-3 py-1">
                      {activeReport.category}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400 bg-white/[0.04] border border-editorial px-2 py-1">
                      {activeReport.readingTime}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 bg-white/[0.01] px-2 py-1">
                      Ref: {activeReport.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-serif text-[24px] md:text-[32px] italic text-white leading-tight mb-4">
                    {activeReport.title}
                  </h3>

                  <div className="flex flex-wrap items-center justify-between pb-2 gap-4">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <User size={12} className="text-zinc-500" />
                        <span className="font-mono text-[10px] uppercase text-zinc-300">
                          {activeReport.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-zinc-500" />
                        <span className="font-mono text-[10px] text-zinc-400">
                          Published: {activeReport.date}
                        </span>
                      </div>
                    </div>

                    {activeReport.metrics && (
                      <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1">
                        <Award size={12} />
                        <span>Key Metric: {activeReport.metrics}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technical Markdown-rendered Body */}
                <div className="p-8 md:p-10 flex-grow text-sm font-light text-zinc-300 leading-relaxed md:leading-loose whitespace-pre-line border-b border-editorial selection:bg-neutral-800">
                  {/* Let's render lines with support for basic markdown headings or code-blocks */}
                  {activeReport.content.split('\n').map((line, idx) => {
                    if (line.startsWith('## ')) {
                      return (
                        <h4 key={idx} className="font-serif italic text-white text-xl mt-8 mb-4 border-b border-editorial/40 pb-2">
                          {line.replace('## ', '')}
                        </h4>
                      );
                    }
                    if (line.startsWith('### ')) {
                      return (
                        <h5 key={idx} className="font-sans font-medium text-white text-sm uppercase tracking-wider mt-6 mb-3">
                          {line.replace('### ', '')}
                        </h5>
                      );
                    }
                    if (line.startsWith('- ')) {
                      return (
                        <li key={idx} className="ml-6 list-disc text-editorial-dim my-1.5 pl-1.5">
                          {line.replace('- ', '')}
                        </li>
                      );
                    }
                    if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
                      return (
                        <li key={idx} className="ml-6 list-decimal text-editorial-dim my-1.5 pl-1.5">
                          {line.substring(3)}
                        </li>
                      );
                    }
                    if (line.startsWith('```')) {
                      if (line === '```' || line.includes('```')) {
                        return null; // Skip raw code identifiers but format inside block
                      }
                    }
                    // Capture a simple code block structure if containing specific characters or stats format
                    if (line.includes(': ') && (line.includes('Coefficient') || line.includes('Statistic') || line.includes('Error') || line.includes('Reconciliation'))) {
                      return (
                        <div key={idx} className="bg-black/50 border-l-2 border-[#f59e0b] p-3 text-xs font-mono text-zinc-400 my-4 ml-2">
                          {line}
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="mb-4">
                        {line}
                      </p>
                    );
                  })}
                </div>

                {/* Footer Controls of the Reader */}
                <div className="p-6 bg-black/60 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 w-full sm:w-auto">
                    {activeReport.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono border border-editorial bg-white/[0.02] px-2 py-0.5 text-editorial-dim">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => {
                        // Simulate PDF audit download
                        const el = document.createElement('a');
                        const file = new Blob([activeReport.content], {type: 'text/plain'});
                        el.href = URL.createObjectURL(file);
                        el.download = `${activeReport.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_ledger.txt`;
                        document.body.appendChild(el);
                        el.click();
                        document.body.removeChild(el);
                      }}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 border border-editorial text-zinc-300 hover:text-white hover:bg-white/5 font-mono text-[9px] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Download size={11} />
                      Download Dossier (.TXT)
                    </button>
                    <button
                      onClick={() => setActiveReport(null)}
                      className="px-6 py-2.5 bg-white text-black hover:bg-zinc-200 text-[9px] font-mono uppercase tracking-wider transition-colors font-semibold cursor-pointer"
                    >
                      Close Report
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
