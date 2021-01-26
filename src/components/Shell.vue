<template>
  <Squigglies>
    <div
      class="select-none lg:select-auto relative overflow-auto h-full bg-white rounded-2xl p-4 shadow-2xl"
    >
      <slot />
    </div>
  </Squigglies>
</template>

<script setup>
  import Squigglies from "./Squigglies.vue";
</script>
