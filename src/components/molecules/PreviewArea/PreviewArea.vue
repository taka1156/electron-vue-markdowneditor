<template>
  <div>
    <p class="preview-area__text">Preview</p>
    <div class="preview-area" :class="{ 'expand-slide': isExpand }">
      <div class="markdown-body" v-html="markedValue"></div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css';

export default {
  name: 'PreviewArea',
  props: {
    isExpand: {
      type: Boolean,
      default: false
    },
    markedValue: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style scoped>
.preview-area {
  border: 1px solid gray;
  height: 470px;
  width: 35vw;
  overflow-y: scroll;
  margin: 1px;
  background-color: white;
}

.preview-area__text {
  margin: 0;
  padding: 0;
}

.expand-slide {
  height: 90vh;
  width: 100vw;
}
</style>
