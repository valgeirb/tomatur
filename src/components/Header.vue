<template>
  <div class="relative w-full flex flex-row items-center">
    <RouterLink to="/" class="absolute left-0 text-2xl">
      <FontAwesomeIcon icon="chevron-left" />
    </RouterLink>
    <div class="mx-auto flex items-center text-4xl font-bold tracking-wide">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  defineProps({
    title: String,
  });
</script>
