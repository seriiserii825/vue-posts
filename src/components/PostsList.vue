<template>
  <ul>
    <PostsListItem
        :key="index"
        v-for="(post, index) in posts"
        :post="post"
        :index="index"
        @changeLike="changeLike"
        @deletePost="deletePost"
    ></PostsListItem>
  </ul>
</template>
<script>
import PostsListItem from '@/components/PostsListItem'

export default {
  props: ['posts'],
  methods: {
    changeLike (id) {
      this.$emit('changeLike', id)
    },
    deletePost (id) {
      this.$emit('deletePost', id)
    }
  },
  components: {
    PostsListItem
  }
}
</script>

<style scoped>
ul {
  margin: 0 auto;
  max-width: 600px;
  list-style-type: none;
}
</style>
