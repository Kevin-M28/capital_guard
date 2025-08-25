'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // On mount, check localStorage or prefers-color-scheme
    const saved = localStorage.getItem('globalTheme');
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('globalTheme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`border-primary bg-secondary w-25 mx-4 rounded border px-2 py-1 transition-colors duration-200 ${theme === 'globalTheme' ? 'text-white' : 'text-black'}`}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
