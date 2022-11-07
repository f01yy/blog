<template>
  <div v-if="popupVisible" class="popup" @click="hidePopup">
    <div class="popup__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popupVisible: {
      type: Boolean,
      required: true,
    },
  },

  emits: {
    'update:popupVisible': null,
  },

  methods: {
    hidePopup() {
      this.$emit('update:popupVisible', false);
    },
  },
};
</script>

<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.popup__content {
  padding: 20px;
  width: 100%;
  max-width: 800px;
  background-color: aliceblue;
  border-radius: 12px;
}
</style>
