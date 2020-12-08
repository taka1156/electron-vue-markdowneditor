<template>
  <div>
    <base-btn @btn-click="isSlide = !isSlide">
      {{ !isSlide ? 'slide' : 'preview' }}
    </base-btn>
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
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import EditArea from '../../molecules/EditArea/EditArea';
import PreviewArea from '../../molecules/PreviewArea/PreviewArea';
import SlideUi from '../../molecules/SlideUi/SlideUi';
import { mapGetters, mapActions } from 'vuex';
import { slide } from '@/plugins/slide/index.js';
import { md } from '@/constants/index.js';

export default {
  name: 'EditorBox',
  components: {
    'base-btn': BaseBtn,
    'edit-area': EditArea,
    'preview-area': PreviewArea,
    'slide-ui': SlideUi
  },
  data() {
    return {
      markedValue: md,
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
    this.makeSilde();
  },
  destroyed() {
    // ページを抜けるときに、入力値をvuexに保存
    this.setText(this.markedValue);
  },
  methods: {
    ...mapActions('edit', ['setText']),
    updateText(text) {
      // テキスト更新(入力のたびに更新)
      this.markedValue = text === '' ? md : text;
      this.makeSilde();
    },
    makeSilde() {
      // スライドの生成
      this.slides = [...slide(this.markedValue)].map(v => v);
      if (this.slides.length === 1) {
        // スライドが１ページのみになった場合スライド強制解除
        this.isSlide = false;
      }
    }
  }
};
</script>

<style scoped>
::v-deep .base-btn--extend {
  width: 80px;
  margin: 5px;
  font-size: 15px;
  color: gray;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  outline-color: cornflowerblue;
}

::v-deep .base-btn--extend:hover,
::v-deep .base-btn--extend:focus,
::v-deep .base-btn--extend:active {
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
}

.editor-box {
  width: 90%;
  padding: 0;
  margin: 0 auto;
}

.editor-box__editor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}
</style>
