import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const PremiumFeatureCard = ({ title, description, highlight }) => (
  <ScrollReveal
    className={`group relative overflow-hidden rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] ${
      highlight
        ? "md:col-span-2 bg-white/[0.06] border border-white/15 backdrop-blur-xl"
        : "bg-white/[0.03] border border-white/10 backdrop-blur-lg"
    }`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tight mb-3 sm:mb-4 group-hover:to-white transition-all duration-500">
          {title}
        </h3>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-500">
          {description}
        </p>
      </div>
      
      <div className="mt-6 sm:mt-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
        <span className="text-accent-blue text-xl sm:text-2xl">→</span>
      </div>
    </div>

    <div 
      className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 pointer-events-none opacity-0 group-hover:opacity-100
      ${highlight ? "from-accent-blue/10 via-transparent to-transparent" : "from-white/5 via-transparent to-transparent"}`} 
    />
  </ScrollReveal>
);


const EditorialSection = ({ title, description, align = "left" }) => {
  return (
    <div className={`py-16 sm:py-24 md:py-32 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center border-t border-white/10`}>
      
      <ScrollReveal className={`${align === "right" ? "md:order-2" : ""} space-y-4 sm:space-y-6 md:space-y-8`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[1.1]">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-md font-light">
          {description}
        </p>
      </ScrollReveal>
      
      <ScrollReveal 
        delay={0.2}
        className={`${align === "right" ? "md:order-1" : ""} group relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] border border-white/10 bg-zinc-900`}
      >
        <motion.img
          src={`/images/features/${align === "right" ? "feature2.jpeg" : "feature1.jpeg"}`}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:scale-[1.15] transition-transform duration-[1.5s] ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-sony-black via-transparent to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-white/[0.02] mix-blend-overlay pointer-events-none" />
      </ScrollReveal>
    </div>
  );
};

const SpecBlock = ({ label, value }) => (
  <div className="group py-4 sm:py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 hover:border-white/30 transition-colors duration-300">
    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/40 group-hover:text-accent-blue transition-colors duration-300">
      {label}
    </div>
    <div className="text-lg sm:text-xl text-white/90 font-medium tracking-tight">
      {value}
    </div>
  </div>
);


export default function FeaturesAndSpecs() {
  return (
    <div className="relative z-20 bg-sony-black min-h-screen overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-blue/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] bg-accent-cyan/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />

      {/* Transition Gradient from Hero */}
      <div className="h-20 sm:h-32 md:h-40 bg-gradient-to-b from-transparent to-sony-black pointer-events-none -mt-20 sm:-mt-32 md:-mt-40 relative z-20" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 space-y-20 sm:space-y-32 md:space-y-40">

        {/* Header Label */}
        <div className="flex justify-center mb-8 sm:mb-12 opacity-80">
          <ScrollReveal>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] sm:tracking-[0.6em] text-accent-blue relative py-2">
              Features
              <span className="absolute left-1/2 -bottom-2 w-1 h-1 rounded-full bg-accent-blue -translate-x-1/2" />
            </span>
          </ScrollReveal>
        </div>

        {/* Key Features Overview */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-none">
              Everything you expect.<br/>
              <span className="text-white/40">And more.</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              WH-1000XM6 pushes the boundaries of listening technology to new heights.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <PremiumFeatureCard
              highlight
              title="Industry-leading Noise Cancelling"
              description="Powered by Sony's most advanced processor yet, WH-1000XM6 continuously analyzes your surroundings to deliver immersive silence in real time."
            />
            <PremiumFeatureCard
              title="30-hour battery life"
              description="Listen all day and beyond with long-lasting power and fast charging support."
            />
            <PremiumFeatureCard
              title="Crystal-clear calls"
              description="Precision Voice Pickup isolates your voice so every conversation stays clear."
            />
            <PremiumFeatureCard
              title="Multipoint connection"
              description="Seamlessly switch between two Bluetooth devices without interruption."
            />
            <PremiumFeatureCard
              title="Speak-to-Chat"
              description="Automatically pauses playback when you start speaking to someone."
            />
          </div>
        </div>

        {/* Detailed Editorial Sections */}
        <div className="space-y-8 sm:space-y-12">
          <EditorialSection 
            title="Sound developed by artists." 
            description="We partnered with Music Studios to deliver a sound experience exactly as the artist intended. LDAC transmits approximately three times more data than conventional Bluetooth audio for exceptional quality."
            align="left"
          />
          <EditorialSection 
            title="Comfort for every ear." 
            description="A newly developed soft-fit leather covers the earcups, realizing a comfortable fit with less pressure on the ears while keeping out external sounds. Wear them all day without fatigue."
            align="right"
          />
        </div>

        {/* Technical Specifications */}
        <ScrollReveal className="max-w-4xl mx-auto py-12 sm:py-16 md:py-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 md:mb-20 text-center tracking-tighter">
            Technical specifications
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-20 gap-y-1 sm:gap-y-2">
            <SpecBlock label="Type" value="Closed-back, dynamic" />
            <SpecBlock label="Bluetooth" value="Version 5.3" />
            
            <SpecBlock label="Driver" value="30 mm dome-type" />
            <SpecBlock label="Battery life" value="Up to 30 hours" />
            
            <SpecBlock label="Freq Response" value="4 Hz–40 kHz" />
            <SpecBlock label="Charging" value="Approx. 3.5 hours" />
            
            <SpecBlock label="Weight" value="Approx. 250 g" />
            <SpecBlock label="Processor" value="Integrated V1" />
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal className="text-center py-16 sm:py-24 md:py-32 space-y-8 sm:space-y-12 border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none" />

          <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
            Everything you need.<br/>
            <span className="text-white/30">Nothing you don't.</span>
          </h2>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8">
            <button className="group relative bg-accent-blue text-white text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(0,80,255,0.3)] hover:shadow-[0_0_60px_rgba(0,80,255,0.5)] overflow-hidden w-full sm:w-auto">
              <span className="relative z-10">Buy WH-1000XM6</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            <button className="text-white hover:text-accent-cyan text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-medium transition-colors border border-white/20 rounded-full hover:border-accent-cyan/50 hover:bg-white/5 w-full sm:w-auto">
              Compare models
            </button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
