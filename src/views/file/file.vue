<template>
  <div>
    <base-title1>File</base-title1>
    <file-list
      :load-status="status"
      :file-index="fileIndex"
      :files="files"
      :is-difference="isDifference"
      @select-file="selectFile"
    />
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';
import FileList from '@/components/organisms/FileList/FileList';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'File',
  components: {
    'base-title1': BaseTitle1,
    'file-list': FileList
  },
  computed: {
    ...mapGetters('edit', ['inputText']),
    ...mapGetters('file', ['files', 'fileIndex', 'preText', 'status']),
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
    async selectFile(index, isSave) {
      // 開くファイルが違う場合は、別ファイルを開く
      if (isSave) {
        const isSuccess = await this.readFile(index);
        if (isSuccess) {
          this.setText(this.preText);
        }
      }
      this.$router.push('/editor');
    }
  }
};
</script>
