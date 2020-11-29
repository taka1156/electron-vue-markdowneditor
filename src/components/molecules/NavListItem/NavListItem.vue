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
  height: 100%;
  width: 100%;
}

.nav-item {
  display: block;
  margin: 10px auto;
  height: 60px;
  width: 80%;
}

.nav-item__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

.nav-item__text {
  margin: 10px auto;
  color: white;
}
</style>
