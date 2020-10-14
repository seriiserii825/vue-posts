<template>
  <div id="app">
    <h1>Posts</h1>

    <PostsList
        :posts="posts"
        @changeLike="changeLike"
        @deletePost="deletePost"
    ></PostsList>

  </div>
</template>

<script>
import PostsList from '@/components/PostsList'

export default {
  name: 'App',
  data () {
    return {
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
  },
  methods: {
    changeLike (id) {
      this.posts.map(item => {
        if (item.id === id) {
          item.like = !item.like
        }
      })
    },
    deletePost (id) {
      this.posts = this.posts.filter(item => item.id !== id)
    }
  },
  components: {
    PostsList
  }
}
</script>

<style lang="scss">
@import "assets/scss/variables.module";

* {
  box-sizing: border-box;
}

body {
  color: $app-color;
  background-color: $app-background-color;
}

#app {
  font-size: 16px;
  text-align: center;
  margin-top: 60px;
}
</style>
