<template>
  <div id="app">
    <div class="app-wrapper">
      <h1>Posts</h1>

      <AddPost/>

      <PostsList
          :posts="posts"
      />
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList'
import AddPost from '@/components/AddPost'

export default {
  name: 'App',
  methods: {
    deletePost (id) {
      this.posts = this.posts.filter(item => item.id !== id)
    }
  },
  components: {
    PostsList,
    AddPost
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
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
.app-wrapper {
  margin: 0 auto;
  max-width: 600px;
}
ul {
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
}
</style>
