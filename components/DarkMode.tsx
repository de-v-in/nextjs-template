'use client';

import { useAppStore } from '@states/app';

export const ChangeDarkMode = () => {
  const { darkMode, setDarkMode } = useAppStore();

  return (
    <button
      onClick={() => setDarkMode(darkMode === 'dark' ? 'light' : 'dark')}
      className="active:scale-75 ease-in-out duration-500 rounded-full bg-blue-400 text-white p-2 mt-3">
      Change Dark Mode
    </button>
  );
};
