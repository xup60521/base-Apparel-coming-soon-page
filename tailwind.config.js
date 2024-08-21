/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Desaturated_Red: "hsl(0, 36%, 70%)",
                c_Soft_Red: "hsl(0, 93%, 68%)",
                c_Dark_Grayish_Red: "hsl(0, 6%, 24%)",
            },
            fontFamily: {
                josefin: ["Josefin Sans", "sans-serif"]
            }
        },
    },
    plugins: [],
}

