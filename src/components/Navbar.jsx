import React, { useState, useEffect } from 'react';

export default function Navbar({ systemStatus = 'Checking', activeTab = 'verify', setActiveTab }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getStatusColorClass = () => {
    switch (systemStatus) {
      case 'Ready':
        return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
      case 'Offline':
        return 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]';
      default:
        return 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]';
    }
  };

  const getLinkClass = (tabName) => {
    const base = "font-medium font-label-md text-label-md transition-all cursor-pointer pb-1";
    if (activeTab === tabName) {
      return `${base} text-primary font-bold border-b-2 border-primary`;
    }
    return `${base} text-on-surface-variant hover:text-primary`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-full">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('verify')}
        >
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          <span className="text-headline-md font-headline-md font-semibold text-on-surface">Veritas AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button 
            className={getLinkClass('verify')} 
            onClick={() => setActiveTab('verify')}
          >
            Verify News
          </button>
          <span className="text-on-surface-variant/20 font-medium font-label-md text-label-md cursor-not-allowed">
            Fact Check Explorer
          </span>
          <span className="text-on-surface-variant/20 font-medium font-label-md text-label-md cursor-not-allowed">
            Knowledge Graph
          </span>
          <button 
            className={getLinkClass('about')} 
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className={`w-2 h-2 rounded-full ${getStatusColorClass()}`}></span>
            <span className="text-label-sm font-label-sm text-on-surface-variant">System Status: {systemStatus}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
