import { useEffect, useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold">🎬 Movie Info App</h1>
      <button
        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
