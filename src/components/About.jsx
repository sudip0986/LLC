import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Left side box */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
          <div className="w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
            <img src="https://unitedtallc.com/logo.png" alt="United Trade Alliance LLC Logo" className="w-full h-full object-contain p-2" />
          </div>
          <h3 className="text-gray-900 font-bold text-xl mb-2 m-0">United Trade Alliance LLC</h3>
          <p className="text-blue-500 font-semibold text-xs tracking-wider mb-5 mt-2 uppercase">Property Maintenance Services</p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-7 m-0">
            Delivering comprehensive property maintenance solutions with professional expertise and trusted care.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-100">
            <div>
              <div className="text-blue-500 font-bold text-lg md:text-xl">500+</div>
              <div className="text-gray-400 text-xs mt-1">Clients</div>
            </div>
            <div>
              <div className="text-blue-500 font-bold text-lg md:text-xl">10+</div>
              <div className="text-gray-400 text-xs mt-1">Years</div>
            </div>
            <div>
              <div className="text-blue-500 font-bold text-lg md:text-xl">50+</div>
              <div className="text-gray-400 text-xs mt-1">Cities</div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div>
          <div className="section-badge !mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 mt-4">
            Professional Property Care <span className="text-blue-500">You Can Trust</span>
          </h2>
          <div className="gold-divider !mx-0"></div>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 mt-6">
            We are the leading property maintenance provider — delivering professional, comprehensive solutions. With over a decade of experience and unwavering commitment to excellence, we provide reliable, high-quality services that homeowners and businesses depend on.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            From emergency repairs to routine maintenance, our licensed professionals handle every job with precision, transparency, and complete dedication to your satisfaction.
          </p>

          <ul className="list-none p-0 mb-8 space-y-3">
            {[
              "Over 10 years of trusted property maintenance service",
              "Licensed, insured & certified professionals",
              "Emergency repairs available 24/7",
              "Serving residential and commercial properties",
              "Transparent pricing — no hidden fees",
              "100% satisfaction guaranteed"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-7 py-3 rounded-lg border-none cursor-pointer transition-colors">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
