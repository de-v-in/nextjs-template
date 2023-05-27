import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const useAppStore = create(
  combine({ darkMode: false }, (set) => ({
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  }))
);

export default useAppStore;
