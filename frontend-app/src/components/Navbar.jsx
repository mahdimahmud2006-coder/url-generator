import React from 'react';
import { Link2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Link2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
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
