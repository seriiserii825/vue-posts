<template>
  <li
      :class="{liked: post.like === true}"
  >
    <strong>{{ index }}.</strong>
    <h2 @click="changeLike(post.id)">
      <span>{{ post.title }}</span>
      <svg class="liked" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40pt"
           height="40pt"
           viewBox="0 0 40 40" version="1.1">
        <g id="surface1">
          <path style=" stroke:none;fill-rule:nonzero;"
                d="M 34.179688 4.78125 C 32.554688 3.917969 30.695312 3.421875 28.714844 3.421875 C 25.226562 3.421875 22.089844 4.957031 20.019531 7.355469 C 17.933594 4.957031 14.808594 3.421875 11.308594 3.421875 C 9.332031 3.421875 7.464844 3.914062 5.84375 4.78125 C 2.359375 6.625 0 10.183594 0 14.292969 C 0 15.472656 0.199219 16.589844 0.558594 17.644531 C 2.492188 26.027344 14.882812 36.601562 20.019531 36.601562 C 25.015625 36.601562 37.523438 26.027344 39.464844 17.644531 C 39.824219 16.589844 40.023438 15.472656 40.023438 14.292969 C 40.027344 10.183594 37.664062 6.625 34.179688 4.78125 Z M 36.382812 16.691406 C 36.269531 17.003906 35.980469 17.199219 35.660156 17.199219 C 35.578125 17.199219 35.496094 17.199219 35.414062 17.171875 C 35.011719 17.035156 34.804688 16.605469 34.9375 16.199219 C 35.152344 15.5625 35.265625 14.921875 35.265625 14.292969 C 35.265625 12.015625 33.96875 9.917969 31.894531 8.828125 C 30.90625 8.292969 29.839844 8.023438 28.714844 8.023438 C 28.292969 8.023438 27.957031 7.695312 27.957031 7.265625 C 27.957031 6.847656 28.292969 6.507812 28.714844 6.507812 C 30.082031 6.507812 31.398438 6.835938 32.609375 7.476562 C 35.1875 8.84375 36.785156 11.449219 36.785156 14.292969 C 36.785156 15.097656 36.65625 15.902344 36.382812 16.691406 Z M 36.382812 16.691406 "/>
        </g>
      </svg>
    </h2>
    <span @click="deletePost(post.id)" class="close">&times;</span>
  </li>
</template>
<script>
export default {
  props: ['post', 'index'],
  methods: {
    changeLike (id) {
      this.$store.commit('changeLike', id)
    },
    deletePost (id) {
      this.$store.commit('deletePost', id)
    }
  }
}
</script>

<style scoped lang="scss">

@import "../assets/scss/variables.module";
li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
  border: 1px solid $app-color;
  border-radius: 5px;
  background-color: darken($app-background-color, 2%);
  transition: all .4s;
  &.liked {
    svg {
      opacity: 1;
    }
  }
  &:hover {
    color: lighten($app-color, 20%);
    background: darken($app-background-color, 5%);
    cursor: pointer;
  }
  &:active {
    background: darken($app-background-color, 10%);
  }
  strong {
    display: inline-block;
    margin-right: 10px;
    font-weight: bold;
    font-size: 16px;
  }
}
h2 {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
}
svg {
  display: inline-block;
  margin-left: auto;
  width: 30px;
  height: 30px;
  fill: red;
  opacity: 0;
  transition: all .3s;
}
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: $app-color;
  border: 1px solid $app-color;
  transition: all .3s;
  &:hover {
    color: white;
    background-color: red;
    border-color: white;
  }
}
</style>
