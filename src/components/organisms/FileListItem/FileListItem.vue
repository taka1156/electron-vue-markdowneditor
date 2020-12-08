<template>
  <div>
    <div class="file-list-item">
      <base-text>{{ file.name }}</base-text>
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
    file: {
      type: Object,
      default: () => {},
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
