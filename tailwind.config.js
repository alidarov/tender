module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        headers: '#BABABA',
        grBack: '#014743',
        inp: '#D9D9D9',
        inpLabel: '#323C47'
      },
      fontFamily: {
        'rubik': ['sans-serif', 'Rubik']
      },
    },
  },
  plugins: [],
}
