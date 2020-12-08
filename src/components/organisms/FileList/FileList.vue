<template>
  <div>
    <ul>
      <li v-for="(file, index) in filesDummy" :key="`file_${index}`">
        <file-list-item :file="file" />
      </li>
    </ul>
  </div>
</template>

<script>
import FileListItem from '../FileListItem/FileListItem';

export default {
  name: 'FileList',
  components: {
    'file-list-item': FileListItem
  },
  /*props: {
    files: {
      type: Array,
      default: () => [],
      required: true
    }
  },*/
  data() {
    return {
      filesDummy: [
        { name: 'sample1.md' },
        { name: 'sample2.md' },
        { name: 'sample3.md' },
        { name: 'sample4.md' },
        { name: 'sample5.md' }
      ]
    };
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
</style>
