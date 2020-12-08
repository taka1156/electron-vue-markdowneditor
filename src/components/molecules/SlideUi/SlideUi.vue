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
        <button class="slide-ui__btn" @click="prevPage()">&lt;</button>
        <button class="slide-ui__btn" @click="nextPage()">&gt;</button>
        <button class="slide-ui__btn" @click="expandSlide()">「」</button>
        {{ maxPage - (maxPage - page - 1) }}/{{ maxPage }}
        <input v-model="page" type="range" min="0" :max="maxPage - 1" step="1" />
      </div>
    </div>
  </div>
</template>

<script>
import PreviewArea from '../PreviewArea/PreviewArea';

export default {
  name: 'SlideUi',
  components: {
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
.slide-ui {
  padding: 0;
  border: 0.2px solid gray;
  background-color: white;
  box-sizing: border-box;
}

.slide-ui__btn {
  appearance: none;
  height: 100%;
  font-size: 10px;
  border-radius: 10px;
  background-color: cornflowerblue;
}

input[type='range'] {
  width: 65%;
}

input[type='range']::-webkit-slider-thumb {
  background-color: cornflowerblue;
}
</style>
