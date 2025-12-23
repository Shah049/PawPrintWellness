
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Wellness Exams',
    description: 'Comprehensive physical examinations tailored to your pet\'s life stage and specific needs.',
    icon: 'fa-stethoscope',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    id: '2',
    title: 'Vaccinations',
    description: 'Protection against common diseases with a customized immunization schedule.',
    icon: 'fa-syringe',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: '3',
    title: 'Emergency Care',
    description: 'Immediate medical attention for critical situations when every second counts.',
    icon: 'fa-ambulance',
    color: 'bg-red-50 text-red-600',
  },
  {
    id: '4',
    title: 'Dental Health',
    description: 'Professional cleaning and oral surgery to keep your pet\'s breath fresh and teeth healthy.',
    icon: 'fa-tooth',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: '5',
    title: 'Surgery',
    description: 'State-of-the-art surgical suites for both routine and complex procedures.',
    icon: 'fa-house-medical',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: '6',
    title: 'Diagnostic Labs',
    description: 'In-house blood work, digital radiology, and ultrasound for rapid results.',
    icon: 'fa-microscope',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold font-jakarta">Complete Health Solutions</h3>
          <p className="text-lg text-slate-600">
            We offer a wide range of services to ensure your furry friends stay healthy, happy, and vibrant throughout their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-3xl border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-600/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110 ${service.color}`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold font-jakarta mb-4 text-slate-900 group-hover:text-teal-700">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center font-bold text-teal-600 hover:text-teal-700 gap-2 text-sm group-hover:translate-x-1 transition-transform">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
