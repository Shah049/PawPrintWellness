
import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-4 py-2 rounded-full text-teal-700 font-semibold text-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-pulse"></span>
              Accepting New Patients
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold font-jakarta leading-tight text-slate-900">
              Giving Your Pets <br />
              <span className="gradient-text">The Care They Deserve</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At PawPrint Wellness, we combine compassionate veterinary care with cutting-edge technology. From routine checkups to emergency surgeries, your pet's health is our top priority.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/30 hover:-translate-y-1 active:scale-95"
              >
                Our Services
              </button>
              <button 
                onClick={() => onNavigate('checker')}
                className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all hover:border-teal-200 shadow-sm"
              >
                AI Symptom Checker
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://picsum.photos/seed/${i+10}/100/100`} alt="happy pet owner" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="text-slate-900 font-bold">500+</span> Happy Paws & Tails served
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800" 
                alt="Compassionate vet examining a dog" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </div>
                <span className="font-bold text-slate-900">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Average rating from our pet parents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
