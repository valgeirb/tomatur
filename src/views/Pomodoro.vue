<template>
  <TopMenu />
  <div class="h-full flex flex-col">
    <div class="flex-1 flex flex-col justify-center items-center">
      <div class="flex flex-col items-center space-y-4">
        <div class="text-lg">Start a new session</div>
        <div class="text-6xl font-bold">25:00</div>
        <div class="text-lg hidden">until a small break</div>
      </div>
    </div>
    <BottomMenu />
  </div>
</template>

<script setup>
  import { TopMenu, BottomMenu } from "../components";
</script>
