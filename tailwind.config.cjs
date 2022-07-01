const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    container:{
			screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1200px',
      },
		},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ]
};

module.exports = config;