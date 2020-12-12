<template>
  <div>
    <div class="setting-form">
      <base-text-area
        :pre-text="userSetting.styles"
        :form="form"
        @send-text="setSetting"
      />
      <div class="setting-form__btns">
        <base-btn @btn-click="save">保存</base-btn>
        <base-btn @btn-click="init">初期化</base-btn>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTextArea from '../../atoms/BaseTextArea/BaseTextArea';
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SettingForm',
  components: {
    'base-text-area': BaseTextArea,
    'base-btn': BaseBtn
  },
  props: {
    preText: {
      type: String,
      default: '',
      reuired: true
    },
    form: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      setting: { styles: '' }
    };
  },
  computed: {
    ...mapGetters('setting', ['userSetting'])
  },
  methods: {
    ...mapActions('setting', ['restoreSetting', 'saveSetting', 'initSetting']),
    setSetting(styles) {
      this.setting.styles = styles;
    },
    save() {
      // 設定が空でなく、同意が得られたらスタイル書き換え
      if (this.setting.styles === '') {
        alert('空のスタイルや初期スタイルを設定することはできません。');
      } else {
        const isOK = confirm(
          'スタイルを適用するために再読み込みを行います。\nよろしいですか?'
        );
        if (!isOK) {
          alert('キャンセルされました。');
        } else {
          this.saveSetting(this.setting);
          this.restore();
        }
      }
    },
    init() {
      this.initSetting();
      this.restore();
    },
    restore() {
      this.restoreSetting();
      location.reload();
    }
  }
};
</script>

<style scoped>
::v-deep .base-btn--extend {
  width: 80px;
  margin: 5px;
  font-size: 15px;
  color: gray;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  outline-color: cornflowerblue;
}

::v-deep .base-btn--extend:hover,
::v-deep .base-btn--extend:focus,
::v-deep .base-btn--extend:active {
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
}

::v-deep .base-text-area--extend {
  width: 95%;
  height: 30vh;
  margin: 10px auto;
}

.setting-form {
  width: 95%;
  margin: 0 auto;
  border: 1px solid cornflowerblue;
}

.setting-form__btns {
  display: flex;
  justify-content: space-around;
  margin: 15px auto;
}
</style>
