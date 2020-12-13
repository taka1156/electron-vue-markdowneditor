<template>
  <div>
    <base-title1>Setting</base-title1>
    <setting-form :user-setting="userSetting" @init="init" @save="save" />
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';
import SettingForm from '@/components/organisms/SettingForm/SettingForm';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Setting',
  components: {
    'base-title1': BaseTitle1,
    'setting-form': SettingForm
  },
  computed: {
    ...mapGetters('setting', ['userSetting'])
  },
  methods: {
    ...mapActions('setting', ['updateSetting', 'saveSetting', 'initSetting']),
    setSetting(styles) {
      this.setting.styles = styles;
    },
    init() {
      this.initSetting();
      this.update();
    },
    save(setting) {
      this.saveSetting(setting);
      this.update();
    },
    update() {
      this.updateSetting();
      location.reload();
    }
  }
};
</script>
