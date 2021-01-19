<template>
  <div class="absolute w-full top-0 left-0 flex flex-row">
    <RouterLink
      v-if="showBackIcon"
      to="/"
      class="absolute left-0 h-16 w-16 bg-black text-white flex items-center justify-center text-2xl"
    >
      <FontAwesomeIcon icon="chevron-left" />
    </RouterLink>
    <RouterLink
      v-if="showInfoIcon"
      to="/about"
      class="absolute right-0 h-16 w-16 bg-black text-white flex items-center justify-center text-2xl"
    >
      <FontAwesomeIcon icon="info" />
    </RouterLink>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const showInfoIcon = computed(() => route.name === "Pomodoro");
  const showBackIcon = computed(() => !showInfoIcon.value);
</script>
