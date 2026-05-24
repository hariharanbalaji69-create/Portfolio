/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessAdvisory from './components/BusinessAdvisory';
import TimelineBlog from './components/TimelineBlog';
import About from './components/About';
import Electives from './components/Electives';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CurrentProjects from './components/CurrentProjects';
import SoftwareFleet from './components/SoftwareFleet';
import BlogReports from './components/BlogReports';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, User, Layers, Code, Calendar, FileText } from 'lucide-react';

export default function App() {
  const [category, setCategory] = useState<'about' | 'timeline' | 'opportunities' | 'fleet' | 'blog'>('about');

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text selection:bg-editorial-text selection:text-black">
      <Header />
      <main>
        <Hero />
        
        {/* RELEVANCY CATEGORIZATION BANNER */}
        <div className="sticky top-[80px] z-40 bg-editorial-bg/95 border-y border-editorial backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Compass size={14} className="text-white/60 animate-spin-[spin_3s_linear_infinite]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-editorial-dim">
                  WORKSPACE DEPOT
                </span>
              </div>
              <div className="hidden lg:block h-4 w-[1px] bg-editorial-accent" />
              <div className="hidden lg:block text-xs font-serif italic text-editorial-dim/80">
                {category === 'about' && "Displaying credentials, quantitative competencies, and corporate career."}
                {category === 'timeline' && "Displaying chronological ledger, academic milestones, and professional checkpoints."}
                {category === 'opportunities' && "Displaying active advisory models, custom portfolios, and business partnerships."}
                {category === 'fleet' && "Displaying quantitative automation units, accounting playbook, and reconciliation simulators."}
                {category === 'blog' && "Displaying quantitative finance briefs, ledger whitepapers, and published research."}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-center md:justify-end">
              <button
                onClick={() => setCategory('about')}
                className={`relative flex items-center gap-2.5 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                  category === 'about'
                    ? 'bg-editorial-text text-black border-editorial-text font-semibold'
                    : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
                }`}
              >
                <User size={12} />
                About Me
                {category === 'about' && (
                  <motion.span layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-black ml-1" />
                )}
              </button>

              <button
                onClick={() => setCategory('timeline')}
                className={`relative flex items-center gap-2.5 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                  category === 'timeline'
                    ? 'bg-editorial-text text-black border-editorial-text font-semibold'
                    : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
                }`}
              >
                <Calendar size={12} />
                Timeline
                {category === 'timeline' && (
                  <motion.span layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-black ml-1" />
                )}
              </button>

              <button
                onClick={() => setCategory('opportunities')}
                className={`relative flex items-center gap-2.5 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                  category === 'opportunities'
                    ? 'bg-editorial-text text-black border-editorial-text font-semibold'
                    : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
                }`}
              >
                <Layers size={12} />
                Opportunities
                {category === 'opportunities' && (
                  <motion.span layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-black ml-1" />
                )}
              </button>

              <button
                onClick={() => setCategory('fleet')}
                className={`relative flex items-center gap-2.5 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                  category === 'fleet'
                    ? 'bg-editorial-text text-black border-editorial-text font-semibold'
                    : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
                }`}
              >
                <Code size={12} />
                Software Fleet
                {category === 'fleet' && (
                  <motion.span layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-black ml-1" />
                )}
              </button>

              <button
                onClick={() => setCategory('blog')}
                className={`relative flex items-center gap-2.5 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                  category === 'blog'
                    ? 'bg-editorial-text text-black border-editorial-text font-semibold'
                    : 'bg-transparent text-editorial-dim border-editorial/40 hover:text-white hover:border-editorial'
                }`}
              >
                <FileText size={12} />
                Blog
                {category === 'blog' && (
                  <motion.span layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-black ml-1" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Workspace Container */}
        <AnimatePresence mode="wait">
          {category === 'about' && (
            <motion.div
              key="about-focus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div id="about">
                <About />
              </div>
              <Electives />
              <Skills />
              <Experience />
            </motion.div>
          )}

          {category === 'timeline' && (
            <motion.div
              key="timeline-focus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <TimelineBlog />
            </motion.div>
          )}

          {category === 'opportunities' && (
            <motion.div
              key="opportunities-focus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <BusinessAdvisory />
              <CurrentProjects />
              <Projects />
            </motion.div>
          )}

          {category === 'fleet' && (
            <motion.div
              key="fleet-focus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <SoftwareFleet />
            </motion.div>
          )}

          {category === 'blog' && (
            <motion.div
              key="blog-focus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <BlogReports />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

