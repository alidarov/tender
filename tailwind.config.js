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
        inpLabel: '#323C47',
        mainBg: '#F6F6F6',
        navigation: '#EEEFF0',
        filters: '#F4F6F8',
        tenders: '#212529',
        total: '#999999',
        setRed: '#ff0000',
        statusTender: '#969696',
        statusSt: '#1E1E1E',
        countDown: '#DEDEDE',
        activeCol: '#3A9625',
        nonActiveCol: '#EF382A',
        blCol: '#1E1E1E',
        dividerCol: '#DDDDDD',
        infoSet: '#767676'
      },
      fontFamily: {
        rubik: ['sans-serif', 'Rubik'],
        arial: ['sans-serif', 'Arial'],
      },
      width: {
        half: '48%',
      },
    },
  },
  plugins: [],
}
