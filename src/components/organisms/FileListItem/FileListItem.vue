<template>
  <div>
    <div class="file-list-item">
      <base-btn @btn-click="listClick">
        <span>
          {{ file }}
          <span v-if="isEdit">:[編集中]</span>
        </span>
      </base-btn>
    </div>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';

export default {
  name: 'FileListItem',
  components: {
    'base-btn': BaseBtn
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
  },
  methods: {
    listClick() {
      this.$emit('file-select');
    }
  }
};
</script>

<style scoped>
::v-deep .base-btn--extend {
  width: 86vw;
  height: 10vh;
  padding: 15px;
  margin: 0;
  font-size: 20px;
  color: gray;
  text-align: left;
  background-color: white;
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

.file-list-item {
  display: flex;
  width: 95%;
  height: 50px;
  padding: 0;
  margin: 25px auto;
  border-radius: 5px;
}
</style>
