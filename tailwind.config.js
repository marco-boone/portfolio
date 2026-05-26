/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        content: "36rem",
      },
      colors: {
        // JetBrains Darcula (foot: jetbrains-darcula theme)
        primary: '#4581eb',
        red: '#fa5355',
        maroon: '#fb7172',
        flamingo: '#fb7172',
        rosewater: '#fb7172',
        peach: '#c2c300',
        pink: '#fa54ff',
        mauve: '#fb82ff',
        lavender: '#6d9df1',
        blue: '#4581eb',
        sapphire: '#6d9df1',
        sky: '#60d3d1',
        teal: '#33c2c1',
        green: '#67ff4f',
        yellow: '#c2c300',
        text: '#adadad',
        subtext1: '#bbbbbb',
        subtext0: '#939393',
        overlay2: '#808080',
        overlay1: '#6e6e6e',
        overlay0: '#545454',
        surface2: '#45494a',
        surface1: '#3c3f41',
        surface0: '#313335',
        base: '#2b2b2b',
        mantle: '#282828',
        crust: '#202020',
      },
    },
  },
  plugins: [],
};
