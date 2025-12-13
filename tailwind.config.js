// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        // This tells Tailwind to look inside all .js and .jsx files in the src folder
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Define your custom color palette (Navy, Purple, Neon)
            
            colors: {
                'navy': '#0A192F', // Deep Navy Blue (Background)
                'purple': '#6C2D8A', // Deep Purple (Accent)
                'neon': '#00F0FF', // Electric Cyan/Neon (Highlight)
                'glass-bg': 'rgba(255, 255, 255, 0.05)', // For Glassmorphism
            }
        },
    },
    
    plugins: [],
}
