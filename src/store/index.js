import Vue from 'vue'
import Vuex from 'vuex'
import * as example from './example'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    example: { ...example, namespaced: true }
  }
})
