
import React from 'react';
import { Store } from '../types';

interface FooterProps {
  nearestStore: Store;
}

const Footer: React.FC<FooterProps> = ({ nearestStore }) => {
  const isSaritaVihar = nearestStore.id === 'sarita-vihar';

  return (
    <footer className="bg-white border-t border-[#Eae5e0] pt-16 pb-10" id="contact">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">coffee</span>
              <h3 className="font-serif font-bold text-2xl text-text-main">Cafe Crew Brew</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              A minimalist space {isSaritaVihar ? 'dedicated to empowering women and serving the finest ethically sourced coffee.' : 'serving the finest ethically sourced coffee and gourmet bites.'} Join our community and experience the warmth.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { icon: 'social_leaderboard', label: 'Leaderboard' },
              { icon: 'photo_camera', label: 'Instagram' },
              { icon: 'mail', label: 'Email' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-12 h-12 rounded-full bg-background-light flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-sm"
                title={social.label}
              >
                <span className="material-symbols-outlined">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-[#f0ebe6] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-muted">
          <p>© 2024 {isSaritaVihar && 'Powered by Women '}Cafe Crew Brew. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
