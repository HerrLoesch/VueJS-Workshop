import Vue from "vue"
import Vuex from "vuex"
import drawingService from "./services/drawingService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    drawings: []
  },
  getters: {
    getDrawingById: (state) => (id) => {
      var drawing = state.drawings.find(x => x.id = id)
      // deepcopy
      return JSON.parse(JSON.stringify(drawing))
    }
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
