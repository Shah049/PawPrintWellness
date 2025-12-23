
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SymptomChecker from './components/SymptomChecker';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';

export type Page = 'home' | 'services' | 'checker' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={navigateTo} />
            
            {/* About Section Teaser */}
            <section id="about" className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800" 
                      alt="Dr. Sarah Mitchell" 
                      className="rounded-3xl shadow-xl w-full object-cover h-[400px]"
                    />
                    <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-100">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl font-bold text-teal-600">15+</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Years Experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm">Meet Our Lead Vet</h2>
                    <h3 className="text-4xl font-extrabold font-jakarta text-slate-900 leading-tight">Personalized Care for Your Best Friend</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Hi, I'm Dr. Sarah Mitchell. For over 15 years, I've dedicated my life to the health of animals. At PawPrint Wellness, we treat every pet as if they were our own family member.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-1">DVM Certified</h4>
                        <p className="text-sm text-slate-500">Cornell University</p>
                      </div>
                      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-1">AAHA Member</h4>
                        <p className="text-sm text-slate-500">Excellence Award</p>
                      </div>
                    </div>
                    <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
                      Read Full Bio
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <Services />
            <SymptomChecker />

            {/* Testimonials */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h3 className="text-4xl font-extrabold font-jakarta mb-4">What Our Clients Say</h3>
                <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                {[
                  { name: "Emily Chen", pet: "Milo (Golden Retriever)", comment: "The best vet experience we've ever had. Pawsy suggested it was an emergency and Dr. Sarah saved Milo's life!" },
                  { name: "Marcus Smith", pet: "Luna (Siamese Cat)", comment: "Clean facility, friendly staff, and the AI symptom checker is a game-changer for midnight worries." },
                  { name: "Jessica Lane", pet: "Cooper (French Bulldog)", comment: "Compassionate, knowledgeable, and tech-forward. I love getting updates and booking through their site." }
                ].map((t, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl space-y-4 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex gap-1 text-yellow-500">
                      <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-slate-700 italic">"{t.comment}"</p>
                    <div className="flex items-center gap-4 pt-4">
                      <img src={`https://picsum.photos/seed/${i+100}/100/100`} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt={t.name} />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                        <p className="text-xs text-slate-500">{t.pet}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-teal-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-600/20">
                   <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                   <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
                   
                   <h3 className="text-4xl lg:text-5xl font-extrabold font-jakarta mb-6 relative z-10 leading-tight">Ready to Give Your Pet the Best?</h3>
                   <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto relative z-10">
                     Join the PawPrint Wellness family today. New clients get 20% off their first wellness examination!
                   </p>
                   <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                      <button className="bg-white text-teal-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                        Schedule Now
                      </button>
                      <button className="bg-teal-700/50 backdrop-blur border border-teal-400/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-teal-700/70 transition-all">
                        Call Our Clinic
                      </button>
                   </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
