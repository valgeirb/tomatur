<template>
  <div class="h-full flex flex-col">
    <div class="relative flex-1 flex flex-col items-center justify-center">
      <Transition name="fade">
        <ProgressRing
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

    <BottomMenu @start="start" @stop="stop" />
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import * as workerTimers from "worker-timers";
  import { ProgressRing, BottomMenu } from "../components";
  import usePomodoro from "../composables/usePomodoro";

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
