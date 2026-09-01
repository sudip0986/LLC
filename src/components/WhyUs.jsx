import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { id: '01', title: 'Licensed & Insured', desc: 'All technicians are fully licensed, bonded, and insured for your peace of mind.', icon: <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> },
  { id: '02', title: 'Fast Response Time', desc: "Property emergencies can't wait. Same-day service when you need it most.", icon: <><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></> },
  { id: '03', title: 'Satisfaction Guaranteed', desc: "100% guaranteed. If you're not happy, we'll make it right — no questions asked.", icon: <><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path><path d="M7 10v12"></path></> },
  { id: '04', title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges. Clear upfront estimates before we start.', icon: <><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></> },
  { id: '05', title: '24/7 Availability', desc: 'Available around the clock for emergency situations, any day of the year.', icon: <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path> },
  { id: '06', title: 'Proven Track Record', desc: '500+ satisfied clients and 5-star rating. Trusted property maintenance agency.', icon: <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path> }
];

const WhyUs = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="why-us" className="section-padding bg-white" ref={ref}>
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-14">
        <div className="section-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Why Choose Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 mt-4">
          The United Trade Alliance <span className="text-blue-500">Difference</span>
        </h2>
        <div className="gold-divider"></div>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
          We build lasting relationships based on trust, quality, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <div key={feature.id} className="bg-gray-50 border border-gray-200 rounded-xl p-6 transition-all duration-300 flex flex-col gap-3 hover:bg-blue-50">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg flex-shrink-0 bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <div className="text-gray-300 font-bold text-3xl leading-none">{feature.id}</div>
            </div>
            <h3 className="text-gray-900 font-semibold text-base m-0 mt-1">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed m-0">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-red-50 border border-blue-100 rounded-2xl p-10 text-center flex flex-col items-center gap-5">
        <h3 className="text-gray-900 font-bold text-xl md:text-2xl m-0">Ready to Get Started?</h3>
        <p className="text-gray-500 text-sm m-0 max-w-lg">Join hundreds of satisfied clients who trust United Trade Alliance LLC.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-7 py-3 rounded-lg border-none cursor-pointer transition-colors flex items-center gap-2">
          Get Your Free Quote Today
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
    </section>
  );
};

export default WhyUs;
