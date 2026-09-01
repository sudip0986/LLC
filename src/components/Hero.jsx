import React, { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [typedText, setTypedText] = useState('');
  const fullText = "United Trade Alliance";
  
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    setTypedText(''); // reset just in case
    
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [isVisible, fullText]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-6 py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.05)_0%,_transparent_70%)]"></div>
      
      <div className={`relative z-10 max-w-4xl text-center flex flex-col items-center gap-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 text-blue-500 text-xs font-semibold tracking-wide">
            ✨ Professional Property Care
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight m-0 min-h-[3.5rem] md:min-h-[5rem]">
          <span className="block text-blue-500 mb-2">
            {typedText}<span className="typing-cursor font-light">|</span>
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed m-0">
          Professional property maintenance services trusted by businesses and homeowners. Comprehensive care, exceptional results.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-lg border-none cursor-pointer flex items-center gap-2 transition-colors">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <button className="bg-gray-50 hover:bg-gray-100 text-blue-500 font-semibold text-sm md:text-base px-6 py-3 rounded-lg border border-gray-200 cursor-pointer transition-colors">
            Explore Services
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-12 pt-10 border-t border-gray-200 w-full max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500">500+</div>
            <div className="text-xs text-gray-400 mt-1.5">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500">10+</div>
            <div className="text-xs text-gray-400 mt-1.5">Years Experience</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500">9</div>
            <div className="text-xs text-gray-400 mt-1.5">Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
