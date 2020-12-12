<template>
  <div>
    <label :for="form.id">{{ form.label }}</label>
    <textarea
      :id="form.id"
      :value="preText"
      class="base-text-area--extend"
      :placeholder="form.placeholder"
      @input="sendText"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'BaseTextArea',
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
  methods: {
    sendText(e) {
      // 入力のたびに、親メソッドに値を伝える
      this.$emit('send-text', e.target.value);
    }
  }
};
</script>

<style scoped>
label {
  margin: 20px;
}

textarea {
  display: block;
  padding: 0;
  margin: 0;
  resize: none;
  outline-color: cornflowerblue;
}
</style>
