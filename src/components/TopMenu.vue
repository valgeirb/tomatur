<template>
  <div class="relative w-full flex flex-row items-center">
    <RouterLink
      v-if="notOnPomodoroPage"
      to="/"
      class="absolute left-0 text-2xl"
    >
      <FontAwesomeIcon icon="chevron-left" />
    </RouterLink>
    <div
      v-if="notOnPomodoroPage"
      class="mx-auto flex items-center text-4xl font-bold uppercase"
    >
      <span>{{ title }}</span>
    </div>

    <RouterLink
      v-if="showInfoIcon"
      to="/about"
      class="absolute top-0 right-0 rounded-xl h-16 w-16 text-black dark:text-gray-300 flex items-center justify-center text-2xl"
    >
      <FontAwesomeIcon icon="question" />
    </RouterLink>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import useSettings from "../composables/useSettings";

  const { showInfoButton } = useSettings();
  const route = useRoute();

  const showInfoIcon = computed(
    () => route.name === "Pomodoro" && showInfoButton.value,
  );
  const notOnPomodoroPage = computed(() => route.name !== "Pomodoro");

  const title = computed(() => route.name);
</script>
