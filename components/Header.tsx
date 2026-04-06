import React, { useState, useCallback } from 'react';
import { Menu, X } from './Icons';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onNewsletterClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewsletterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = useCallback((e: React.MouseEvent, item: NavItem) => {
    if (item.external) return; // Let default behavior happen (open in new tab)
    
    e.preventDefault();
    setIsOpen(false);

    if (item.action && onNewsletterClick) {
      onNewsletterClick();
      return;
    }

    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onNewsletterClick]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
      <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img 
            src="https://i.postimg.cc/RhpFKdKb/LOGO-FORNO-branco-sem-fundo.png" 
            alt="O Forno" 
            className="h-10 md:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity block [.light_&]:hidden"
          />
          <img 
            src="https://i.postimg.cc/Dzh21XJr/logo-forno-sem-fundo.png" 
            alt="O Forno" 
            className="h-10 md:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity hidden [.light_&]:block"
          />
        </a>

        {/* Desktop Nav - Clean, Geometric, Apple-like */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map((item: NavItem) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-[11px] font-sans font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-widest relative group cursor-pointer"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
                {/* Subtle dot indicator instead of full underline for a cleaner look */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full opacity-50"></span>
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Clean list */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-8 flex flex-col gap-8 shadow-2xl h-[calc(100vh-5rem)] z-50 overflow-y-auto">
          {NAV_ITEMS.map((item: NavItem) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-2xl font-sans font-medium tracking-tight text-secondary hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;