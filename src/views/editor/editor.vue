<template>
  <div>
    <base-title1>Editor</base-title1>
    <editor-box
      :file-path="filePath"
      :input-text="inputText"
      :setting="userSetting"
      @set-text="setText"
      @new-text="newText"
      @save="save"
      @over-write="overWrite"
    />
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';
import EditorBox from '@/components/organisms/EditorBox/EditorBox';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Editor',
  components: {
    'base-title1': BaseTitle1,
    'editor-box': EditorBox
  },
  computed: {
    ...mapGetters('edit', ['inputText']),
    ...mapGetters('file', ['filePath']),
    ...mapGetters('setting', ['userSetting'])
  },
  methods: {
    ...mapActions('file', ['initFileInfo', 'saveFile', 'overwriteFile']),
    ...mapActions('edit', ['initText', 'setText']),
    newText() {
      this.initFileInfo();
      this.initText();
    },
    save(text) {
      this.saveFile(text);
    },
    overWrite(text) {
      this.overwriteFile(text);
    }
  }
};
</script>
