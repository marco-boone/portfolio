/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        content: "36rem",
      },
      colors: {
        // Modus Vivendi (from ~/.config/themes/palettes/modus_vivendi.conf)
        // Background tokens first so `text-base` (font size) doesn't win over `text-text` color.
        crust: '#000000',
        mantle: '#000000',
        base: '#000000',
        surface0: '#1f1f1f',
        surface1: '#303030',
        surface2: '#535353',
        overlay0: '#4c4c4c',
        overlay1: '#646464',
        overlay2: '#a6a6a6',
        subtext0: '#999999',
        subtext1: '#c6c6c6',
        text: '#ffffff',
        primary: '#2fafff',
        red: '#ff5f59',
        maroon: '#ff6b55',
        flamingo: '#ff6b55',
        rosewater: '#feacd0',
        peach: '#fec43f',
        pink: '#feacd0',
        mauve: '#b6a0ff',
        lavender: '#79a8ff',
        blue: '#2fafff',
        sapphire: '#79a8ff',
        sky: '#00d3d0',
        teal: '#6ae4b9',
        green: '#44bc44',
        yellow: '#d0bc00',
      },
    },
  },
  plugins: [],
};
