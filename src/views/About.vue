<template>
  <div
    class="h-full flex flex-col space-y-4 justify-around text-center pt-12 text-lg"
  >
    <div>
      <div class="text-4xl font-bold uppercase">What?</div>
      <div>
        The Pomodoro Technique is a
        <span class="font-bold text-tomato">time management</span> method
        developed by Francesco Cirillo in the late 1980s.
      </div>
    </div>

    <div>
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

    <div>
      <div class="text-4xl font-bold uppercase">Who?</div>
      <div>
        <div>Made by</div>
        <a
          href="https://valgeir.dev/"
          target="_blank"
          class="font-bold text-tomato underline"
          >Valgeir Björnsson</a
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .testing {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.5rem;
    row-gap: 0.5rem;
    align-items: center;
  }
</style>
