<template>
  <div class="App">
    <div class="container">
      <button @click="openPopup" class="popup__button">Добавить пост</button>

      <popup-window v-model:popupVisible="popupVisible">
        <post-form @add-post="addNewPost" />
      </popup-window>

      <posts-filter
        v-model:sort="selectedSort"
        v-model:query="searchQuery"
        :options="sortOptions"
      />

      <posts-list
        v-if="posts.length"
        :posts="filteredAndSearchedPosts"
        @delete-post="deletePost"
      />
      <div v-else class="no-posts-warn">Постов нет. Создайте первый!</div>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from './api.js';

import PopupWindow from './components/PopupWindow.vue';

import PostsList from './components/PostsList.vue';
import PostForm from './components/PostForm.vue';
import PostsFilter from './components/PostsFilter.vue';

export default {
  name: 'App',

  components: {
    PostsList,
    PostForm,
    PopupWindow,
    PostsFilter,
  },

  data() {
    return {
      posts: [],

      popupVisible: false,

      searchQuery: '',

      selectedSort: '',

      sortOptions: [
        { value: 'title', text: 'по заголовку' },
        { value: 'body', text: 'по описанию' },
      ],
    };
  },

  created() {
    fetchPosts().then((posts) => (this.posts = posts));
  },

  computed: {
    searchedPosts() {
      return this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    filteredAndSearchedPosts() {
      return [...this.searchedPosts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
  },

  methods: {
    openPopup() {
      this.popupVisible = true;
    },

    addNewPost({ title, body }) {
      this.posts.push({
        id: Date.now(),
        title,
        body,
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
.no-posts-warn {
  margin-top: 20px;
  font-size: 26px;
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
