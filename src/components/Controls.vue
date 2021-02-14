<template>
  <div class="relative flex justify-center items-center">
    <RouterLink
      v-if="!started"
      to="/settings"
      class="left-0 absolute h-16 w-16 flex items-center justify-center cursor-pointer text-2xl"
    >
      <FontAwesomeIcon icon="bars" />
    </RouterLink>
    <div
      @click="startOrStop"
      class="cursor-pointer text-2xl bg-tomato h-16 w-16 flex items-center justify-center text-white rounded-full"
    >
      <FontAwesomeIcon
        :class="mainIcon === 'play' ? 'ml-1' : null"
        :key="mainIcon"
        :icon="mainIcon"
      />
    </div>
    <RouterLink
      v-if="showInfoButton && !started"
      to="/about"
      class="absolute right-0 rounded-xl h-16 w-16 text-black dark:text-gray-300 flex items-center justify-center text-2xl"
    >
      <FontAwesomeIcon :icon="['far', 'question-circle']" />
    </RouterLink>
  </div>
</template>

<script setup>
  import { defineProps, useContext, computed } from "vue";

  const props = defineProps({
    started: Boolean,
    showInfoButton: Boolean,
  });
  const { emit } = useContext();
  const mainIcon = computed(() => (props.started ? "stop" : "play"));

  const startOrStop = () => {
    if (props.started) {
      emit("stop");
    } else {
      emit("start");
    }
  };
</script>
