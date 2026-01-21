import React from 'react';
import ScrollReveal from './ScrollReveal';

// --- Data (Unchanged) ---
const specsData = [
  {
    category: "General",
    items: [
      { label: "Headphone Type", value: "Closed, dynamic" },
      { label: "Driver Unit", value: "30mm (Precision-engineered dome type)" },
      { label: "Magnet", value: "High-power Neodymium" },
      { label: "Impedance", value: "48 ohm (ON) / 16 ohm (OFF)" },
      { label: "Freq. Response", value: "4 Hz - 40,000 Hz (JEITA)" },
      { label: "Active Response", value: "4 Hz - 40,000 Hz" },
      { label: "Bluetooth Response", value: "20Hz-20,000Hz (44.1kHz) / 20Hz-40,000Hz (LDAC 990kbps)" },
      { label: "Sensitivity", value: "102 dB/mW (ON) / 100 dB/mW (OFF)" },
      { label: "Volume Control", value: "Touch Sensor" },
      { label: "Cord Type", value: "Single-sided (detachable)" },
      { label: "Cord Length", value: "approx. 1.2m" },
      { label: "Plug", value: "Gold-plated L-shaped stereo mini plug" },
      { label: "Wearing Style", value: "Over-Ear" },
    ]
  },
  {
    category: "Battery",
    items: [
      { label: "Charge Time", value: "Approx. 3.5 hrs" },
      { label: "Charge Method", value: "USB" },
      { label: "Audio Playback", value: "Max. 30 hrs (NC ON) / Max. 40 hrs (NC OFF)" },
      { label: "Comm. Time", value: "Max. 24 hrs (NC ON) / Max. 32 hrs (NC OFF)" },
    ]
  },
  {
    category: "Connectivity",
    items: [
      { label: "Bluetooth® Version", value: "5.3" },
      { label: "Effective Range", value: "10m" },
      { label: "Frequency Range", value: "2.4GHz band" },
      { label: "Profile", value: "A2DP, AVRCP, HFP, HSP" },
      { label: "Audio Formats", value: "SBC, AAC, LDAC" },
      { label: "Content Protection", value: "SCMS-T" },
    ]
  },
  {
    category: "Noise Cancellation",
    items: [
      { label: "Optimizer", value: "Auto NC Optimizer" },
      { label: "Ambient Sound", value: "Yes" },
      { label: "Quick Attention", value: "Yes" },
      { label: "Atmospheric Pressure", value: "Optimizing" },
    ]
  },
  {
    category: "Physical",
    items: [
      { label: "Weight", value: "Approx. 250g" },
    ]
  }
];

// --- Sub-Components ---

const SpecItem = ({ label, value }) => (
  <ScrollReveal className="flex flex-col border-b border-white/10 py-4 sm:py-5 md:py-6 pr-2 sm:pr-4 relative z-0">
    <dt className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-1 sm:mb-2 font-mono">
      {label}
    </dt>
    <dd className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed break-words">
      {value}
    </dd>
  </ScrollReveal>
);

const SpecCategory = ({ category, items }) => (
  // Added relative here to act as the container for the sticky element's scope
  <div className="relative border-t border-white/20 first:border-none py-16 sm:py-24 lg:py-32">
    <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-start">

      {/* --- SCOPED STICKY HEADER LOGIC ---
        1. 'contents': On mobile, this wrapper is removed from the DOM tree visually. 
           The sticky header becomes a direct child of the grid, sharing the full height 
           of the section with the specs list.
        2. 'lg:block': On desktop, we revert to a standard block to keep the sidebar layout.
      */}
      <div className="contents lg:block lg:col-span-4 xl:col-span-3">
        <div className="sticky top-24 lg:top-32 z-20 -mx-4 px-4 lg:mx-0 lg:px-0 mb-8 lg:mb-0">
          
          {/* Glass Container */}
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 lg:bg-black/20 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

            <ScrollReveal>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight flex items-center justify-between">
                {category}
                {/* Mobile visual indicator */}
                <span className="lg:hidden h-[1px] w-12 bg-white/20 ml-4"></span>
              </h3>
              {/* Desktop visual indicator */}
              <div className="mt-3 sm:mt-4 h-[2px] w-10 sm:w-12 bg-gradient-to-r from-accent-blue to-transparent hidden lg:block" />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Specs Content */}
      <div className="lg:col-span-8 xl:col-span-9 z-10">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-2 sm:gap-y-3 md:gap-y-4">
          {items.map((item, idx) => (
            <SpecItem key={idx} label={item.label} value={item.value} />
          ))}
        </dl>
      </div>

    </div>
  </div>
);


// --- Main Component ---

export default function Specifications() {
  return (
    <section className="relative min-h-screen text-white font-sans selection:bg-accent-blue selection:text-white pb-16 sm:pb-24 md:pb-32">
        
      {/* --- Fixed Background --- */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/sequence/ezgif-frame-001.jpg)', // Ensure this path is correct
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* --- Overlays --- */}
      <div className="fixed inset-0 z-[1] bg-black/70" />
      <div className="fixed inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      <div className="fixed inset-0 z-[2] bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* --- Content Container --- */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto pt-24 sm:pt-32 md:pt-48">
        
        {/* Header */}
        <header className="mb-16 sm:mb-24 md:mb-32 lg:mb-48 border-b border-white/10 pb-8 sm:pb-10 md:pb-12">
          <ScrollReveal>
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-accent-blue font-mono text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Technical Data
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Specifications.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex justify-start md:justify-end mt-6 sm:mt-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-lg md:max-w-xl text-left md:text-right font-light leading-relaxed">
              Precision engineering meets acoustic purity. <br className="hidden sm:block"/>
              Dive into the details of industry-leading silence.
            </p>
          </ScrollReveal>
        </header>

        {/* Specs List */}
        <div className="space-y-0"> {/* Removed vertical spacing to rely on padding inside categories for better sticky flow */}
          {specsData.map((section, idx) => (
            <SpecCategory 
              key={idx} 
              category={section.category} 
              items={section.items} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}