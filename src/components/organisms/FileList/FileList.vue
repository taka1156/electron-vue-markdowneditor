<template>
  <div>
    <p v-if="files.length === 0">
      ファイルなし
    </p>
    <ul v-else class="file-list">
      <li v-for="(file, index) in files" :key="`file_${index}`">
        <div @click="selectFile(index)">
          <file-list-item :is-edit="index === fileIndex" :file="file" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import FileListItem from '../FileListItem/FileListItem';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FileList',
  components: {
    'file-list-item': FileListItem
  },
  computed: {
    ...mapGetters('edit', ['inputText']),
    ...mapGetters('file', [
      'folderPath',
      'filePath',
      'files',
      'fileIndex',
      'preText'
    ]),
    isDifference() {
      return this.inputText !== this.preText;
    }
  },
  async created() {
    await this.initFolder();
    await this.readFiles();
  },
  methods: {
    ...mapActions('file', ['initFolder', 'readFiles', 'readFile']),
    ...mapActions('edit', ['setText']),
    isSave() {
      // 最後に開いた状態と現在のファイルに差分があれば、確認をおこなう
      if (this.isDifference) {
        const isOk = confirm('現在のファイルを保存していませんが、よろしいですか?');
        return isOk;
      } else {
        return true;
      }
    },
    async selectFile(index) {
      if (this.fileIndex !== index) {
        // 開くファイルが違う場合は、別ファイルを開く
        if (this.isSave()) {
          const isSuccess = await this.readFile(index);
          if (isSuccess) {
            this.setText(this.preText);
          }
        }
      } else {
        alert('すでに開いています。');
      }
      this.$router.push('/editor');
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
  margin: 0 auto;
  overflow-y: scroll;
}
</style>
