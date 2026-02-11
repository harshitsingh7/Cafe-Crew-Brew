
import React, { useState, useEffect } from 'react';
import { Store } from '../types';

interface NavbarProps {
  onOpenMenu: () => void;
  nearestStore: Store;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, nearestStore }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isSaritaVihar = nearestStore.id === 'sarita-vihar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-text-main text-white rounded-full flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[20px]">coffee</span>
            </div>
            <div className="flex flex-col">
              <h2 className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-text-main' : 'text-white'}`}>Cafe Crew Brew</h2>
              {isSaritaVihar && (
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Powered by Women</span>
              )}
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            {['Overview', 'Menu', 'Gallery', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors relative group ${isScrolled ? 'text-text-main' : 'text-white'}`} 
                href={item === 'Menu' ? '#menu' : `#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-text-muted text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className={isScrolled ? 'text-text-main' : 'text-white'}>Open until 12 AM</span>
            </div>
            <a 
              href={nearestStore.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center rounded-full h-11 px-7 bg-text-main text-white text-sm font-bold shadow-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Order Online
            </a>
            <button 
              onClick={onOpenMenu}
              className={`p-2 hover:bg-primary/10 rounded-full transition-colors ${isScrolled ? 'text-text-main' : 'text-white'}`}
              aria-label="Open Navigation Menu"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
