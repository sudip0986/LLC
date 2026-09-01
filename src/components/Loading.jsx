import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white to-blue-50 flex items-center justify-center z-[9999] animate-fade-out pointer-events-none">
      <div className="text-center flex flex-col items-center gap-6">
        <div className="animate-spin-slow">
          <img 
            src="https://unitedtallc.com/logo.png" 
            alt="United Trade Alliance LLC" 
            className="w-24 h-24 rounded-xl object-contain bg-white p-3 shadow-[0_8px_24px_rgba(59,130,246,0.15)]"
          />
        </div>
        <div>
          <h1 className="m-0 text-xl font-bold text-gray-900 mb-1.5">Your Alliance Name</h1>
          <p className="m-0 text-xs text-gray-500">© 2026 United Trade Alliance LLC. All rights reserved.</p>
        </div>
        <div className="flex gap-1.5 items-center justify-center mt-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-float"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-float delay-150"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-float delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
