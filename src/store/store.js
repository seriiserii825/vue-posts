import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: 'New Year',
        like: false
      },
      {
        id: 2,
        title: 'Holiday',
        like: false
      },
      {
        id: 3,
        title: 'Birth day',
        like: false
      }
    ]
  }
})
