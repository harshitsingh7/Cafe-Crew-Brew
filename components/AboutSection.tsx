
import React from 'react';
import { Store } from '../types';

interface AboutSectionProps {
  nearestStore: Store;
}

const AboutSection: React.FC<AboutSectionProps> = ({ nearestStore }) => {
  const isSaritaVihar = nearestStore.id === 'sarita-vihar';

  const categories = [
    {
      title: "Accessibility",
      icon: "accessible",
      items: [
        "Assistive hearing loop",
        "Wheelchair-accessible car park",
        "Wheelchair-accessible entrance",
        "Wheelchair-accessible seating",
        "Wheelchair-accessible toilet"
      ]
    },
    {
      title: "Service Options",
      icon: "delivery_dining",
      items: [
        "Kerbside pickup",
        "Delivery",
        "Drive-through",
        "Takeaway",
        "Dine-in"
      ]
    },
    {
      title: "Highlights & Vibe",
      icon: "auto_awesome",
      items: [
        "Fireplace",
        "Great coffee",
        "Great tea selection",
        "Sport",
        "Solo dining friendly",
        "Casual & Trendy atmosphere"
      ]
    },
    {
      title: "Dining & Offerings",
      icon: "restaurant",
      items: [
        "Breakfast, Brunch & Lunch",
        "Dessert & Small plates",
        "Alcohol & Coffee",
        "Quick bites"
      ]
    },
    {
      title: "Amenities",
      icon: "deck",
      items: [
        "Bar on site",
        "Free Wi-Fi",
        "Restroom",
        "Dogs allowed outside"
      ]
    },
    {
      title: "Crowd & Family",
      icon: "groups",
      items: [
        "Family friendly",
        "LGBTQ+ friendly",
        "University students",
        "Good for kids",
        "Kids' menu"
      ]
    },
    {
      title: "Planning & Payments",
      icon: "payments",
      items: [
        "Accepts reservations",
        "Credit & Debit cards",
        "Google Pay / NFC payments"
      ]
    },
    {
      title: "Parking",
      icon: "local_parking",
      items: [
        "Free parking lot",
        "Free street parking",
        "On-site & Valet parking",
        "Paid parking options"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Our Ethos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">More Than Just a Cafe</h2>
            <p className="text-text-muted text-lg leading-relaxed">
              At Cafe Crew Brew, we pride ourselves on being an inclusive haven. Every detail, from our accessibility features to our curated menu, is designed to welcome everyone in our community.
            </p>
          </div>
          
          <div className="flex flex-col items-center p-8 bg-secondary/50 rounded-[2.5rem] border border-primary/10 shadow-inner">
             <span className="material-symbols-outlined text-primary text-5xl mb-4">verified_user</span>
             <h4 className="font-serif font-bold text-xl text-text-main mb-2">From the Business</h4>
             <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <span className="material-symbols-outlined text-[18px]">woman</span>
                Identifies as women-owned
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-background-light border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <h3 className="font-bold text-text-main tracking-tight">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted group-hover:text-text-main transition-colors">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;
