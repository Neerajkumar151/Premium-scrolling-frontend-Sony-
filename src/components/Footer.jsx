import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Globe } from 'lucide-react';

// --- Data: Footer Links ---
const footerLinks = [
  {
    title: "Shop",
    links: ["Wireless Headphones", "In-Ear Monitors", "High-Resolution Audio", "Gaming Series", "Accessories", "Gift Cards"]
  },
  {
    title: "Support",
    links: ["Product Support", "Downloads & Manuals", "Warranty Information", "Order Status", "Community", "Contact Us"]
  },
  {
    title: "Experience",
    links: ["Sonic Science", "Audio Reality", "Artist Collaborations", "Music Lounge", "Events", "Store Locator"]
  },
  {
    title: "Company",
    links: ["About Sony", "Careers", "Sustainability", "Corporate Social Responsibility", "Newsroom", "Investor Relations"]
  }
];

// --- Sub-Components ---

const FooterColumn = ({ title, links, delay }) => (
  <ScrollReveal delay={delay} className="flex flex-col gap-3 sm:gap-4">
    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-1 sm:mb-2 font-mono">
      {title}
    </h4>
    <ul className="space-y-2 sm:space-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a 
            href="#" 
            className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center group"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </ScrollReveal>
);

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-accent-blue transition-all duration-300 group">
    <Icon size={16} className="text-white/60 group-hover:text-white transition-colors sm:w-[18px] sm:h-[18px]" />
  </a>
);

// --- Main Component ---

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 border-t border-white/10 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        {/* Top Section: Branding & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
          
          {/* Brand Statement */}
          <div className="max-w-xl lg:max-w-2xl">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
                Hear the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Impossible.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg sm:text-xl text-white/50 font-light">
                Join the inner circle. Get early access to new drops and exclusive artist content.
              </p>
            </ScrollReveal>
          </div>

          {/* Newsletter Input */}
          <ScrollReveal delay={0.2} className="w-full lg:w-auto min-w-[280px] sm:min-w-[300px]">
            <form className="group relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 text-base sm:text-lg text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors pr-10 sm:pr-12"
              />
              <button 
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 group-hover:text-white transition-colors"
              >
                <ArrowRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8 mb-16 sm:mb-20 md:mb-24 border-t border-white/10 pt-10 sm:pt-12 md:pt-16">
          {footerLinks.map((col, idx) => (
            <FooterColumn 
              key={idx} 
              title={col.title} 
              links={col.links} 
              delay={0.1 * idx} 
            />
          ))}
        </div>

        {/* Bottom Section: Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
          
          {/* Copyright & Region */}
          <ScrollReveal className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/30 font-medium">
            <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Globe size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span>India</span>
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-white/20" />
            <span>© 2025 Sony Electronics Inc.</span>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            </div>
          </ScrollReveal>

          {/* Social Icons */}
          <ScrollReveal delay={0.1} className="flex gap-3 sm:gap-4">
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
          </ScrollReveal>

        </div>
      </div>
    </footer>
  );
}
