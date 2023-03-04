/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            screens: {
                '2xl': '1320px',
            },
            colors: {
                ijo: '#14b8a6',
                abu: '#64748b',

            }
        },
    },
    plugins: [],
}