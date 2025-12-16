import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // <--- CHANGED THIS LINE
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"], // Connects to layout.tsx
                serif: ["var(--font-lora)"], // Connects to layout.tsx
            },
        },
    },
    plugins: [],
};
export default config;
