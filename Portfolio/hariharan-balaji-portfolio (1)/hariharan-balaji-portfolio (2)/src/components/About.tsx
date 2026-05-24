import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Award, GraduationCap, Mail, ShieldCheck, Briefcase, FileSpreadsheet, Globe, CheckCircle2, Eye, X } from 'lucide-react';
// @ts-ignore
import profileAvatar from '../assets/images/regenerated_image_1779475075088.jpg';
// @ts-ignore
import profileBanner from '../assets/images/regenerated_image_1779475090651.png';

export default function About() {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const galleryItems = [
    {
      title: "Quantitative Modeling & Forecasting",
      category: "Analytics Engine",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
      description: "Visualizing complex multidimensional risk scenarios, real-time variance modeling, and predictive financial time-series.",
      specs: "6-Factor ANOVA, Monte Carlo projection charts"
    },
    {
      title: "Global Financial Horizon & Infrastructure",
      category: "Corporate Treasuries",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      description: "Observing dynamic capital market movements, liquidity runways, and treasury pipelines across international hubs.",
      specs: "CFA study paths, global treasury alignment"
    },
    {
      title: "Advanced Database Architecture & Normalization",
      category: "Logical Data Structuring",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      description: "Systematic data cleansing and flat schema normalization to transform chaotic raw CSV logs into structured SQL assets.",
      specs: "Schema integrity, ETL pipelines, lookups"
    },
    {
      title: "Academic Research & Econometrics Quarters",
      category: "Banking & Finance Studies",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      description: "Continuous development of advanced portfolio allocation and risk models rooted in University of Birmingham research.",
      specs: "Econometric forecasting, thesis modeling"
    }
  ];

  const profileDetails = {
    name: "Hariharan Balaji",
    title: "Quantitative Finance Specialist & Data Engine Developer",
    location: "United Kingdom (Available for Global Remote)",
    nationality: "Indian National / UK Resident",
    email: "hariharanbalaji.a@outlook.com",
    avatar: profileAvatar,
    banner: profileBanner,
    stats: [
      { label: "MSc Banking & Fin", value: "U. of Birmingham" },
      { label: "Gorilla Test Speed", value: "99th Percentile" },
      { label: "Undergrad Class", value: "1st Class Honours" },
      { label: "Credentials Track", value: "CFA L1 (Process) / ACT L4" }
    ]
  };

  return (
    <section id="about" className="bg-editorial-bg py-24 border-b border-editorial overflow-hidden">
      <div className="section-container">
        {/* HEADER / INTRO */}
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim block mb-4">
            Curriculum Vitae / Identity
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] italic text-white font-light">
            Professional Profile
          </h2>
        </div>

        {/* PROFILE CARD CONTAINER */}
        <div className="border border-editorial bg-white/[0.01] backdrop-blur-sm overflow-hidden mb-16">
          
          {/* BANNER COVER */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-editorial">
            <img 
              src={profileDetails.banner} 
              alt="Profile cover banner" 
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-editorial-bg via-transparent to-black/30 pointer-events-none" />
            
            {/* Top decorative stamp */}
            <div className="absolute top-6 right-8 font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/10">
              verified dossier // 2026
            </div>
          </div>

          {/* PROFILE CARD CONTENT */}
          <div className="px-6 md:px-12 pb-12 relative">
            
            {/* OVERLAPPING AVATAR */}
            <div className="relative -mt-20 md:-mt-24 mb-6 inline-block">
              <div className="w-56 h-36 md:w-72 md:h-48 border-4 border-editorial-bg bg-editorial overflow-hidden shadow-2xl relative">
                <img 
                  id="profile-desk-avatar"
                  src={profileDetails.avatar} 
                  alt="Hariharan Balaji profile desk setup" 
                  className="w-full h-full object-cover grayscale-[25%] contrast-115 brightness-95 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-black border border-editorial text-[#f59e0b] p-1.5 shadow-lg">
                <ShieldCheck size={16} />
              </div>
            </div>

            {/* IDENTITY HEADER */}
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-8">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-tight">
                  {profileDetails.name} <span className="text-editorial-dim font-light text-xl italic">(27 Years Old)</span>
                </h1>
                <p className="text-base md:text-lg text-editorial-text font-serif italic mb-6">
                  {profileDetails.title}
                </p>

                {/* METADATA POOLS */}
                <div className="flex flex-wrap gap-y-4 gap-x-8 text-xs font-mono text-editorial-dim">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-white/40" />
                    {profileDetails.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Globe size={14} className="text-white/40" />
                    {profileDetails.nationality}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={14} className="text-white/40" />
                    <a href={`mailto:${profileDetails.email}`} className="text-white border-b border-editorial-accent/30 hover:border-white transition-colors">
                      {profileDetails.email}
                    </a>
                  </span>
                </div>
              </div>

              {/* ACTION PILLS */}
              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3 pt-4 lg:pt-0">
                <a 
                  href={`mailto:${profileDetails.email}`}
                  className="px-6 py-3 bg-white text-black text-[9px] font-mono uppercase tracking-[0.2em] hover:bg-editorial-text transition-all duration-300 flex items-center gap-2"
                >
                  <Mail size={12} />
                  Correspond
                </a>

                <button 
                  onClick={() => {
                    const el = document.getElementById('education');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-6 py-3 border border-editorial text-[9px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <GraduationCap size={12} />
                  Education
                </button>

                <button 
                  onClick={() => {
                    const el = document.getElementById('experience');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-6 py-3 border border-editorial text-[9px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase size={12} />
                  Experience
                </button>
              </div>
            </div>

            {/* QUICK STATS BAND */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-editorial">
              {profileDetails.stats.map((stat, i) => (
                <div key={i} className="p-4 bg-white/[0.01] border border-editorial">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-editorial-dim block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-sm font-serif italic text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* DETAILED DOSSIER SECTION */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* PROFILE NARRATIVE / BIO */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white border-b border-editorial pb-3 mb-6">
              01 / Biographical Narrative
            </h3>
            
            <p className="text-lg font-light leading-relaxed text-editorial-dim">
              Currently based in the <span className="italic serif text-white">United Kingdom</span>, I am a dedicated finance professional originally from India, focused on the continuous evolution of professional standards and financial intelligence.
            </p>

            <p className="text-base font-light leading-relaxed text-editorial-dim">
              With an <span className="italic serif text-white">MSc in Banking and Finance</span> from the <span className="text-white">University of Birmingham</span>, complemented by a first-class Bachelor's from <span className="text-white">Jain University</span>, my academic journey is rooted in rigorous quantitative analysis and modern macroeconomic market theory.
            </p>

            <p className="text-base font-light leading-relaxed text-editorial-dim">
              My expertise bridges the critical gaps between legacy corporate financial planning (FP&A) and dynamic, custom programmatic modeling. Rather than relying on rigid out-of-the-box suites, I focus on constructing high-precision, automated time-series pipelines and clean data management tools.
            </p>

            <div className="p-6 border border-editorial bg-editorial-accent/5 italic font-serif text-sm text-white/90 leading-relaxed">
              "My professional philosophy rests upon immediate capability. I commit to a rapid 48-hour turn-around cycle for extracting corporate telemetry metrics and packaging them into highly rigorous strategy dossiers."
            </div>
          </div>

          {/* ACADEMIC & QUALIFICATION ANCHORS */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white border-b border-editorial pb-3 mb-6">
              02 / Academic & Professional Anchors
            </h3>

            <div className="space-y-6">
              
              <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={18} className="text-editorial-text" />
                  <h4 className="font-serif italic text-white text-base">MSc Banking & Finance</h4>
                </div>
                <p className="text-xs text-editorial-dim mb-2 font-mono uppercase tracking-wider">
                  University of Birmingham // Postgraduate
                </p>
                <p className="text-xs font-light text-editorial-dim leading-relaxed">
                  Rigorous curriculum focusing on corporate valuation, derivative risk management, portfolio allocation vectors, and econometric forecasting.
                </p>
              </div>

              <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Award size={18} className="text-editorial-text" />
                  <h4 className="font-serif italic text-white text-base">First-Class Bachelors Degree</h4>
                </div>
                <p className="text-xs text-editorial-dim mb-2 font-mono uppercase tracking-wider">
                  Jain University // Undergraduate
                </p>
                <p className="text-xs font-light text-editorial-dim leading-relaxed">
                  Graduated with top-tier First-Class Honors, setting a baseline for computational finance and structural corporate accounting methods.
                </p>
              </div>

              <div className="p-6 border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={18} className="text-editorial-text" />
                  <h4 className="font-serif italic text-white text-base">CFA Candidate & Merit Exemptions</h4>
                </div>
                <p className="text-xs text-editorial-dim mb-2 font-mono uppercase tracking-wider">
                  CFA Institute & Association of Corporate Treasurers
                </p>
                <p className="text-xs font-light text-editorial-dim leading-relaxed">
                  Currently pursuing CFA Level 1 credentials; backed by Level 4 ACT exemptions based on exceptional academic marks and merit.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* VISUAL & PORTFOLIO GALLERY */}
        <div className="border-t border-editorial pt-16 mt-20" id="gallery-section">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-editorial-dim block mb-4">
              03 / Creative Portfolio & Visual Assets
            </span>
            <h3 className="font-serif text-3xl italic text-white font-light">
              Visual Gallery
            </h3>
            <p className="text-xs font-light text-editorial-dim leading-relaxed max-w-2xl mt-2">
              A curated narrative of quantitative setups, architectural anchors, and high-fidelity logical schemas that represent Hari's professional aesthetic. Click any item to inspect in high definition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group border border-editorial bg-white/[0.01] hover:bg-white/[0.02] transition-all cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-editorial bg-neutral-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-editorial-bg/10 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 border border-white/10 text-[8px] font-mono uppercase tracking-widest text-[#f59e0b]">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="p-2 bg-white text-black rounded-full">
                      <Eye size={16} />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h5 className="font-serif italic text-white text-sm mb-2 group-hover:text-[#f59e0b] transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-[11px] font-light text-editorial-dim leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-editorial/40 text-[9px] font-mono text-zinc-500">
                    {item.specs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 hover:bg-white text-white hover:text-black transition-all rounded-full cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-editorial-bg border border-editorial rounded-none overflow-hidden cursor-default grid md:grid-cols-12"
              >
                <div className="md:col-span-7 bg-neutral-900 border-r border-editorial">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-cover filter grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-5 p-8 flex flex-col justify-between bg-editorial-bg/50">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#f59e0b] block mb-2">
                      {selectedImage.category}
                    </span>
                    <h4 className="font-serif text-2xl italic text-white leading-tight mb-4">
                      {selectedImage.title}
                    </h4>
                    <p className="text-xs font-light text-editorial-dim leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-editorial">
                    <div className="text-[10px] font-mono text-zinc-400">
                      <span className="text-editorial-dim block uppercase text-[8px] mb-1">Dossier Alignment:</span>
                      {selectedImage.specs}
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-full py-2.5 bg-white text-black hover:bg-zinc-200 text-[10px] font-mono uppercase tracking-[0.2em] transition-all"
                    >
                      Close Inspection
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
