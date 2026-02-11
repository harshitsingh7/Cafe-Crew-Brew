
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { MENU_DATA } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const ORDER_URL = "https://www.swiggy.com/city/delhi/cafe-crew-brew-greater-kailash-2-rest1086251";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timeout = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery(''); 
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return MENU_DATA;
    return MENU_DATA.filter(
      item => 
        item.name.toLowerCase().includes(query) || 
        (item.description && item.description.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const categories = useMemo(() => {
    return Array.from(new Set(filteredItems.map(item => item.category)));
  }, [filteredItems]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-[#fdfbf7] flex flex-col animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
      onKeyDown={handleKeyDown}
    >
      <header className="p-6 border-b flex flex-col gap-6 bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">coffee</span>
            </div>
            <div className="flex flex-col leading-none">
              <h2 id="menu-title" className="text-xl font-bold tracking-tight text-text-main">Café Crew Brew</h2>
              <span className="text-[9px] uppercase tracking-widest text-primary font-black">We brew your taste of coffee</span>
            </div>
          </div>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors focus:ring-2 focus:ring-primary outline-none"
            aria-label="Close Full Menu"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto w-full relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">search</span>
          <input 
            ref={searchInputRef}
            type="text"
            placeholder="Search our full selection (e.g. Latte, Burger, Pizza)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 bg-secondary/50 border-none rounded-xl focus:ring-2 focus:ring-primary/40 text-base outline-none"
            aria-label="Search menu"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Menu Sections */}
          <div className="lg:col-span-8 space-y-12">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">search_off</span>
                <p className="text-text-muted">No items found matching your search.</p>
              </div>
            ) : (
              categories.map((cat) => (
                <section key={cat} className="animate-fade-in-up">
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-3">
                    <div className="w-3 h-3 bg-primary rounded-sm rotate-45"></div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-text-main">{cat}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.filter(item => item.category === cat).map(item => (
                      <a 
                        key={item.id} 
                        href={ORDER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-5 rounded-2xl transition-all duration-300 hover:bg-white hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-primary/20 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 border p-[2px] ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                                <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                              </div>
                              <h4 className="font-serif font-bold text-lg text-text-main group-hover:text-primary transition-colors">{item.name}</h4>
                            </div>
                            {item.calories && (
                              <span className="text-[10px] text-text-muted italic whitespace-nowrap">{item.calories}</span>
                            )}
                          </div>
                          
                          {item.description && (
                            <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            {item.isPopular && (
                              <span className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-full uppercase tracking-wider">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                Popular
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-text-main group-hover:text-primary transition-colors font-bold text-xs">
                            Order
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>

          {/* Right sidebar - Helpful Info */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-10 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-serif font-bold text-xl mb-4">Empowering Flavors</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Every item in our menu is carefully curated. From our signature "Experiments with Black Shot" to our "Hunger Fuller" sub sandwiches, we focus on quality ingredients and artisanal preparation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary">eco</span>
                    Ethically Sourced Beans
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    Powered by local women
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    Award-winning Baristas
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h4 className="font-bold text-text-main mb-2">Artisan Experience</h4>
                <p className="text-xs text-text-muted mb-4 leading-relaxed">
                  Our crew is dedicated to creating a warm, inclusive space for everyone. If you have any dietary requirements, please feel free to ask our team when ordering.
                </p>
                <button 
                  onClick={onClose}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Return to Top
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="p-6 bg-white border-t text-center lg:hidden">
        <button 
          onClick={onClose}
          className="w-full py-4 bg-text-main text-white rounded-full font-bold"
        >
          Return to Experience
        </button>
      </footer>
    </div>
  );
};

export default MenuOverlay;
