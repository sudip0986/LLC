import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 mb-12">
          
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5 overflow-hidden">
                <img src="https://unitedtallc.com/logo.png" alt="United Trade Alliance LLC" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight m-0">United Trade</h3>
                <h3 className="text-white font-bold text-lg leading-tight m-0">Alliance LLC</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed m-0">
              Your trusted partner for professional property maintenance, repair, and facility management services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-blue-400 text-sm transition-colors no-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-5">Our Services</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {['Appliance Services', 'Plumbing Services', 'Electrical Services', 'HVAC Services', 'Handyman Services', 'Cleaning Services'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors no-underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-5">Business Hours</h4>
            <ul className="list-none p-0 m-0 space-y-3 text-sm">
              <li className="flex justify-between text-gray-400">
                <span>Mon - Fri:</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday:</span>
                <span className="text-white">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday:</span>
                <span className="text-white">Closed</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800 text-blue-400 font-medium">
                24/7 Emergency Service Available
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p className="m-0">© {new Date().getFullYear()} United Trade Alliance LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
