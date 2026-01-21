import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleScrollNav = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      <a
        href="#overview"
        onClick={(e) => handleScrollNav(e, 'overview')}
        className={cn(
          "font-medium transition-colors cursor-pointer",
          mobile 
            ? "text-2xl text-white/80 hover:text-white py-3" 
            : "text-sm text-white/70 hover:text-white"
        )}
      >
        Overview
      </a>

      <Link
        to="/technology"
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "font-medium transition-colors",
          mobile 
            ? "text-2xl py-3" 
            : "text-sm",
          location.pathname === '/technology'
            ? 'text-white'
            : mobile ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-white'
        )}
      >
        Technology
      </Link>

      <Link 
        to="/specs"
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "font-medium transition-colors",
          mobile 
            ? "text-2xl py-3" 
            : "text-sm",
          location.pathname === '/specs' 
            ? 'text-white' 
            : mobile ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-white'
        )}
      >
        Specs
      </Link>
    </>
  );

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
          scrolled ? "bg-sony-black/70 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              requestAnimationFrame(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              });
            }}
            className="flex items-center gap-2 sm:gap-4 group"
          >
            <span className="text-white font-semibold tracking-tight text-base sm:text-lg">Sony</span>
            <span className="text-white/40 font-light text-xs sm:text-sm hidden xs:block border-l border-white/20 pl-2 sm:pl-4 group-hover:text-white/60 transition-colors">
              WH-1000XM6
            </span>
          </Link>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLinks />
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="buy" className="text-xs font-medium text-white/70 hover:text-white transition-colors hidden sm:block">
              Buy
            </a>
            <Link 
              to="/pre-order"
              className="bg-accent-blue hover:bg-accent-blue/90 text-white text-[10px] sm:text-xs px-3 sm:px-4 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(0,80,255,0.3)] hover:shadow-[0_0_25px_rgba(0,80,255,0.5)]"
            >
              Pre-Order
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-sony-black/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <NavLinks mobile />
          
          <div className="h-[1px] w-24 bg-white/10 my-4" />
          
          <Link 
            to="/buy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl text-white/60 hover:text-white transition-colors py-2"
          >
            Buy
          </Link>
        </div>
      </div>
    </>
  );
}
