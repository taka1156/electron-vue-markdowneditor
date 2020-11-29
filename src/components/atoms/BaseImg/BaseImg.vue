<template>
  <img :src="imgUrl" :alt="imgAlt" class="base-img" />
</template>

<script>
export default {
  name: 'BaseImg',
  props: {
    imgUrl: {
      type: String,
      default: '',
      required: true
    },
    imgAlt: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  margin: 0;
  padding: 0;
}
</style>
