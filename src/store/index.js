import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userList: [
        {
          name: '张三',
          id: 1,
          age: 18,
          sex: 0, //0男1女
        },
      ],
    }
  },
  mutations: {
    setName(state, from) {
      if (!from.isModify) {
        state.userList.push(from.user)
      } else {
        state.userList.splice(from.index, 1, from.user)
      }
    },
    delUser(state, idx) {
      let userList = state.userList
      userList.splice(idx, 1)
      state.userList = userList
    },
  },
  actions: {
    SET_NAME(context, {}) {},
  },
})

export default {
  store,
}
