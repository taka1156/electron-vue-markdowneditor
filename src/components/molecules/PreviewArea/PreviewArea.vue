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
import { md } from '@/constants/index.js';

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
      return markedWrap(this.rowText === '' ? md : this.rowText);
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

.expand-slide {
  height: 90vh;
  width: 100vw;
}
</style>
