import React, { useState } from 'react';
import Navbar from './Navbar';  
import ScrollReveal from './ScrollReveal';
import { Star, Truck, ShieldCheck, Box, Check } from 'lucide-react';

// --- Mock Data ---
const product = {
  name: "WH-1000XM5",
  tagline: "Wireless Noise Canceling Headphones",
  price: 399.99,
  rating: 4.8,
  reviews: 2450,
  features: ["Industry-leading Noise Cancellation", "30-hour Battery Life", "Ultra-clear Call Quality"]
};

const colors = [
  { name: "Midnight Black", hex: "#1a1a1a", img: "/sequence/ezgif-frame-001.jpg" }, 
  { name: "Platinum Silver", hex: "#e2e2e2", img: "/images/features/silver.png" },
  { name: "Midnight Blue", hex: "#1e3a8a", img: "/images/features/blue.png" }
];

const financeOptions = [
  { id: 'full', label: 'Pay in full', price: 399.99, sub: 'One-time payment' },
  { id: 'monthly', label: 'Pay monthly', price: 33.33, sub: '/mo. for 12 mo. at 0% APR' }
];

// --- Image Magnifier Component ---
const ImageMagnifier = ({ src, alt }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setCursorPosition({ x, y });
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden cursor-crosshair group"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover block"
      />

      {/* Magnifying Lens - Hidden on touch devices */}
      <div 
        className="pointer-events-none absolute border border-white/20 rounded-full shadow-2xl bg-black hidden md:block"
        style={{
          display: showMagnifier ? 'block' : 'none',
          width: '200px', 
          height: '200px',
          top: `${cursorPosition.y * 100}%`,
          left: `${cursorPosition.x * 100}%`,
          transform: 'translate(-50%, -50%)',
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '600%', 
          backgroundPosition: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
          zIndex: 50
        }}
      />
    </div>
  );
};

// --- Sub-Components ---

const ColorSwatch = ({ color, isSelected, onClick }) => (
  <button 
    onClick={onClick}
    className={`group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : 'hover:scale-110'}`}
    aria-label={`Select ${color.name}`}
  >
    <span 
      className="w-full h-full rounded-full shadow-inner border border-white/10" 
      style={{ backgroundColor: color.hex }}
    />
    {isSelected && (
      <span className="absolute -bottom-6 sm:-bottom-8 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap opacity-100 transition-opacity">
        {color.name}
      </span>
    )}
  </button>
);

const OptionCard = ({ selected, onSelect, option }) => (
  <div 
    onClick={() => onSelect(option.id)}
    className={`cursor-pointer p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
      selected === option.id 
        ? 'border-accent-blue bg-accent-blue/10' 
        : 'border-white/10 hover:border-white/30 bg-white/5'
    }`}
  >
    <div className="flex justify-between items-center relative z-10">
      <div>
        <span className={`block text-base sm:text-lg font-bold ${selected === option.id ? 'text-white' : 'text-white/80'}`}>
          {option.id === 'monthly' ? `$${option.price}` : `$${option.price}`}
          {option.id === 'monthly' && <span className="text-xs sm:text-sm font-normal"> /mo</span>}
        </span>
        <span className="text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-wider mt-1 block">
          {option.label}
        </span>
      </div>
      {selected === option.id && (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-blue flex items-center justify-center text-black">
          <Check size={12} strokeWidth={4} />
        </div>
      )}
    </div>
    <p className="text-[10px] sm:text-xs text-white/40 mt-2 sm:mt-3 font-light">
      {option.sub}
    </p>
  </div>
);

// --- Main Component ---

export default function BuyPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedFinance, setSelectedFinance] = useState('full');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

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

        <main className="max-w-[1400px] mx-auto pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 xl:gap-24">
            
            {/* --- LEFT COLUMN: Sticky Gallery --- */}
            <div className="lg:col-span-7 relative">
              <div className="lg:sticky lg:top-32 space-y-6 sm:space-y-8">
                
                {/* Main Image Display with Magnifier */}
                <ScrollReveal className="relative w-full aspect-square rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 group z-10">
                  <ImageMagnifier 
                    src={selectedColor.img} 
                    alt={product.name} 
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 pointer-events-none z-20">
                    <Star size={12} className="text-accent-blue fill-accent-blue" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">{product.rating} Rating</span>
                  </div>
                </ScrollReveal>

                {/* Feature Highlights (Mini Gallery) */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <ScrollReveal delay={0.1} className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-32 sm:h-40 md:h-48 hover:bg-white/10 transition-colors">
                    <ShieldCheck className="text-accent-blue mb-2 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-xs sm:text-sm font-bold text-white/80 max-w-[100px]">2-Year Warranty Included</span>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2} className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-32 sm:h-40 md:h-48 hover:bg-white/10 transition-colors">
                    <Box className="text-accent-blue mb-2 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-xs sm:text-sm font-bold text-white/80 max-w-[100px]">Free Express Shipping</span>
                  </ScrollReveal>
                </div>

              </div>
            </div>

            {/* --- RIGHT COLUMN: Configuration --- */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 md:gap-10">
              
              <ScrollReveal>
                <span className="text-accent-blue font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 block">New Arrival</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">{product.name}</h1>
                <p className="text-lg sm:text-xl text-white/60 font-light">{product.tagline}</p>
              </ScrollReveal>

              <div className="h-[1px] bg-white/10 w-full" />

              <ScrollReveal delay={0.1}>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40 mb-6 sm:mb-8">
                  Finish <span className="text-white ml-2">{selectedColor.name}</span>
                </h3>
                <div className="flex gap-4 sm:gap-6">
                  {colors.map((color) => (
                    <ColorSwatch 
                      key={color.name} 
                      color={color} 
                      isSelected={selectedColor.name === color.name} 
                      onClick={() => setSelectedColor(color)} 
                    />
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40 mb-4 sm:mb-6 flex justify-between">
                  Payment
                  <span className="text-accent-blue cursor-pointer hover:underline text-[9px] sm:text-[10px]">Finance Details</span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {financeOptions.map((option) => (
                    <OptionCard 
                      key={option.id}
                      option={option} 
                      selected={selectedFinance} 
                      onSelect={setSelectedFinance} 
                    />
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10 flex items-start gap-3 sm:gap-4">
                <Truck className="text-white/60 mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm mb-1">Free Delivery</h4>
                  <p className="text-[10px] sm:text-xs text-white/50">Order within <span className="text-white">4 hrs 32 mins</span> to receive by <span className="text-white">Tomorrow</span>.</p>
                </div>
              </ScrollReveal>

              <div className="mt-2 sm:mt-4 pt-6 sm:pt-8 border-t border-white/10 space-y-3 sm:space-y-4">
                <div className="flex justify-between items-end mb-2 sm:mb-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold block">${selectedFinance === 'monthly' ? '33.33' : '399.99'}</span>
                    {selectedFinance === 'monthly' && <span className="text-[10px] sm:text-xs text-white/40">per month</span>}
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-green-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                    In Stock
                  </div>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className={`w-full py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold tracking-wide transition-all duration-800 relative overflow-hidden ${isAdded ? 'bg-green-500 text-black scale-95' : 'bg-white text-black hover:bg-accent-blue hover:scale-[1.02]'}`}
                >
                  {isAdded ? "Added to Bag" : "Add to Bag"}
                </button>
                
                <p className="text-center text-[9px] sm:text-[10px] text-white/30">
                  Need help? <a href="#" className="underline hover:text-white">Chat with a Specialist</a>
                </p>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
