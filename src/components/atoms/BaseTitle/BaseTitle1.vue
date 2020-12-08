<template>
  <div>
    <h1 class="base-title1"><slot /></h1>
    <div class="border" />
  </div>
</template>

<script>
export default {
  name: 'BaseTitle1'
};
</script>

<style scoped>
h1 {
  display: block;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
  text-align: center;
}
</style>
