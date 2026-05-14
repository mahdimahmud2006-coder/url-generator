import React, { useState } from 'react';
import { Copy, Check, QrCode, ExternalLink } from 'lucide-react';

const ResultCard = ({ originalUrl, shortenedUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 animate-slide-up">
      <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden">
        {/* Success Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[60px] rounded-full"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Original URL</p>
              <p className="text-gray-300 truncate max-w-xs md:max-w-md">{originalUrl}</p>
            </div>
            
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Shortened URL</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white tracking-tight">{shortenedUrl}</span>
                <button 
                  onClick={handleCopy}
                  className={`p-2 rounded-lg transition-all duration-300 ${copied ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                Visit Link
              </button>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                Analytics (Coming Soon)
              </button>
            </div>
          </div>

          <div className="w-full md:w-32 h-32 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/10 transition-colors">
            <QrCode className="w-12 h-12 text-gray-500 group-hover:text-white transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300">QR Code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
