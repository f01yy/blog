<template>
  <section>
    <form @submit.prevent class="post-form">
      <input
        v-model="postTitle"
        class="post-form__title"
        type="text"
        placeholder="Title"
      />
      <textarea
        v-model="postContent"
        class="post-form__content"
        type="text"
        placeholder="Content"
      />
      <button @click="handleClick" class="post-form__button">
        Add new post
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      postTitle: '',
      postContent: '',
    };
  },

  emits: {
    'add-post': null,
  },

  methods: {
    handleClick() {
      this.$emit('add-post', {
        title: this.postTitle,
        content: this.postContent,
      });
    },
  },
};
</script>

<style scoped>
.post-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  gap: 10px;
}
.post-form__content,
.post-form__title {
  padding: 10px;
}
.post-form__button {
  background: aliceblue;
  color: blueviolet;
  border: 2px solid blueviolet;
  outline: none;
  border-radius: 12px;
  cursor: pointer;
  width: fit-content;
  padding: 10px;
  transition: all 0.2s;
}
.post-form__button:hover {
  color: aliceblue;
  background: blueviolet;
}
</style>
