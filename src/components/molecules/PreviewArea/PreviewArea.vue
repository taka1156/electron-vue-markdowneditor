<template>
  <div>
    <base-text>Preview</base-text>
    <div class="preview-area" :class="{ 'preview-area--expand': isExpand }">
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
  width: 45vw;
  height: 470px;
  margin: 1px;
  overflow-y: scroll;
  background-color: white;
  border: 1px solid gray;
}

.markdown-body {
  width: 95%;
  margin: 0 auto;
}

.preview-area--expand {
  width: 96vw;
  height: 90vh;
  margin: 0 auto;
}
</style>
