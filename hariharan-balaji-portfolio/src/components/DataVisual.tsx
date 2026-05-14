import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { TrendingUp, Shield, Target, Briefcase } from 'lucide-react';

const stages = [
  {
    id: 'numbers',
    elements: ['∑', 'Δx', '∫', 'σ²', '∞', 'Φ', 'θ', 'λ'],
    subtitle: 'RAW QUANTITATIVE INPUT'
  },
  {
    id: 'context',
    elements: ['LINEARITY', 'STOCHASTIC', 'REGRESSION', 'PROBABILITY', 'COVARIANCE', 'MODELING'],
    subtitle: 'ANALYTICAL FRAMEWORK'
  },
  {
    id: 'money',
    elements: ['$', '£', 'STRATEGY', 'ALPHA', '€', 'VALUE'],
    subtitle: 'STRATEGIC OUTCOME'
  }
];

export default function DataVisual() {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden bg-editorial-bg">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#E0D8D0 1px, transparent 1px), linear-gradient(90deg, #E0D8D0 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage}
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {stages[currentStage].elements.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-editorial-text font-serif italic text-lg md:text-xl flex items-center justify-center"
              >
                {el}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            className="h-px bg-editorial-accent"
          />

          <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-editorial-dim">
            {stages[currentStage].subtitle}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-editorial-text/10 rounded-full"
            animate={{
              x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
              y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}
