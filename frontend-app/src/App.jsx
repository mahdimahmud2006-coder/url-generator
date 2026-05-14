import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UrlForm from './components/UrlForm';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';
import ToastNotification from './components/ToastNotification';

import { shortenUrl } from './utils/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleShorten = async (url) => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const data = await shortenUrl(url);
      if (data.success) {
        setResult({
          original: data.data.original_url,
          short: data.data.short_url
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <HeroSection>
          <UrlForm onShorten={handleShorten} isLoading={isLoading} />
          
          {result && (
            <ResultCard 
              originalUrl={result.original} 
              shortenedUrl={result.short} 
            />
          )}
        </HeroSection>
        
        {/* Features Section - Placeholder for premium feel */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Lightning Fast" 
              description="Our global edge network ensures your links redirect instantly, anywhere in the world." 
            />
            <FeatureCard 
              title="Detailed Analytics" 
              description="Track clicks, referrers, and locations with our beautiful real-time dashboard." 
            />
            <FeatureCard 
              title="Custom Branding" 
              description="Use your own domain and create custom aliases that reflect your brand identity." 
            />
          </div>
        </section>
      </main>

      <Footer />

      {error && (
        <ToastNotification 
          message={error} 
          type="error" 
          onClose={() => setError(null)} 
        />
      )}
    </div>
  );
}


const FeatureCard = ({ title, description }) => (
  <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
    <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
  </div>
);

export default App;
