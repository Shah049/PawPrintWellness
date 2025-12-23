
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Symptom Checker', id: 'checker' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, id: Page) => {
    e.preventDefault();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-teal-600 p-2 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold font-jakarta text-slate-900">
              PawPrint<span className="text-teal-600">Wellness</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className={`font-medium transition-colors relative py-1 ${
                  currentPage === link.id ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
                )}
              </button>
            ))}
            <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-95">
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute top-full left-0 right-0 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleNavLinkClick(e, link.id)}
                className={`text-left font-medium px-4 py-2 rounded-lg transition-colors ${
                  currentPage === link.id ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
