<template>
  <div>
    <ul class="nav-list">
      <li v-for="(item, index) in routes" :key="`nav_${index}`">
        <nav-list-item :nav-item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import NavListItem from '../NavListItem/NavListItem';

export default {
  name: 'NavList',
  components: {
    'nav-list-item': NavListItem
  },
  props: {
    routes: {
      type: Array,
      default: () => [],
      required: true
    }
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

.nav-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 610px;
  background-color: cornflowerblue;
}
</style>
