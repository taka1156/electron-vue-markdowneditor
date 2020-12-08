<template>
  <div>
    <base-text-area :pre-text="preText" :form="form" @send-text="updateText" />
  </div>
</template>

<script>
import BaseTextArea from '../../atoms/BaseTextArea/BaseTextArea';
import { PLACEHOLDER_MARKDOWN } from '@/constants/index.js';

export default {
  name: 'EditArea',
  components: {
    'base-text-area': BaseTextArea
  },
  props: {
    preText: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      form: {
        id: 'editor',
        label: 'Editor',
        placeholder: PLACEHOLDER_MARKDOWN
      }
    };
  },
  methods: {
    updateText(value) {
      this.$emit('update-text', value);
    }
  }
};
</script>

<style scoped>
::v-deep .base-text-area {
  width: 40vw;
  height: 470px;
  margin: 1px;
  border: 1px solid gray;
}
</style>
