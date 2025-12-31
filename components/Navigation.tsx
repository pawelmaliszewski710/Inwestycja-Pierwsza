import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Lokalizacja', href: '#lokalizacja' },
  { name: 'O inwestycji', href: '#o-inwestycji' },
  { name: 'Mieszkania', href: '#mieszkania' },
  { name: 'Nawigator', href: '#nawigator' },
  { name: 'O inwestorze', href: '#o-inwestorze' },
  { name: 'Kontakt', href: '#kontakt' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:bg-primary-700 transition-colors">
                DS
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-primary-900 group-hover:text-primary-700 transition-colors">DEV</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 hover:text-primary-900 font-medium text-sm transition-colors cursor-pointer relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+48123456789"
              className="flex items-center gap-2 bg-primary-900 text-white px-6 py-2.5 rounded-full hover:bg-primary-800 transition-all hover:shadow-lg hover:-translate-y-0.5 font-semibold text-sm"
            >
              <Phone size={16} />
              <span>+48 123 456 789</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-primary-700 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-900 hover:bg-primary-50 cursor-pointer transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+48123456789"
              className="block w-full text-center mt-6 px-5 py-3 rounded-xl bg-primary-900 text-white font-bold shadow-md"
            >
              Zadzwoń: +48 123 456 789
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};