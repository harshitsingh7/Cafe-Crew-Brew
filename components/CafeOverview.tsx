
import React from 'react';
import { Store } from '../types';

interface CafeOverviewProps {
  nearestStore: Store;
  locationFound: boolean;
}

const CafeOverview: React.FC<CafeOverviewProps> = ({ nearestStore, locationFound }) => {
  return (
    <div className="relative z-20 px-4 sm:px-6 max-w-[1280px] mx-auto -mt-20 mb-24">
      <div className="bg-surface rounded-[2rem] shadow-2xl border border-secondary p-4 sm:p-8 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-3xl font-serif font-bold text-text-main">The Cafe Overview</h3>
              {locationFound && (
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-green-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Nearest to you
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="text-text-main font-bold text-lg mb-1">{nearestStore.name}</p>
              <p className="text-text-muted text-sm flex items-start gap-2 max-w-xl">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">location_on</span>
                {nearestStore.address}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {[
              { icon: 'diversity_1', label: 'LGBTQ+ Friendly' },
              { icon: 'accessible', label: 'Wheelchair Accessible' },
              { icon: 'wifi', label: 'Free Wi-Fi' }
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary p-2.5 rounded-full text-text-muted hover:text-primary transition-colors cursor-help" title={item.label}>
                <span className="material-symbols-outlined text-[20px] block">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { 
              icon: 'restaurant', 
              title: 'Dine-in', 
              desc: 'Relax in our cozy, art-filled indoor seating area.',
              action: nearestStore.mapsUrl,
              actionLabel: 'Visit Store'
            },
            { 
              icon: 'directions_car', 
              title: 'Drive-thru', 
              desc: 'Quick & contact-free pickup lane for busy days.',
              action: nearestStore.mapsUrl,
              actionLabel: 'Get Directions'
            },
            { 
              icon: 'pedal_bike', 
              title: 'Delivery', 
              desc: 'Bringing the cafe experience to your doorstep.',
              action: nearestStore.orderUrl,
              actionLabel: 'Order Now'
            }
          ].map((service, idx) => (
            <div key={idx} className="group flex flex-col gap-4 p-6 rounded-2xl bg-background-light border border-transparent hover:border-primary/20 transition-all hover:shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform text-primary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main mb-1">{service.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{service.desc}</p>
                </div>
              </div>
              <a 
                href={service.action}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs font-bold text-primary flex items-center gap-1 hover:underline"
              >
                {service.actionLabel}
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeOverview;
