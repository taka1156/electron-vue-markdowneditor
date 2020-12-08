<template>
  <div>
    <base-text>Preview</base-text>
    <div class="preview-area" :class="{ 'expand-slide': isExpand }">
      <div class="markdown-body" v-html="markedValue"></div>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';
import 'highlight.js/styles/github.css';
import { markedWrap } from '@/plugins/marked/index.js';

export default {
  name: 'PreviewArea',
  components: {
    'base-text': BaseText
  },
  props: {
    isExpand: {
      type: Boolean,
      default: false
    },
    rowText: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    markedValue() {
      return markedWrap(this.rowText);
    }
  }
};
</script>

<style scoped>
.preview-area {
  width: 35vw;
  height: 470px;
  margin: 1px;
  overflow-y: scroll;
  background-color: white;
  border: 1px solid gray;
}

.expand-slide {
  width: 100vw;
  height: 90vh;
}
</style>
