import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "primary": "#4987ff",
            "primary-dark": "#325AA7",
            "primary-light": "#E1EBFF",
            "red": "#FF6C6C",
            "title": "#121212",
            "subtitle": "#333333",
            "description": "#767676",
            "footer": "#F0F0F0",
            "white": "#FFFFFF",
            "background": "#F8F8F8",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
