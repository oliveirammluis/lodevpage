module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Certifique-se de que o conteúdo está sendo monitorado
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 2s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
