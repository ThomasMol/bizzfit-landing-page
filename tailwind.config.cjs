const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				coolvetica: ['Coolvetica', 'Helvetica', 'sans-serif']
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' }
				}
			},
      animation: {
        wiggle: 'wiggle 0.85s ease-in-out infinite',
      }
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem',
				'2xl': '4rem'
			},

			screens: {
				sm: '600px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1280px'
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
