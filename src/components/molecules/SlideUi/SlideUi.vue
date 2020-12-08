<template>
  <div>
    <div
      id="expand-slide"
      @keydown.exact.esc="isExpandSlide = false"
      @keydown.shift.78="nextPage()"
      @keydown.shift.80="prevPage()"
    >
      <preview-area :is-expand="isExpandSlide" :row-text="slide" />
      <div class="slide-ui">
        <base-btn @btn-click="prevPage()">&lt;</base-btn>
        <base-btn @btn-click="nextPage()">&gt;</base-btn>
        <base-btn @btn-click="expandSlide()">「」</base-btn>
        {{ maxPage - (maxPage - page - 1) }}/{{ maxPage }}
        <input v-model="page" type="range" min="0" :max="maxPage - 1" step="1" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import PreviewArea from '../PreviewArea/PreviewArea';

export default {
  name: 'SlideUi',
  components: {
    'base-btn': BaseBtn,
    'preview-area': PreviewArea
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return { page: 0, isExpandSlide: false };
  },
  computed: {
    maxPage() {
      if (this.slides.length === 0) return 0;
      return this.slides.length;
    },
    slide() {
      if (this.slides.length === 0) return '';
      return this.slides[this.page];
    }
  },
  methods: {
    // ページネーション
    prevPage() {
      if (this.slides.length === 0) return 0;
      this.page = Math.max(this.page - 1, 0);
    },
    nextPage() {
      if (this.slides.length === 0) return 0;
      this.page = Math.min(this.page + 1, this.maxPage - 1);
    },
    // スライドのフルスクリーン化
    expandSlide() {
      this.isExpandSlide = !this.isExpandSlide;
      if (this.isExpandSlide) {
        document.getElementById('expand-slide').webkitRequestFullScreen();
      } else {
        document.webkitExitFullscreen();
      }
    }
  }
};
</script>

<style scoped>
.slide-ui ::v-deep .base-btn--extend {
  width: 20px;
  height: 80%;
  margin: 0;
  font-size: 10px;
  color: gray;
}

.slide-ui ::v-deep .base-btn--extend:hover,
.slide-ui ::v-deep .base-btn--extend:focus,
.slide-ui ::v-deep .base-btn--extend:active {
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
}

.slide-ui {
  display: flex;
  justify-content: space-around;
  padding: 0;
  background-color: white;
  border: 0.2px solid gray;
}

input[type='range'] {
  width: 65%;
}

input[type='range']::-webkit-slider-thumb {
  background-color: cornflowerblue;
}
</style>
