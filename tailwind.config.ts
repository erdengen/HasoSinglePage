import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          50:  '#f9f9f9',
          100: '#A1A1A1',
          200:  '#cccccc',
          300:  '#b6b6b6',
          400:  '#d9d9d9',
          500:  '#7d7d7d',
          600:  '#686465',
          700:  '#4d4948',
          800:  '#323232',
          900:  '#1c1c1c'
        },
        hasoBlue: {
          50: "#D6E6FF",
          100: "#B3D0FF",
          200: "#619EFF",
          300: "#154EAA",
          400: "#004CC7",
          500: "#002E78",
          600: "#002561",
          700: "#001B47",
          800: "#00122E",
          900: "#000A19",
          950: "#00040A"
        }
      },
        fontFamily: {
        sans: ['Poppins', 'serif']
      }
    },
  },
  plugins: [],
}
export default config
