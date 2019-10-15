import Vue from "vue"
import Vuex from "vuex"
import drawingService from "./services/drawingService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    drawings: []
  },
  mutations: {
    setDrawings(state, drawings) {
      state.drawings = drawings
    },
    startLoading(state) {
      state.isLoading = true
    },
    stopLoading(state) {
      state.isLoading = false
    }
  },
  actions: {
    async initialize({ commit }) {

      commit("startLoading")

      var drawings = await drawingService.getDrawings()
      commit("setDrawings", drawings)

      commit("stopLoading")
    }
  }
})
