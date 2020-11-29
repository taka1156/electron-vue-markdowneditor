<template>
  <div>
    <base-title1>Editor</base-title1>
    <editor-box />
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';
import EditorBox from '@/components/organisms/EditorBox/EditorBox';

export default {
  name: 'Editor',
  components: {
    'base-title1': BaseTitle1,
    'editor-box': EditorBox
  }
};
</script>
