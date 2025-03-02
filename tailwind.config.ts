import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blue: {
					50: '#f0f6fe',
					100: '#e1edfb',
					200: '#c2dcf7',
					300: '#94c2f0',
					400: '#5fa0e8',
					500: '#3b80dd',
					600: '#2c72c9',
					700: '#2354a0',
					800: '#234784',
					900: '#213d6d',
				},
				teal: {
					50: '#eefcfd',
					100: '#d5f6f8',
					200: '#aeecf1',
					300: '#75dce5',
					400: '#3bc3d2',
					500: '#1ca6b2',
					600: '#198595',
					700: '#1a6b7a',
					800: '#1c5662',
					900: '#1a4853',
				},
				brown: {
					50: '#f9f5f0',
					100: '#f0e9e0',
					200: '#e1d0c0',
					300: '#d1b7a0',
					400: '#c09c7c',
					500: '#b07c4d',
					600: '#a26a3d',
					700: '#855632',
					800: '#6d472d',
					900: '#583c28',
				},
				orange: {
					50: '#fff8eb',
					100: '#ffebc4',
					200: '#ffd890',
					300: '#ffc266',
					400: '#ffaa31',
					500: '#fd9e12',
					600: '#e68309',
					700: '#bd6907',
					800: '#99520d',
					900: '#7c440f',
				},
				rose: {
					50: '#fff1f2',
					100: '#ffe4e6',
					200: '#fecdd3',
					300: '#fda4af',
					400: '#fb7185',
					500: '#f43f5e',
					600: '#e11d48',
					700: '#be123c',
					800: '#9f1239',
					900: '#881337',
				},
				gold: {
					50: '#fdf8e7',
					100: '#f9f0cf',
					200: '#f4e1a0',
					300: '#eecb66',
					400: '#e9b83c',
					500: '#dfa324',
					600: '#c4871c',
					700: '#a26819',
					800: '#85531b',
					900: '#70451b',
				},
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'image-glow': {
					'0%': { 
						'background-size': '100% 100%', 
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'30%': { 'background-size': '150% 150%' },
					'50%': { 'background-size': '100% 100%' },
					'70%': { 'background-size': '150% 150%' },
					'100%': { 
						'background-size': '100% 100%', 
						opacity: '0'
					},
				},
				'soft-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-10px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'image-glow': 'image-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'soft-bounce': 'soft-bounce 2s ease-in-out infinite',
				'scale-in': 'scale-in 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
				'slide-in': 'slide-in 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
