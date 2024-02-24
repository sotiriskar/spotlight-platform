/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
  color: {
    'red-fire': '#F45B69',
    'blue-queen': '#456990',
    'green-seaweed': '#028090',
  },
  variants: {
    extend: {},
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    'asap': ['Asap', 'sans-serif'],
  },
  plugins: [require('daisyui')],
}
