<template>
  <div>
    <div class="base-load-icon">
      <div class="base-load-icon__spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLoadIcon'
};
</script>

<style scoped>
.base-load-icon {
  margin: 35vh auto;
}

/* 待機時のスピナー表示 */
.base-load-icon__spinner {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: cornflowerblue;
  border-radius: 100%;
  animation: spinner-anime 2s infinite;
}

@keyframes spinner-anime {
  from {
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
