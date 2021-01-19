<template>
  <Squigglies>
    <div
      class="relative overflow-auto h-full bg-white rounded-2xl p-8 shadow-2xl"
    >
      <slot />
    </div>
  </Squigglies>
</template>

<script setup>
  import Squigglies from "./Squigglies.vue";
</script>
