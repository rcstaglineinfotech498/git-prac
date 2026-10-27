import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);
const themes = ['a', 'b', 'c', 'd', 'e'];

function readStorage(key, fallback) {
  try {
    if (typeof window === 'undefined') return fallback;
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // Ignore storage errors from restricted or unavailable browser storage.
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readStorage('atelier-theme', 'a'));
  const [mode, setMode] = useState(() => readStorage('atelier-mode', 'light'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.mode = mode;
    writeStorage('atelier-theme', theme);
    writeStorage('atelier-mode', mode);
  }, [theme, mode]);

  const value = useMemo(() => ({
    theme,
    mode,
    themes,
    setTheme: (next) => setTheme(themes.includes(next) ? next : 'a'),
    toggleMode: () => setMode((current) => current === 'light' ? 'dark' : 'light'),
  }), [theme, mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
