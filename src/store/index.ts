import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import user from './modules/user'
import system from './modules/system'

const store = new Vuex.Store({
    state: {
      btnStatus: false,
      requestStatus: false
    },
    modules: {
        user,
        system
    },
    // 可以认为是store中的计算属性，可以通过store.getters去调用
    getters,
    plugins: [createPersistedState({
      storage: window.localStorage
    })]
  })
  
  export default store