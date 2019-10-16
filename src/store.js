import Vue from 'vue'
import Vuex from 'vuex'
import drawingService from "@/services/drawingService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawings: [],
    isLoading: false
  },
  getters: {
    getDrawingById: (state) => (id) => {
      var drawing = state.drawings.find(x => x.id === id)
      return JSON.parse(JSON.stringify(drawing))
    }
  },
  mutations: {
    setDrawings(state, drawings) {
      state.drawings = drawings
    },
    setIsLoading(state, value){
      state.isLoading = value
    }
  },
  actions: {
    async initialize({ commit }){

      commit("setIsLoading", true)
      const drawings = await drawingService.getDrawings()

      commit("setDrawings", drawings)
      commit("setIsLoading", false)
    }
  }
})
