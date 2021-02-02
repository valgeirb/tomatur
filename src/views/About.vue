<template>
  <div class="h-full flex flex-col space-y-8 text-lg">
    <Header title="About" />
    <div>
      The Pomodoro Technique is a
      <span class="font-bold text-tomato">time management</span> method
      developed by Francesco Cirillo in the late 1980s.
    </div>

    <div class="text-center">
      <div class="text-4xl font-bold uppercase">How?</div>
      <div class="testing">
        <span class="text-left text-tomato text-4xl font-bold">1</span>
        <div class="text-left">Pick a task to work on.</div>

        <span class="text-left text-tomato text-4xl font-bold">2</span>
        <div class="text-left">Start a new session.</div>

        <span class="text-left text-tomato text-4xl font-bold">3</span>
        <div class="text-left">
          Commit. Focus on your work until the timer rings.
        </div>

        <span class="text-left text-tomato text-4xl font-bold">4</span>
        <div class="text-left">Take a short break.</div>

        <span class="text-left text-tomato text-4xl font-bold">5</span>
        <div class="text-left">Every 4 pomodoros you take a longer break.</div>
      </div>
    </div>

    <div class="text-center border-t-2 border-gray-100 dark:border-gray-800">
      <div class="mt-4">Made by</div>
      <a
        href="https://valgeir.dev/"
        target="_blank"
        class="font-bold text-tomato underline"
        >@valgeir</a
      >
    </div>
  </div>
</template>

<script setup>
  import { Header } from "../components";
</script>

<style scoped>
  .testing {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.5rem;
    row-gap: 0.5rem;
    align-items: center;
  }
</style>
