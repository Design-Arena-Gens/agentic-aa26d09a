import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#06080f",
        dusk: "#111729",
        ember: "#ff7847",
        smoke: "#687598",
        rescue: "#5ef7d6"
      },
      fontFamily: {
        heading: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        body: ["'Open Sans'", "system-ui", "sans-serif"]
      },
      animation: {
        "slow-pulse": "slowPulse 6s ease-in-out infinite",
        "loop-cloud": "loopCloud 20s linear infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite"
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        loopCloud: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" }
        }
      }
    }
  },
  plugins: []
};

export default config;
