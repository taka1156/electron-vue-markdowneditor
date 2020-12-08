<template>
  <div>
    <label :for="form.id">{{ form.label }}</label>
    <textarea
      :id="form.id"
      :value="initText"
      class="base-text-area"
      :placeholder="form.placeholder"
      @input="sendText"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    preText: {
      type: String,
      default: ''
    },
    form: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      initText: ''
    };
  },
  created() {
    // 他ページから戻ってきたときのみ、前回の入力データを初期値にする。
    this.initText = this.preText;
  },
  methods: {
    sendText(e) {
      // 入力のたびに、親メソッドに値を伝える
      this.$emit('send-text', e.target.value);
    }
  }
};
</script>

<style scoped>
textarea {
  display: block;
  margin: 0;
  padding: 0;
  outline-color: cornflowerblue;
}
</style>
