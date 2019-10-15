import Vue from "vue"
import Router from "vue-router"
import drawingSearch from "@/views/drawingSearch"
import drawingDeatils from "@/views/drawingDetails"

Vue.use(Router)

export default new Router({
  routes: [{
      name: "search",
      path: "/search",
      component: drawingSearch
    }, {
      name: "details",
      path: "/details/:id",
      component: drawingDeatils,
      beforeEnter: (to, from, next) => {
        if(to.params.id === null){
          alert("no id was given")
        }
        else {
          next()
        }
      }
    },
    {
      path: "*",
      redirect: "search"
    }
  ]
})
