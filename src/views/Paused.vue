<template>
  <div
    class="p-8 flex flex-col justify-center items-center bg-white dark:bg-gray-900"
  >
    <div class="mt-auto flex flex-col items-center">
      <Tomato :radius="150" />
      <span class="mt-8 text-2xl">{{ header }}</span>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-auto w-full">
      <button
        class="p-4 border border-gray-800 rounded-lg"
        @click="emit('stop')"
      >
        Quit session
      </button>
      <button
        class="p-4 bg-gray-800 text-white rounded-lg"
        @click="emit('start')"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script setup>
  import { Tomato } from "../components";
  import { useContext, defineProps, computed, ref } from "vue";

  const props = defineProps({
    mode: String,
  });

  const { emit } = useContext();

  const header = computed(() =>
    props.mode === "pomodoro"
      ? "Ready to get back to work?"
      : "Ready for a break?",
  );
</script>
