
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, id: Page) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
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
            <p className="text-slate-500 leading-relaxed">
              Excellence in veterinary medicine with a heart. Dedicated to the health and happiness of every pet in our community.
            </p>
            <div className="flex gap-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-jakarta text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><button onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-teal-600 transition-colors">Home</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-teal-600 transition-colors">Our Services</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'checker')} className="hover:text-teal-600 transition-colors">AI Symptom Checker</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-jakarta text-slate-900 mb-6">Clinic Info</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot text-teal-600 mt-1"></i>
                <span>123 Bark Lane, <br />Petville, NY 10001</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone text-teal-600 mt-1"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-envelope text-teal-600 mt-1"></i>
                <span>hello@pawprintwell.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-jakarta text-slate-900 mb-6">Operating Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-slate-500">
                <span>Mon - Fri</span>
                <span className="text-slate-900 font-semibold">8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between text-slate-500">
                <span>Saturday</span>
                <span className="text-slate-900 font-semibold">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-slate-500">
                <span>Sunday</span>
                <span className="text-red-500 font-bold italic">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-teal-50 rounded-2xl border border-teal-100">
              <p className="text-xs text-teal-800 font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle-info"></i>
                24/7 Phone Support for Clients
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2024 PawPrint Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={(e) => e.preventDefault()} className="hover:text-slate-600 transition-colors">Privacy Policy</button>
            <button onClick={(e) => e.preventDefault()} className="hover:text-slate-600 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
