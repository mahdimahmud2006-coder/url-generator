import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const UrlForm = ({ onShorten, isLoading }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!url) {
      setError('Please paste a URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL (include http:// or https://)');
      return;
    }

    onShorten(url);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative flex items-center p-2 rounded-2xl glass-card transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 group-hover:border-white/20">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 text-lg placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 min-w-[140px]"
          >
            {isLoading ? (
              <LoadingSpinner size="sm" color="gray" />
            ) : (
              <>
                <span>Shorten</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-2 text-red-400 text-sm animate-fade-in">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default UrlForm;
