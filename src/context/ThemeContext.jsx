import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

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
  const [mode, setMode] = useState(() => {
    const savedMode = readStorage('atelier-mode', 'light');
    return savedMode === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    writeStorage('atelier-mode', mode);
  }, [mode]);

  const value = useMemo(() => ({
    mode,
    toggleMode: () => setMode((current) => current === 'light' ? 'dark' : 'light'),
  }), [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
