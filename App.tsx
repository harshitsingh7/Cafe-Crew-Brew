
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CafeOverview from './components/CafeOverview';
import MenuSection from './components/MenuSection';
import Atmosphere from './components/Atmosphere';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import MenuOverlay from './components/MenuOverlay';
import { STORES } from './constants';
import { Store } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nearestStore, setNearestStore] = useState<Store>(STORES[0]);
  const [locationFound, setLocationFound] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Haversine formula to calculate distance between two points in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    // Handle PWA installation prompt (Pre-APK conversion capability)
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          let closest = STORES[0];
          let minDistance = Infinity;

          STORES.forEach(store => {
            const dist = calculateDistance(latitude, longitude, store.lat, store.lng);
            if (dist < minDistance) {
              minDistance = dist;
              closest = store;
            }
          });

          setNearestStore(closest);
          setLocationFound(true);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-light selection:bg-primary/20 selection:text-primary transition-all duration-300">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} nearestStore={nearestStore} />
      
      {/* Mobile Install Banner - Disappears when installed as APK/PWA */}
      {deferredPrompt && (
        <div className="fixed bottom-24 left-4 right-4 z-[60] bg-text-main text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-white/10 animate-fade-in-up md:hidden">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">install_mobile</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest">Native Experience</span>
              <span className="text-[10px] opacity-70">Install App for full features</span>
            </div>
          </div>
          <button 
            onClick={handleInstallClick}
            className="bg-primary px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform"
          >
            Get App
          </button>
        </div>
      )}

      <main>
        <Hero nearestStore={nearestStore} />
        <CafeOverview nearestStore={nearestStore} locationFound={locationFound} />
        <MenuSection onBrowseMenu={() => setIsMenuOpen(true)} />
        <Atmosphere />
        <AboutSection nearestStore={nearestStore} />
      </main>
      <Footer nearestStore={nearestStore} />
      
      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </div>
  );
};

export default App;
