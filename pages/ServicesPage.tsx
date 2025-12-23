
import React from 'react';
import { Page } from '../App';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const detailedServices = [
    {
      title: "Wellness Exams",
      tag: "Prevention",
      description: "Preventative care is the cornerstone of a long, healthy life. Our nose-to-tail exams are tailored to your pet's specific age, breed, and lifestyle. We check vitals, eyes, ears, dental health, and overall condition to catch potential issues early.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=600",
      features: ["Full Physical Exam", "Nutritional Consultation", "Life-Stage Guidance"]
    },
    {
      title: "Vaccinations",
      tag: "Protection",
      description: "We design custom immunization protocols based on your pet's risk factors. Whether you have an indoor cat or a dog that loves the park, we ensure they have the protection they need against rabies, distemper, parvo, and more.",
      image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=600",
      features: ["Core Vaccines", "Lifestyle-Specific Shots", "Digital Records"]
    },
    {
      title: "Dental Care",
      tag: "Oral Health",
      description: "Oral health impacts your pet's entire body. Our dental suite provides professional scaling, polishing, and oral surgery. We use advanced monitoring to ensure safety during procedures and provide home-care education.",
      image: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&q=80&w=600",
      features: ["Ultrasonic Scaling", "Polishing", "Digital Dental X-Rays"]
    },
    {
      title: "Advanced Surgery",
      tag: "Specialized",
      description: "From routine spays and neuters to complex soft-tissue and orthopedic surgeries, our experienced surgical team prioritizes pain management and safety. We use state-of-the-art monitoring equipment for every procedure.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600",
      features: ["Soft Tissue Surgery", "Orthopedics", "Advanced Pain Control"]
    },
    {
      title: "Emergency Services",
      tag: "Critical Care",
      description: "In an emergency, every second counts. Our triage team is trained for rapid assessment and treatment of trauma, toxicities, and sudden illness. We are equipped with oxygen therapy and life-support systems.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
      features: ["Rapid Triage", "Intensive Care Unit", "Oxygen Therapy"]
    },
    {
      title: "Diagnostic Imaging",
      tag: "Precision",
      description: "Seeing clearly is the first step to healing. Our in-house digital radiology and ultrasound allow us to diagnose internal issues instantly, reducing stress for your pet and providing answers faster.",
      image: "https://images.unsplash.com/photo-1579154235602-3c2c23707f35?auto=format&fit=crop&q=80&w=600",
      features: ["Digital X-Ray", "Ultrasound", "In-house Laboratory"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden mb-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover" 
            alt="Vet background" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-jakarta text-white mb-6">Our Comprehensive Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From pediatric care to geriatric support, we provide excellence in veterinary medicine for every stage of your pet's life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {detailedServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  {service.tag}
                </span>
                <h2 className="text-4xl font-extrabold font-jakarta text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-[10px]">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 flex gap-4">
                  <button className="bg-teal-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
                    Book This Service
                  </button>
                  <button className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                    Inquire Online
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-teal-600 rounded-[2.5rem] rotate-3 scale-105 opacity-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover relative z-10 border-4 border-white"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick FAQ / Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-extrabold font-jakarta text-slate-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { q: "How often should my pet have a wellness exam?", a: "We recommend annual exams for adult pets and bi-annual exams for senior pets over 7 years old." },
                { q: "Do I need an appointment for emergency care?", a: "No appointment is needed for emergencies, but calling ahead helps our team prepare for your arrival." }
              ].map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-slate-900">{faq.q}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8 bg-slate-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold font-jakarta text-slate-900">Need immediate help?</h3>
            <p className="text-slate-600">Our team is ready to assist you. If your pet is showing symptoms, try our AI checker or call us immediately.</p>
            <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onNavigate('checker')}
                 className="bg-teal-600 text-white py-4 rounded-2xl font-bold hover:bg-teal-700 transition-all"
               >
                 Go to Symptom Checker
               </button>
               <a href="tel:5551234567" className="bg-white text-slate-900 py-4 rounded-2xl font-bold text-center border border-slate-200 hover:bg-slate-50 transition-all">
                 Call (555) 123-4567
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
