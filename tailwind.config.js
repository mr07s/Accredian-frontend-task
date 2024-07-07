/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        skyblue: "#EEF5FF",
        lightsky: "#E6F0FC",
        bottoncolor: "#1A73E8",
        loginbotton: " #94A3B833",
      },
      boxShadow: {
        // xl: " 0px 4px 65px 1px #00072B36",
      },
    },
  },
  plugins: [],
};
