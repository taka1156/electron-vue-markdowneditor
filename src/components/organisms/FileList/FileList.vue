<template>
  <div>
    <div v-show="!loadStatus">
      <base-load-icon />
    </div>
    <div v-show="loadStatus">
      <p v-if="files.length === 0">
        ファイルなし
      </p>
      <ul v-else class="file-list">
        <li v-for="(file, index) in files" :key="`file_${index}`">
          <file-list-item
            :is-edit="index === fileIndex"
            :file="file"
            @file-select="selectFile(index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FileListItem from '../FileListItem/FileListItem';
import BaseLoadIcon from '../../atoms/BaseLoadIcon/BaseLoadIcon';
import {
  isNotSaveChangeFile,
  msgAlreadyOpenFile,
  msgCancel
} from '@/plugins/dialog/userControle.js';

export default {
  name: 'FileList',
  components: {
    'base-load-icon': BaseLoadIcon,
    'file-list-item': FileListItem
  },
  props: {
    loadStatus: {
      type: Boolean,
      default: false,
      required: true
    },
    fileIndex: {
      type: Number,
      default: 0,
      required: true
    },
    files: {
      type: Array,
      default: () => [],
      required: true
    },
    isDifference: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    isSave() {
      // 最後に開いた状態と現在のファイルに差分があれば、確認をおこなう
      if (this.isDifference) {
        const isOK = isNotSaveChangeFile();
        if (!isOK) {
          msgCancel();
        }
        return isOK;
      } else {
        return true;
      }
    },
    selectFile(index) {
      if (this.fileIndex !== index) {
        // 開くファイルが違う場合は、別ファイルを開く
        this.$emit('select-file', index, this.isSave());
      } else {
        msgAlreadyOpenFile();
      }
    }
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* css reset */

.file-list {
  width: 90vw;
  height: 90vh;
  padding: 0;
  margin: 0 auto;
  overflow-y: scroll;
}
</style>
