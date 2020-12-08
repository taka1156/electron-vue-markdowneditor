<template>
  <div>
    <div class="file-list-item">
      <base-text>{{ file }}</base-text>
      <p v-if="isEdit">:[編集中]</p>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'FileListItem',
  components: {
    'base-text': BaseText
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
      required: true
    },
    file: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  margin: 0 auto;
  font-size: 20px;
}

.file-list-item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px;
  margin: 10px;
  background-color: white;
  border: 1px solid cornflowerblue;
  border-radius: 5px;
}
</style>
