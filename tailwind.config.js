/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bounce2px: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
        increaseSize: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        bgChange: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s ease-in-out ',
        'bounce': 'bounce 1s ease-in-out 3',
        'bounceImg': 'bounce2px 2s linear 10000000000',
        'ping': 'ping 1s ease-in-out 1',
        'increaseSize': 'increaseSize 1s ease-in-out forwards',
        'increaseSize2': 'increaseSize .5s ease-in-out forwards',
        'bgChange': 'bgChange 2s ease-in-out infinite',
      },
      fontFamily: {
        sans: ["Playwrite MX",'cursive'],
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
