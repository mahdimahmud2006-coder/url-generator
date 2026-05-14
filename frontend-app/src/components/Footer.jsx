import React from 'react';
import { Code, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-xl font-bold tracking-tight text-white">Shortly</span>
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Shortly Inc. All rights reserved. <br />
              Crafted with precision for the modern web.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
