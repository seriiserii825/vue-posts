<template>
  <ul>
    <PostsListItem
        :key="index"
        v-for="(post, index) in posts"
        :post="post"
        :index="index"
    />
  </ul>
</template>
<script>
import PostsListItem from '@/components/PostsListItem'

export default {
  props: ['posts'],
  components: {
    PostsListItem
  }
}
</script>
