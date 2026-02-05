
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation configuration
  const navItems = [
    { label: 'Info for Schools', to: '/school-trips' },
    { label: 'Comparison', to: '/#comparison' },
    { label: 'Planning', to: '/tour-info' },
    { label: 'Parents', to: '/parents' },
    { label: 'FAQs', to: '/faqs' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-sans font-extrabold text-2xl text-inkNavy tracking-tighter transition-colors group-hover:text-brass">
            2 teachers <span className="font-serif italic font-light">travel</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.label} 
              to={item.to} 
              className="text-slate hover:text-inkNavy font-bold text-[10px] uppercase tracking-widest transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/why-us" className="text-slate hover:text-inkNavy font-bold text-[10px] uppercase tracking-widest transition-colors">Founder Story</Link>
          <Link to="/contact" className="bg-brass text-white px-6 py-3 rounded-full hover:bg-inkNavy transition-all font-black text-[10px] uppercase tracking-widest shadow-lg shadow-brass/20">Start Planning</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-inkNavy" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-black/5 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map(item => (
             <Link 
               key={item.label} 
               to={item.to} 
               onClick={() => setIsOpen(false)} 
               className="block text-inkNavy font-bold text-base uppercase tracking-tight"
             >
               {item.label}
             </Link>
          ))}
          <Link to="/why-us" onClick={() => setIsOpen(false)} className="block text-inkNavy font-bold text-base uppercase tracking-tight">Founder Story</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brass text-white px-6 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm">Start Planning</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
