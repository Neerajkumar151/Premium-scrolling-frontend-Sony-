import React from 'react';
import Navbar from './Navbar';
import ScrollReveal from './ScrollReveal';
import { Cpu, Mic, Wifi, Zap, Activity, Radio, Layers } from 'lucide-react';

// --- Sub-Components ---

const TechCard = ({ icon: Icon, title, subtitle, desc, className = "", delay = 0 }) => (
  <ScrollReveal delay={delay} className={`p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between group ${className}`}>
    <div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon size={20} className="text-accent-blue sm:w-6 sm:h-6" />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{title}</h3>
      <span className="text-accent-blue font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">
        {subtitle}
      </span>
    </div>
    <p className="text-white/60 leading-relaxed font-light max-w-sm text-sm sm:text-base">
      {desc}
    </p>
  </ScrollReveal>
);

const StatBlock = ({ value, label }) => (
  <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
      {value}
    </span>
    <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1 sm:mt-2">
      {label}
    </span>
  </div>
);

const AnimatedWave = () => (
  <div className="flex items-center justify-center gap-1 h-8 sm:h-10 md:h-12">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i} 
        className="w-1 bg-accent-blue rounded-full animate-pulse" 
        style={{ 
          height: '100%', 
          animationDelay: `${i * 0.1}s`,
          animationDuration: '1s'
        }} 
      />
    ))}
  </div>
);

// --- Main Component ---

export default function Technology() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-accent-blue selection:text-white">
      
      {/* --- True Fixed Background Image --- */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/sequence/ezgif-frame-001.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* --- Semi-transparent Dark Overlay (70% opacity) --- */}
      <div className="fixed inset-0 z-[1] bg-black/70" />
      
      {/* --- Subtle Vignette for Premium Feel --- */}
      <div className="fixed inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      <div className="fixed inset-0 z-[2] bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-12 overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute top-0 right-0 w-[50vw] sm:w-[60vw] h-[50vw] sm:h-[60vw] bg-accent-blue/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <ScrollReveal>
              <span className="text-accent-blue font-mono text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 block">
                The Architecture of Sound
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 sm:mb-12">
                Inside the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Silence.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 border-t border-white/10 pt-8 sm:pt-12">
              <StatBlock value="V1" label="Integrated Processor" />
              <StatBlock value="30mm" label="Driver Unit" />
              <StatBlock value="8x" label="Mic Array" />
            </ScrollReveal>
          </div>
        </section>

        {/* --- THE CHIP (Full Width Feature) --- */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal className="relative rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">
              
              {/* Background Texture */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Central Chip Visual (Abstract) */}
              <div className="relative z-10 flex flex-col items-center text-center p-4 sm:p-6 md:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-black border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] sm:shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-4 sm:mb-6 md:mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-transparent" />
                  <Cpu className="text-white relative z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  {/* Scanning Line Animation */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent-blue/50 blur-[2px] animate-[scan_2s_ease-in-out_infinite]" style={{ animationName: 'scan' }} />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Integrated Processor V1</h2>
                <p className="text-white/60 max-w-xs sm:max-w-md lg:max-w-lg mx-auto text-sm sm:text-base">
                  Unlock the full potential of our HD Noise Cancelling Processor QN1. 
                  This exclusive technology controls 8 microphones to deliver unprecedented noise cancellation quality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* --- BENTO GRID: Tech Breakdown --- */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            
            {/* Card 1: Driver Unit (Tall on larger screens) */}
            <TechCard 
              icon={Radio} 
              title="30mm Driver" 
              subtitle="Precision Audio"
              desc="The specially designed 30mm driver unit with soft edge enhances noise cancelling, especially in low frequency ranges, helping you enjoy your music precisely without ambient noise."
              className="sm:row-span-2 bg-gradient-to-b from-white/5 to-transparent"
            />

            {/* Card 2: Microphones */}
            <TechCard 
              icon={Mic} 
              title="Beamforming Mics" 
              subtitle="Crystal Clear Calls"
              desc="Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm to isolate your voice."
              delay={0.1}
            />

            {/* Card 3: LDAC */}
            <TechCard 
              icon={Wifi} 
              title="LDAC Coding" 
              subtitle="Hi-Res Wireless"
              desc="Transmits approximately three times more data than conventional Bluetooth audio for exceptional High-Resolution Audio quality."
              delay={0.2}
            />

            {/* Card 4: AI Restoration (Wide on larger screens) */}
            <ScrollReveal delay={0.3} className="sm:col-span-2 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 relative overflow-hidden">
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Activity className="text-accent-blue w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-bold text-lg sm:text-xl">DSEE Extreme™</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Real-time Restoration.</h3>
                <p className="text-white/60 text-sm sm:text-base">
                  Using Edge-AI, DSEE Extreme™ upscales compressed digital music files in real time. It dynamically recognizes instrumentation, musical genres, and individual elements.
                </p>
              </div>
              
              {/* Visualizer Graphic */}
              <div className="flex-1 w-full flex flex-col items-center justify-center h-24 sm:h-28 md:h-32">
                <AnimatedWave />
                <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mt-4 sm:mt-6 font-mono">
                  Audio Signal Processing
                </span>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* --- MATERIAL DESIGN SECTION --- */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white/[0.02]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
            
            <div className="w-full md:w-1/2">
              <ScrollReveal className="aspect-square relative rounded-full border border-white/10 flex items-center justify-center max-w-[300px] sm:max-w-[400px] md:max-w-none mx-auto">
                {/* Simulated 'Layers' or Material visual */}
                <div className="w-[80%] h-[80%] rounded-full border border-white/10 absolute animate-[spin_10s_linear_infinite]" />
                <div className="w-[60%] h-[60%] rounded-full border border-white/20 absolute animate-[spin_15s_linear_infinite_reverse]" />
                <img 
                  src="/sequence/ezgif-frame-001.jpg" 
                  alt="Ear Cup Material" 
                  className="w-[50%] h-[50%] object-cover rounded-full opacity-80"
                />
              </ScrollReveal>
            </div>

            <div className="w-full md:w-1/2">
              <ScrollReveal>
                <Layers className="text-accent-blue mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Soft Fit Leather.</h2>
                <p className="text-lg sm:text-xl text-white/60 font-light mb-6 sm:mb-8">
                  This soft fit leather fits snugly around the head with less pressure on the ears while keeping out external sounds. The noiseless design with stepless slider makes wearing them a joy.
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-3 sm:gap-4 text-white/80 text-sm sm:text-base">
                    <Zap size={16} className="text-accent-blue flex-shrink-0" />
                    <span>Pressure-relieving ear pads</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/80 text-sm sm:text-base">
                    <Zap size={16} className="text-accent-blue flex-shrink-0" />
                    <span>Seamless swivel mechanism</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/80 text-sm sm:text-base">
                    <Zap size={16} className="text-accent-blue flex-shrink-0" />
                    <span>Lightweight chassis</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
