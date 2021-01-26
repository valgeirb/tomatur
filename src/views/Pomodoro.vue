<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 flex flex-col justify-center space-y-4">
      <div class="text-lg text-center">Start a new session</div>
      <div class="text-6xl font-bold text-center w-full">{{ timeLeft }}</div>
      <div class="text-lg hidden">until a small break</div>
    </div>
    <BottomMenu @start="handleStart" @stop="handleStop" />
  </div>
</template>

<script setup>
  import * as workerTimers from "worker-timers";
  import { computed, ref } from "vue";
  import { BottomMenu } from "../components";
  import usePomodoro from "../usePomodoro";

  const { start, stop, timeLeft } = usePomodoro();
  const handleStart = () => {
    console.log("Starting timer");
    start(1);
  };
  const handleStop = () => {
    console.log("Stopping timer");
    stop();
  };
</script>
