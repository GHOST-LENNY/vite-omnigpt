/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        meridian: ["FS Meridian Trial", "sans-serif"],
        generalSans: ['General Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [],
};
