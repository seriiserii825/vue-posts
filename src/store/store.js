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
  },
  mutations: {
    changeLike (state, id) {
      state.posts.map(item => {
        if (item.id === id) {
          item.like = !item.like
        }
      })
    },
    deletePost (state, id) {
      state.posts = state.posts.filter(item => {
        return item.id !== id
      })
    }
  }
})
