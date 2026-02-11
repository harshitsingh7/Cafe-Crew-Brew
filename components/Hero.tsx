
import React from 'react';
import { Store } from '../types';

interface HeroProps {
  nearestStore: Store;
}

const Hero: React.FC<HeroProps> = ({ nearestStore }) => {
  const isSaritaVihar = nearestStore.id === 'sarita-vihar';
  const HERO_IMAGE = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000";
  const DINEOUT_URL = "https://www.swiggy.com/restaurants/cafe-crewbrew-sarita-vihar-koramangala-delhi-1008202/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve";

  return (
    <section id="overview" className="relative w-full h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Background Image with sophisticated overlays */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Cafe Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
        
        {/* Abstract decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col items-center text-center pt-10">
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-serif italic tracking-tighter drop-shadow-lg leading-none">
            {isSaritaVihar && <>Powered by Women<br/></>}
            <span className="not-italic font-medium">Cafe Crew Brew</span>
          </h1>
          <h2 className="text-white/90 text-2xl sm:text-3xl font-sans font-light tracking-wide drop-shadow-md">
            {isSaritaVihar ? 'पावर्ड बाय वीमेन कैफे क्रू ब्रू' : 'कैफे क्रू ब्रू'}
          </h2>
          <div className="w-24 h-[1px] bg-primary/80 mx-auto my-6"></div>
          <p className="text-secondary/90 text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Brewing Coffee. {isSaritaVihar && 'Empowering Women.'} <br className="hidden sm:block"/>
            A space crafted for community, warmth, and exceptional taste.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a 
            href={nearestStore.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-primary text-white px-8 py-4 text-base font-bold shadow-xl transition-all hover:bg-primary-dark hover:scale-105 hover:shadow-primary/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Order Online
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </span>
          </a>
          <a 
            href={DINEOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-base font-bold shadow-lg transition-all hover:bg-white hover:text-text-main"
          >
            Find a Table
          </a>
          <a 
            href={nearestStore.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/30 text-white shadow-lg transition-all hover:bg-white hover:text-primary hover:rotate-12" 
            title="Get Directions"
          >
            <span className="material-symbols-outlined">near_me</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
