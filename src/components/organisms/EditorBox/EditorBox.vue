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
import { slide } from '@/plugins/slide/index.js';
import { PLACEHOLDER_MARKDOWN } from '@/constants/index.js';
import { isNewFileEdit, isOverWrite } from '@/plugins/dialog/userControle.js';

export default {
  name: 'EditorBox',
  components: {
    'base-btn': BaseBtn,
    'edit-area': EditArea,
    'preview-area': PreviewArea,
    'slide-ui': SlideUi
  },
  props: {
    setting: {
      type: Object,
      default: () => {},
      required: true
    },
    filePath: {
      type: String,
      default: '',
      required: true
    },
    inputText: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      markedValue: PLACEHOLDER_MARKDOWN,
      isSlide: false,
      slides: []
    };
  },
  computed: {
    mdStyleValue() {
      return this.setting.styles + this.markedValue;
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
      this.$emit('set-text', this.markedValue);
    }
  },
  methods: {
    newText() {
      if (isNewFileEdit()) {
        this.markedValue = PLACEHOLDER_MARKDOWN;
        this.makeSilde();
        this.$emit('new-text');
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
      this.$emit('save', this.markedValue);
    },
    overWrite() {
      if (isOverWrite()) {
        this.$emit('over-write', this.markedValue);
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
