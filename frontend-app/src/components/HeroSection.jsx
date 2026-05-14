import React from 'react';

const HeroSection = ({ children }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[140px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-accent/15 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center animate-entrance relative">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Trusted by 10,000+ teams worldwide
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
          Shorten your links <br /> 
          <span className="text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">with style.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          The elite URL shortener for modern brands. Track performance, custom domains, and links that actually look good.
        </p>
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
