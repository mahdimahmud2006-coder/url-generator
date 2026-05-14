import React from 'react';

const HeroSection = ({ children }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center animate-entrance">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Make your links <br /> 
          <span className="text-primary">elegant and short.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The premium URL shortener for modern teams. Track analytics, create custom aliases, and share links that look as good as your content.
        </p>
        
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
