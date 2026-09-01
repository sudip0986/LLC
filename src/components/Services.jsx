import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { id: 1, title: 'Appliance Services', desc: 'Expert repair and maintenance for all major appliances. Fast, reliable service by certified technicians.', icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path> },
  { id: 2, title: 'Plumbing Services', desc: 'Professional plumbing solutions for repairs, installations, and maintenance. Quick response time.', icon: <><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></> },
  { id: 3, title: 'Electrical Services', desc: 'Licensed electrical services including wiring, panel upgrades, lighting, and troubleshooting.', icon: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path> },
  { id: 4, title: 'HVAC Services', desc: 'Complete heating, ventilation, and air conditioning services for year-round comfort.', icon: <><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></> },
  { id: 5, title: 'Handyman Services', desc: 'Versatile handyman solutions for all property needs, from minor repairs to full installations.', icon: <><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></> },
  { id: 6, title: 'Re-Key Services', desc: 'Professional lock rekeying and security services to protect your property efficiently.', icon: <><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></> },
  { id: 7, title: 'Landscaping Services', desc: 'Complete lawn care and landscaping solutions with mowing, trimming, and design.', icon: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></> },
  { id: 8, title: 'Door & Window Services', desc: 'Expert installation, repair, and maintenance of doors and windows for security.', icon: <><path d="M11 20H2"></path><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"></path><path d="M11 4H8a2 2 0 0 0-2 2v14"></path><path d="M14 12h.01"></path><path d="M22 20h-3"></path></> },
  { id: 9, title: 'Cleaning Services', desc: 'Professional deep cleaning services for residential and commercial properties.', icon: <><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></> },
];

const Services = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-gray-50" ref={ref}>
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-14">
        <div className="section-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg> 
          Services
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 mt-4">
          Comprehensive <span className="text-blue-500">Property Services</span>
        </h2>
        <div className="gold-divider"></div>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
          9 professional services delivered by licensed experts with a satisfaction guarantee.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {service.icon}
              </svg>
            </div>
            <h3 className="text-gray-900 font-semibold text-base mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed m-0">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
