/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		'@tablet': '640px',
  		'@laptop': '1024px',
  		'@desktop': '1280px'
  	},
  	extend: {
  		fontFamily: {
  			inter: 'var(--font-inter)',
  			poppins: 'var(--font-poppins)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'blue-primary': '#1d4ffe',
  			'green-primary': '#4bce97',
  			'gray-border-card': '#131317',
  			'gray-area-favorite': '#05030a',
  			'gray-hover-btn-slide': '#07050F'
  		},
  		maxWidth: {
  			grid: '77.5rem',
  			'card-nft': '17.4rem',
  			'card-collectors': '37rem',
  			'logo-size-mb': '10rem',
  			'nav-header': '48.3rem',
  			'left-cont-footer': '20.25rem',
  			'content-desc-hero': '41.125rem'
  		},
  		width: {
  			'area-cards-mobile': '43.75rem'
  		},
  		height: {
  			'area-image-nft': '14.7rem',
  			'area-cards-mobile': '15.31rem',
  			'area-cards-desk': '26.625rem',
  			'area-banner': '29.5rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'hero-pattern': "url('../../public/bg-hero.svg')",
  			'banner': 'url("../../public/bg-banner.svg")',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
