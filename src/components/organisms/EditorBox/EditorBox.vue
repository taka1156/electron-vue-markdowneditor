<template>
  <div>
    <div class="editor-box">
      <div class="editor-box__btns">
        <base-btn @btn-click="isSlide = !isSlide">
          {{ !isSlide ? 'SlideView' : 'PreView' }}
        </base-btn>
        <base-btn @btn-click="newText">
          New
        </base-btn>
        <base-btn v-show="filePath !== ''" @btn-click="overWrite">
          OverWrite
        </base-btn>
        <base-btn @btn-click="save">
          Save
        </base-btn>
      </div>
      <div class="editor-box__editor">
        <edit-area :pre-text="inputText" @update-text="updateText" />
        <div v-if="!isSlide">
          <preview-area :row-text="mdStyleValue" />
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
import { PLACEHOLDER_MARKDOWN } from '@/constants/index.js';

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
      markedValue: PLACEHOLDER_MARKDOWN,
      isSlide: false,
      slides: []
    };
  },
  computed: {
    ...mapGetters('edit', ['inputText']),
    ...mapGetters('file', ['filePath']),
    ...mapGetters('setting', ['userSetting']),
    mdStyleValue() {
      return this.userSetting.styles + this.markedValue;
    }
  },
  created() {
    if (this.inputText !== '') {
      // 他ページから戻ってきたときに、前回の入力データを初期値にする。
      this.markedValue = this.inputText;
    }
    this.makeSilde();
  },
  destroyed() {
    // 初期テキストでなければページを抜けるときに、入力値をvuexに保存
    if (this.markedValue !== PLACEHOLDER_MARKDOWN) {
      this.setText(this.markedValue);
    }
  },
  methods: {
    ...mapActions('file', ['initFileInfo', 'saveFile', 'overwriteFile']),
    ...mapActions('edit', ['initText', 'setText']),
    newText() {
      if (confirm('現在の入力内容を破棄してよろしいですか?')) {
        this.markedValue = PLACEHOLDER_MARKDOWN;
        this.makeSilde();
        this.initFileInfo();
        this.initText();
      }
    },
    updateText(text) {
      // テキスト更新(入力のたびに更新)
      this.markedValue = text === '' ? PLACEHOLDER_MARKDOWN : text;
      this.makeSilde();
    },
    makeSilde() {
      // スライドの生成
      this.slides = [...slide(this.markedValue)].map(v => v);
      if (this.slides.length === 1) {
        // スライドが１ページのみになった場合スライド強制解除
        this.isSlide = false;
      }
    },
    save() {
      this.saveFile(this.markedValue);
    },
    overWrite() {
      if (confirm('上書きしてもよろしいですか?')) {
        this.overwriteFile(this.markedValue);
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

.editor-box__btns {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 0;
}

.editor-box__editor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}
</style>
