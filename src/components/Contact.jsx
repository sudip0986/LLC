import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={ref}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div>
          <div className="section-badge !mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 mt-4">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <div className="gold-divider !mx-0"></div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 mt-6">
            Ready to schedule a service or need a free estimate? Contact us today and our team will get back to you promptly.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold text-base m-0 mb-1">Phone Number</h4>
                <p className="text-gray-500 text-sm m-0">Call us for immediate assistance</p>
                <a href="#" className="text-blue-500 font-medium text-sm mt-1 inline-block no-underline hover:underline">1-800-123-4567</a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold text-base m-0 mb-1">Email Address</h4>
                <p className="text-gray-500 text-sm m-0">Send us your queries anytime</p>
                <a href="#" className="text-blue-500 font-medium text-sm mt-1 inline-block no-underline hover:underline">info@unitedtallc.com</a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold text-base m-0 mb-1">Office Location</h4>
                <p className="text-gray-500 text-sm m-0">Visit our headquarters</p>
                <span className="text-blue-500 font-medium text-sm mt-1 inline-block">123 Main Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
          <h3 className="text-gray-900 font-bold text-xl m-0 mb-6">Send Us a Message</h3>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">First Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">Last Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="(555) 123-4567" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Service Requested *</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-600 appearance-none">
                <option value="">Select a service</option>
                <option value="appliance">Appliance Services</option>
                <option value="plumbing">Plumbing Services</option>
                <option value="electrical">Electrical Services</option>
                <option value="hvac">HVAC Services</option>
                <option value="handyman">Handyman Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Your Message *</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-y min-h-[100px]" placeholder="Tell us how we can help you..."></textarea>
            </div>
            
            <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-4 py-3.5 rounded-lg border-none cursor-pointer transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
