import { atom } from "recoil";

/**
 * Global dark mode state of app
 */
const atomDarkMode = atom<TDarkModeStatus>({
  key: "DARK_MODE_STATE",
  default: "auto",
});

export { atomDarkMode };
