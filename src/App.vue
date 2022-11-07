<template>
  <div class="App">
    <div class="container">
      <button @click="openPopup" class="popup__button">Add new post</button>

      <popup-window v-model:popupVisible="popupVisible">
        <post-form @add-post="addNewPost" />
      </popup-window>

      <posts-list :posts="posts" @delete-post="deletePost" />
    </div>
  </div>
</template>

<script>
import PostsList from './components/PostsList.vue';
import PostForm from './components/PostForm.vue';

import PopupWindow from './components/PopupWindow.vue';

export default {
  name: 'App',

  components: {
    PostsList,
    PostForm,
    PopupWindow,
  },

  data() {
    return {
      posts: [
        { id: 1, title: 'Title 1', content: 'Content 1' },
        { id: 2, title: 'Title 2', content: 'Content 2' },
      ],

      popupVisible: false,
    };
  },

  methods: {
    openPopup() {
      this.popupVisible = true;
    },

    addNewPost(post) {
      this.posts.push({
        id: Date.now(),
        title: post.title,
        content: post.content,
      });

      this.popupVisible = false;
    },

    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
    },
  },
};
</script>

<style>
.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
.App {
  padding: 10px;
}
.popup__button {
  background: blueviolet;
  color: aliceblue;
  border: none;
  outline: none;
  border-radius: 12px;
  cursor: pointer;
  width: fit-content;
  padding: 10px;
  transition: all 0.2s;
  border: 2px solid blueviolet;
}
.popup__button:hover {
  background-color: rgb(87, 18, 150);
}
</style>
