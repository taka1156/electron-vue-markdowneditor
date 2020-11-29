<template>
  <div>
    <button @click="isSlide = !isSlide">
      {{ !isSlide ? 'slide' : 'preview' }}
    </button>
    <div class="editor-box">
      <div class="editor-box__editor">
        <edit-area @update-text="updateMdText" />
        <div v-if="!isSlide">
          <preview-area :marked-value="markedValue" />
        </div>
        <div v-else>
          <slide-ui :slides="slides" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditArea from '../../molecules/EditArea/EditArea';
import PreviewArea from '../../molecules/PreviewArea/PreviewArea';
import SlideUi from '../../molecules/SlideUi/SlideUi';
import { markedWrap } from '@/plugins/marked/index.js';
import { slide } from '@/plugins/slide/index.js';

export default {
  name: 'EditorBox',
  components: {
    'edit-area': EditArea,
    'preview-area': PreviewArea,
    'slide-ui': SlideUi
  },
  data() {
    return {
      markedValue: '',
      isSlide: false,
      slides: []
    };
  },
  methods: {
    updateMdText(text) {
      if (text === '') return;
      this.markedValue = markedWrap(text);
      this.makeSilde(text);
    },
    // スライドの生成
    makeSilde(text) {
      this.slides = [...slide(text)].map(v => markedWrap(v));
    }
  }
};
</script>

<style scoped>
.editor-box {
  width: 90%;
  margin: 0 auto;
  padding: 0;
}

.editor-box__editor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
</style>
