const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
     
    },
    container:{
			screens: {
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
		},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ]
};

module.exports = config;