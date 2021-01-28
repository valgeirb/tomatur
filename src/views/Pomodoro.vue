<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 flex flex-col justify-center space-y-4">
      <div class="text-lg text-center">Start a new session</div>
      <div class="text-6xl font-bold text-center w-full">{{ clock }}</div>
      <div class="text-lg hidden">until a small break</div>
    </div>
    <BottomMenu @start="start" @stop="stop" />
  </div>
</template>

<script setup>
  import * as workerTimers from "worker-timers";
  import { BottomMenu } from "../components";
  import usePomodoro from "../composables/usePomodoro";

  const { start, stop, clock } = usePomodoro();
</script>
