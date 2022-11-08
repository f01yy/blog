<template>
  <div class="posts__item">
    <h3>
      <span>{{ postIndex + 1 }}</span>
      . {{ post.title }}
    </h3>
    <p>{{ post.body }}</p>
    <button @click="handleClick(post.id)" class="posts__delete">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },

    postIndex: {
      type: Number,
      required: true,
    },
  },

  emits: {
    'delete-post': null,
  },

  methods: {
    handleClick(postId) {
      this.$emit('delete-post', postId);
    },
  },
};
</script>

<style scoped>
.posts__item {
  word-wrap: break-word;
  background-color: rgb(157, 209, 255);
  color: rgb(0, 34, 145);
  padding: 0 10px;
  border: 2px solid rgb(0, 5, 100);
  border-radius: 12px;
  position: relative;
}
.posts__item h3 {
  font-size: 24px;
}
.posts__delete {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(197, 0, 0);
  color: rgb(255, 255, 255);
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.posts__delete:hover {
  background-color: rgb(216, 37, 37);
}
</style>
