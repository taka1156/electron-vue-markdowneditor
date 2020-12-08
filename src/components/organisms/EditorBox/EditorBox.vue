<template>
  <div>
    <button @click="isSlide = !isSlide">
      {{ !isSlide ? 'slide' : 'preview' }}
    </button>
    <div class="editor-box">
      <div class="editor-box__editor">
        <edit-area :pre-text="inputText" @update-text="updateText" />
        <div v-if="!isSlide">
          <preview-area :row-text="markedValue" />
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
import { mapGetters, mapActions } from 'vuex';
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
  computed: {
    ...mapGetters('edit', ['inputText'])
  },
  created() {
    if (this.inputText !== '') {
      // 他ページから戻ってきたときに、前回の入力データを初期値にする。
      this.markedValue = this.inputText;
    }
  },
  destroyed() {
    // ページを抜けるときに、入力値をvuexに保存
    this.setText(this.markedValue);
  },
  methods: {
    ...mapActions('edit', ['setText']),
    updateText(text) {
      // テキスト更新(入力のたびに更新)
      this.markedValue = text;
    },
    makeSilde(text) {
      // スライドの生成
      this.slides = [...slide(text)].map(v => v);
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
