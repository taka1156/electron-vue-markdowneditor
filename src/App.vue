<template>
  <div id="app">
    <div class="app-box">
      <the-navigation class="nav" :routes="routes" />
      <div class="view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/organisms/TheNavigation/TheNavigation';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'the-navigation': TheNavigation
  },
  data() {
    return {
      routes: [
        {
          name: 'Help',
          to: '/',
          img: require('@/assets/help.svg')
        },
        {
          name: 'Editor',
          to: '/editor',
          img: require('@/assets/edit.svg')
        },
        {
          name: 'File',
          to: '/file',
          img: require('@/assets/file.svg')
        },
        {
          name: 'Setting',
          to: '/setting',
          img: require('@/assets/setting.svg')
        }
      ]
    };
  },
  computed: {
    ...mapGetters('setting', ['status'])
  },
  created() {
    this.restoreSetting();
    if (!this.status) {
      this.initSetting();
      alert('初期スタイルを生成したので開き直します。');
      location.reload();
    }
  },
  methods: {
    ...mapActions('setting', ['restoreSetting', 'initSetting'])
  }
};
</script>

<style>
#app {
  text-align: center;
}

.app-box {
  display: flex;
}

.nav {
  width: 10%;
  padding: 0;
  margin: 0;
}

.view {
  width: 95%;
  height: 610px;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
