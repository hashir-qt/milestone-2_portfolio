import type { Config } from "tailwindcss";

const config: Config = {
  // Enable dark mode via the "dark" class on the HTML or body element
  darkMode: "class",

  // Specify the files Tailwind should scan for CSS class usage
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  // Extend the theme with custom styles
  theme: {
    extend: {
      // Custom colors for light and dark themes using HSL values
      colors: {
        // Base colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // Component colors
        card: 'hsl(var(--card))',
        cardForeground: 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        popoverForeground: 'hsl(var(--popover-foreground))',

        // Primary and secondary colors
        primary: 'hsl(var(--primary))',
        primaryForeground: 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        secondaryForeground: 'hsl(var(--secondary-foreground))',

        // Accent colors for special highlights
        accent: 'hsl(var(--accent))',
        accentForeground: 'hsl(var(--accent-foreground))',
        muted: 'hsl(var(--muted))',
        mutedForeground: 'hsl(var(--muted-foreground))',

        // Colors for charts
        chart1: 'hsl(var(--chart-1))',
        chart2: 'hsl(var(--chart-2))',
        chart3: 'hsl(var(--chart-3))',
        chart4: 'hsl(var(--chart-4))',
        chart5: 'hsl(var(--chart-5))',

        // Destructive action colors (e.g., for delete buttons)
        destructive: 'hsl(var(--destructive))',
        destructiveForeground: 'hsl(var(--destructive-foreground))'
      },

      // Border radius values, customizable with CSS variables
      borderRadius: {
        large: 'var(--radius)',                 // Large border radius
        medium: 'calc(var(--radius) - 2px)',    // Medium border radius
        small: 'calc(var(--radius) - 4px)'      // Small border radius
      }
    }
  },

  // Load plugins, such as the Tailwind CSS animation utilities
  plugins: [
    require("tailwindcss-animate")              // Adds animation classes for transitions
  ]
};

// Export the config object for Tailwind to use
export default config;
