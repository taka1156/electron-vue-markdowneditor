<template>
  <div>
    <base-text-area :pre-text="preText" :form="form" @send-text="updateText" />
  </div>
</template>

<script>
import BaseTextArea from '../../atoms/TextArea/BaseTextArea';
import { md } from '@/constants/index.js';

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
        placeholder: md
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
  border: 1px solid gray;
  height: 470px;
  width: 35vw;
  margin: 1px;
}
</style>
