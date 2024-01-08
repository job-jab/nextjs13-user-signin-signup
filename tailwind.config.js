/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './Configs/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rainbows': 'url(https://tailwindui.com/img/beams-pricing.png)',
        'logos': 'url(https://i.ibb.co/cwBpK4g/screenshot20231231-removebg-preview.png)',
      },
      colors: {
        'ct-dark-600': '#222',
        'ct-dark-200': '#e5e7eb',
        'ct-dark-100': '#f5f6f7',
        'ct-blue-600': '#2363eb', 
        'ct-yellow-600': '#f9d13e',
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1125px',
        xl: '1125px',
        '2xl': '1125px',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@headlessui/tailwindcss"),
  ],
};
