<template>
  <div>
    <base-title1>Setting</base-title1>
    <setting-form :form="form" />
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';
import SettingForm from '@/components/organisms/SettingForm/SettingForm';

export default {
  name: 'Setting',
  components: {
    'base-title1': BaseTitle1,
    'setting-form': SettingForm
  },
  data() {
    return {
      form: {
        id: 'style-form',
        label: 'style設定',
        placeholder: 'スタイルを入力してください'
      }
    };
  }
};
</script>
