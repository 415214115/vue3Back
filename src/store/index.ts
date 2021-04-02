import { createStore } from 'vuex'
import users from './module/users/users' // users
import nav from './module/routers/nav' // users

export default createStore({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    users,
    nav
  }
})
