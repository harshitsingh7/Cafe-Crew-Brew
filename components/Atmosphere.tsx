
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Atmosphere: React.FC = () => {
  return (
    <section id="gallery" className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-gray-200 pb-6 gap-4">
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Our Culinary Curation</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main">A Delicious Atmosphere</h2>
        </div>
        <p className="text-text-muted text-sm italic max-w-sm text-center md:text-right">
          Every dish and every brew is crafted with passion and served in a space that inspires connection.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
        {/* Main large image - Burger */}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
          <img 
            alt={GALLERY_IMAGES[0].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={GALLERY_IMAGES[0].url}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-6 left-6 z-20">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-text-main font-serif font-bold text-xl block">{GALLERY_IMAGES[0].title}</span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Signature Favorite</span>
            </div>
          </div>
        </div>

        {/* Salad */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl shadow-md">
          <img 
            alt={GALLERY_IMAGES[1].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={GALLERY_IMAGES[1].url}
          />
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-sm">
                <span className="text-text-main font-bold text-xs">{GALLERY_IMAGES[1].title}</span>
             </div>
          </div>
        </div>

        {/* Sub */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl shadow-md">
          <img 
            alt={GALLERY_IMAGES[2].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={GALLERY_IMAGES[2].url}
          />
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-sm">
                <span className="text-text-main font-bold text-xs">{GALLERY_IMAGES[2].title}</span>
             </div>
          </div>
        </div>

        {/* Latte Art */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl shadow-md">
          <img 
            alt={GALLERY_IMAGES[3].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={GALLERY_IMAGES[3].url}
          />
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-sm">
                <span className="text-text-main font-bold text-xs">{GALLERY_IMAGES[3].title}</span>
             </div>
          </div>
        </div>

        {/* Coffee 1 */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl shadow-md">
          <img 
            alt={GALLERY_IMAGES[4].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={GALLERY_IMAGES[4].url}
          />
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-sm">
                <span className="text-text-main font-bold text-xs">{GALLERY_IMAGES[4].title}</span>
             </div>
          </div>
        </div>

        {/* Coffee 2 */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl shadow-md">
          <img 
            alt={GALLERY_IMAGES[5].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={GALLERY_IMAGES[5].url}
          />
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
             <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-sm">
                <span className="text-text-main font-bold text-xs">{GALLERY_IMAGES[5].title}</span>
             </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <button className="bg-text-main text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95">
          Experience Cafe Crew Brew
        </button>
      </div>
    </section>
  );
};

export default Atmosphere;
