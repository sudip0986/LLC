import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  { id: 1, text: "United Trade Alliance LLC fixed our HVAC in under 2 hours. Incredibly professional, on time, and fairly priced.", author: "Marcus Thompson", role: "Homeowner · Manhattan", initials: "MT" },
  { id: 2, text: "The cleaning team is exceptional. They transformed our commercial space and now handle all our routine maintenance.", author: "Sarah Jenkins", role: "Business Owner · Brooklyn", initials: "SJ" },
  { id: 3, text: "When a pipe burst at 2 AM, UTA was there. Their emergency plumbing service saved our property from major water damage.", author: "David Chen", role: "Property Manager · Queens", initials: "DC" },
  { id: 4, text: "Very responsive and transparent about pricing. The electrician was knowledgeable and fixed the wiring issue quickly.", author: "Emily Roberts", role: "Homeowner · Staten Island", initials: "ER" },
  { id: 5, text: "Our landscaping has never looked better. They are reliable, thorough, and really care about the details.", author: "Michael Chang", role: "HOA President · Bronx", initials: "MC" },
  { id: 6, text: "We rely on UTA for all our facility maintenance. From door repairs to appliance fixes, they always deliver quality work.", author: "Jessica Almeda", role: "Restaurant Owner · Manhattan", initials: "JA" }
];

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden" ref={ref}>
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-14 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="section-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            Client Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 mt-4">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Real feedback from clients who trust United Trade Alliance LLC.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden w-full group">
          <div className="animate-marquee flex gap-6 px-3 whitespace-nowrap min-w-max">
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <div key={`t1-${testimonial.id}`} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col gap-3.5 w-80 md:w-96 whitespace-normal hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-100"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 fill-yellow-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 m-0">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-3.5 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-900 font-semibold text-sm truncate">{testimonial.author}</div>
                    <div className="text-gray-400 text-xs truncate">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicated set for seamless scrolling */}
            {testimonials.map((testimonial) => (
              <div key={`t2-${testimonial.id}`} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col gap-3.5 w-80 md:w-96 whitespace-normal hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-100"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 fill-yellow-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 m-0">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-3.5 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-900 font-semibold text-sm truncate">{testimonial.author}</div>
                    <div className="text-gray-400 text-xs truncate">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
