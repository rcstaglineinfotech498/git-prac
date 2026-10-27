/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-bg)',
        accent: 'var(--color-accent)',
        'accent-contrast': 'var(--color-accent-contrast)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
};
