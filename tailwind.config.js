/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'bordered': '0 0px 4px 4px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
