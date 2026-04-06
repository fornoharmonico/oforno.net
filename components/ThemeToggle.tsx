import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('light');
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-surface text-primary flex items-center justify-center border border-border hover:scale-110 transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-400" />}
    </button>
  );
};
