<template>
  <select class="form-select border-0 shadow-sm bg-primary text-white" id="select" aria-label="select"
    v-model="selected" @change="$emit('updata', selected)">
    <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<script>
export default {
  props: ['options'],
  emits: ['updata'],
  data() {
    return {
      selected: this.options[0].value
    }
  },
};
</script>
