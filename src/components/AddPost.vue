<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">Add new post</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.title !== '') {
        const newPost = {
          id: Date.now(),
          title: this.title,
          like: false
        }
        this.$emit('addNewPost', newPost)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.module";

form {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 100px;

  input {
    flex: 1;
    padding: 0 15px;
    height: 40px;
    color: $app-color;
    background-color: transparent;
    border: 1px solid $app-color;
    opacity: .4;

    &:focus {
      color: white;
      outline: none;
      opacity: 1;
    }
  }

  button {
    flex: 0 0 150px;
    height: 40px;
    color: $app-color;
    background-color: transparent;
    border: 1px solid $app-color;
    transition: all .4s;

    &:hover {
      color: $app-background-color;
      cursor: pointer;
      background-color: $app-color;
      outline: none;
    }

    &:active {
      background-color: darken($app-color, 20%);
      outline: none;
    }
  }
}
</style>
