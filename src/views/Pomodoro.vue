<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 flex flex-col items-center justify-center">
      <Transition name="fade">
        <Ring
          v-if="started && !paused"
          :started="started"
          :radius="150"
          :percentage="percentage"
          :stroke="2"
        />
      </Transition>
      <div class="absolute">
        <div class="text-lg text-center">{{ header }}</div>
        <div class="text-6xl font-bold text-center w-full tracking-wide">
          {{ clock }}
        </div>
      </div>
    </div>
    <Controls
      @start="start"
      @stop="stop"
      :started="started"
      :showInfoButton="showInfoButton"
    />
  </div>
  <Transition
    class="absolute inset-0 bg-white dark:bg-gray-900 p-8"
    enter-active-class="transform transition ease-in-out duration-500"
    leave-active-class="transform transition ease-in-out duration-500"
    enter-from-class="opacity-0 translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-full"
  >
    <Paused :mode="mode" v-if="paused" @start="start" @stop="stop" />
  </Transition>
  <RouterView v-slot="{ Component }">
    <Transition
      class="absolute inset-0 bg-white dark:bg-gray-900 p-8"
      enter-active-class="transform transition ease-in-out duration-200"
      leave-active-class="transform transition ease-in-out duration-200"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
  import { computed } from "vue";
  import { Ring, Controls, Paused } from "../components";
  import { usePomodoro, useSettings } from "../composables";

  const { showInfoButton } = useSettings();
  const {
    start,
    stop,
    clock,
    percentage,
    started,
    paused,
    mode,
  } = usePomodoro();

  const header = computed(() => {
    if (started.value) {
      switch (mode.value) {
        case "pomodoro":
          return "Work";
        default:
          return "Relax";
      }
    }

    return "Ready?";
  });
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
