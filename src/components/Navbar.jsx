import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-2 focus:outline-none bg-transparent border-none">
          <img src="https://unitedtallc.com/logo.png" alt="United Trade Alliance LLC" className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0" />
        </button>
        
        <div className="hidden md:flex items-center gap-1">
          {['Home', 'About', 'Services', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors border-b-2 border-transparent hover:border-blue-500 focus:outline-none bg-transparent"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden p-2 text-gray-800 bg-transparent border-none focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
