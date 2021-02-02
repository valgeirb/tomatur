<template>
  <div class="h-full flex flex-col">
    <div class="relative flex-1 flex flex-col items-center justify-center">
      <Transition name="fade">
        <Ring
          v-if="started"
          :started="started"
          :radius="150"
          :progress="progress"
          :stroke="2"
        />
      </Transition>
      <div class="absolute">
        <div class="text-lg text-center">Start a new session</div>
        <div class="text-6xl font-bold text-center w-full">{{ clock }}</div>
        <div class="text-lg hidden">until a small break</div>
      </div>
    </div>
    <Controls
      @start="start"
      @stop="stop"
      :started="started"
      :showInfoButton="showInfoButton"
    />
  </div>
  <RouterView v-slot="{ Component }">
    <Transition
      class="absolute inset-0 bg-white dark:bg-gray-900 p-8"
      enter-active-class="transform transition ease-in-out duration-300"
      leave-active-class="transform transition ease-in-out duration-300"
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
  import * as workerTimers from "worker-timers";
  import { Ring, Controls, Shell } from "../components";
  import { usePomodoro, useSettings } from "../composables";

  const { showInfoButton } = useSettings();

  const progress = computed(
    () => (remainingSeconds.value / initialRemainingSeconds.value) * 100,
  );

  const {
    start,
    stop,
    clock,
    started,
    initialRemainingSeconds,
    remainingSeconds,
  } = usePomodoro();
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
