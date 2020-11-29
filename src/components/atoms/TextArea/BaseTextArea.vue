<template>
  <div>
    <label :for="form.id">{{ form.label }}</label>
    <textarea
      :id="form.id"
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
    form: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    sendText(e) {
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
}
</style>
