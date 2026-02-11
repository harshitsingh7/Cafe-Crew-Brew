
import React from 'react';
import { MENU_DATA } from '../constants';

interface MenuSectionProps {
  onBrowseMenu: () => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onBrowseMenu }) => {
  const ORDER_URL = "https://www.swiggy.com/city/delhi/cafe-crew-brew-greater-kailash-2-rest1086251";
  const signatureItems = MENU_DATA.filter(item => item.isPopular).slice(0, 6);

  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Curation</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main">Signature Favorites</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">Discover our most loved blends and gourmet bites, hand-picked for their exceptional flavor and quality.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Signature Menu List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" role="list">
            {signatureItems.map((item) => (
              <a 
                key={item.id} 
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-3xl shadow-sm border border-transparent hover:border-primary/20 transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 flex flex-col" 
                role="listitem"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 border p-[2px] ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                      <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-text-main group-hover:text-primary transition-colors">{item.name}</h4>
                  </div>
                  {item.calories && (
                    <span className="text-[10px] text-text-muted italic block" aria-label={`${item.calories} per serving`}>{item.calories}</span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{item.description}</p>
                )}
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted bg-secondary px-2 py-1 rounded-md">{item.category}</span>
                  <div className="text-primary group-hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={onBrowseMenu}
              className="inline-flex items-center gap-2 bg-text-main text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-primary transition-all group"
              aria-label="Open full menu to browse all items"
            >
              Browse Full Menu
              <span className="material-symbols-outlined transition-transform group-hover:rotate-45">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
