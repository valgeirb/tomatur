<template>
  <div class="relative flex items-center justify-center">
    <div
      class="absolute flex flex-col items-center text-4xl text-white tracking-wide"
    >
      <div>TÓ</div>
      <div>MA</div>
      <div>TUR</div>
    </div>
    <svg :height="radius * 2" :width="radius * 2" class="text-tomato">
      <circle fill="currentColor" :r="radius" :cx="radius" :cy="radius" />
    </svg>
  </div>
</template>

<script setup>
  import { computed, defineProps, ref } from "vue";

  const props = defineProps({
    radius: Number,
  });
</script>
