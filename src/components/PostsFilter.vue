<template>
  <section>
    <div class="search">
      <select
        :value="sort"
        @change="$emit('update:sort', $event.target.value)"
        class="search__select"
      >
        <option value="" disabled>Сортировка</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <input
        :value="query"
        @input="$emit('update:query', $event.target.value)"
        type="text"
        placeholder="Поиск..."
        class="search__input"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },

    sort: {
      type: String,
      required: true,
    },

    query: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.search {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
.search__select,
.search__input {
  border: 2px solid blueviolet;
  border-radius: 12px;
  color: blueviolet;
  outline: none;
}
.search__input {
  width: 300px;
  padding: 10px;
}
.search__input::placeholder {
  color: blueviolet;
}
</style>
