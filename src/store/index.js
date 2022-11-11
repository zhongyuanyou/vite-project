import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      mNavTarget: false,
    }
  },
  mutations: {
    openMNav(state) {
      state.mNavTarget = true
    },
    closeMNav(state) {
      state.mNavTarget = false
    },
  },
})

export default {
  store,
}
