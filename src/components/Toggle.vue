<template>
  <div class="toggle" :class="{ on: toggled }" @click="toggle"></div>
</template>

<script setup>
  import { defineProps, ref, useContext } from "vue";
  const props = defineProps({
    modelValue: Boolean,
  });

  const { emit } = useContext();
  const toggled = ref(props.modelValue);

  const toggle = () => {
    toggled.value = !toggled.value;
    emit("update:modelValue", toggled.value);
  };
</script>

<style scoped>
  .toggle {
    @apply w-10 h-6 rounded-full box-border border-2 border-black dark:border-gray-300 relative transition cursor-pointer p-0.5;
  }
  .toggle:before {
    @apply w-4 h-4 rounded-full block bg-black dark:bg-gray-300 transition;
    content: "";
  }

  .toggle.on {
    @apply border-tomato;
  }
  .toggle.on:before {
    @apply bg-tomato transform translate-x-4;
  }
</style>
