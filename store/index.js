import axios from 'axios'

export const actions = {
  async addData({ commit }) {
    let res = await axios.get('http://localhost:3001/tenders')
    let newData = res.data
    commit('updateData', newData)
  },
}

export const mutations = {
  updateData(state, newData) {
    state.data = newData
  },
}

export const state = () => ({
  data: null,
})

export const getters = {
  getData: (state) => {
    return state.data
  },
  singleTender: (state, getters) => {
    if (getters.getData != null) {
      return getters.getData.filter(
        (item) => item.id == localStorage.getItem('tenderNum')
      )
    } else {
      return console.log('Берем данные...')
    }
  },
}
