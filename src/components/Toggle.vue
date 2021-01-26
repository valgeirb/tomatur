<template>
  <div class="toggle" :class="{ on: toggled }" @click="change"></div>
</template>

<script setup>
  import { defineProps, ref, useContext } from "vue";
  const props = defineProps({
    modelValue: Boolean,
  });

  const { emit } = useContext();
  const toggled = ref(props.modelValue);

  const change = () => {
    toggled.value = !toggled.value;
    emit("update:modelValue", toggled.value);
  };
</script>

<style scoped>
  .toggle {
    width: 40px;
    height: 24px;
    border-radius: 12px;
    box-sizing: border-box;
    border: 2px solid #000000;
    position: relative;
    padding: 2px;
    transition: border-color 0.15s;
    cursor: pointer;
  }
  .toggle:before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: block;
    background: #000000;
    transition: background-color 0.15s, transform 0.15s;
  }

  .toggle.on {
    border-color: #ff6347;
  }
  .toggle.on:before {
    background: #ff6347;
    transform: translateX(16px);
  }
</style>
