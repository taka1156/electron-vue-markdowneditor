<template>
  <div>
    <base-title1>File</base-title1>
    <file-list />
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';
import FileList from '@/components/organisms/FileList/FileList';

export default {
  name: 'File',
  components: {
    'base-title1': BaseTitle1,
    'file-list': FileList
  }
};
</script>
