import React from 'react';
import { Link2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-transform group-hover:scale-110">
              <Link2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Shortly
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">API</a>
              <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 transition-all">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
