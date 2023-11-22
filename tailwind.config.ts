import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            "dark-gray": "#656566",
            "gradient-yellow": "#FCB045",
            "gradient-red": "#FF3F78",
         },

         backgroundImage: {
            "hero-noise": "url('/bg-image.png')",
         },
      },
   },
   plugins: [],
};
export default config;
