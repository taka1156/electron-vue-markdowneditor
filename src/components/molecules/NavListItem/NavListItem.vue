<template>
  <div>
    <div class="nav-item">
      <router-link :to="navItem.to" class="nav-item__link">
        <base-img
          :img-url="navItem.img"
          :img-alt="`${navItem.name}のナビアイコン`"
        />
        <p class="nav-item__text">{{ navItem.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'NavListItem',
  components: {
    'base-img': BaseImg
  },
  props: {
    navItem: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-img {
  width: 100%;
  height: 100%;
}

.nav-item {
  display: block;
  width: 80%;
  height: 60px;
  margin: 10px auto;
}

.nav-item__link {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.nav-item__text {
  margin: 10px auto;
  color: white;
}
</style>
