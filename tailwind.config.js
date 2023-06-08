/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#F4F4F4'
        },
        purpe: {
          text: '#A666EA'
        },
        'background': 'rgba(0,0,0,.8)',
        'bgButton': 'rgba(0,0,0, 0.7)'

      },
      transitionProprety: {
        'transitionBackground': '.8s cubic-bezier(.2,.8,.2,1)'
      },
      height: {
        md: '900px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
