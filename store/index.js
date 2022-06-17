import axios from 'axios'

export const actions = {
  async addData({ commit }) {
    let res = await axios.get('http://localhost:3001/tenders')
    let newData = res.data
    commit('updateData', newData)
  },
  async userData({ commit }) {
    let res = await axios.get('http://localhost:3001/users')
    let newUsers = res.data
    commit('updateUsers', newUsers)
  },
}

export const mutations = {
  updateData(state, newData) {
    state.data = newData
  },
  updateUsers(state, newUsers) {
    state.users = newUsers
  },
}

export const state = () => ({
  data: null,
  users: null,
})

export const getters = {
  getData: (state) => {
    return state.data
  },
  receivingTenders: (state, getters) => {
    if (getters.getData != null) {
      return getters.getData.filter((item) => item.status == 'Прием заявок')
    } else {
      return console.log('Расчитываем отмененные лоты...')
    }
  },
  workingTenders: (state, getters) => {
    if (getters.getData != null) {
      return getters.getData.filter((item) => item.status == 'В работе')
    } else {
      return console.log('Расчитываем отмененные лоты...')
    }
  },
  canceledTenders: (state, getters) => {
    if (getters.getData != null) {
      return getters.getData.filter((item) => item.status == 'Отменен')
    } else {
      return console.log('Расчитываем отмененные лоты...')
    }
  },
  getUsers: (state) => {
    return state.users
  },
  usersTable: (state, getters) => {
    if (getters.getUsers != null) {
      return getters.getUsers.filter((item) => item.type == 'Пользователь')
    } else {
      return console.log('Расчитываем отмененные лоты...')
    }
  },
  adminsTable: (state, getters) => {
    if (getters.getUsers != null) {
      return getters.getUsers.filter((item) => item.type == 'Админ')
    } else {
      return console.log('Расчитываем отмененные лоты...')
    }
  },
  currentUser: (state, getters) => {
    if (getters.getUsers != null) {
      return getters.getUsers.filter((item) => item.login == localStorage.getItem('currentUser'))
    } else {
      return console.log('Ищем текущего пользователя...')
    }
  },
}
