<template>
  <section class="posts">
    <post-item
      @delete-post="handleDeletePost"
      v-for="(post, idx) in posts"
      :key="post.id"
      :post="post"
      :postIndex="idx"
    />
  </section>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: { PostItem },

  props: {
    posts: { type: Array, required: true },
  },

  emits: {
    'delete-post': null,
  },

  methods: {
    handleDeletePost(postId) {
      this.$emit('delete-post', postId);
    },
  },
};
</script>

<style scoped>
.posts {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
