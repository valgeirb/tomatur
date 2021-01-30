<template>
  <div class="flex justify-between items-center">
    <RouterLink
      to="/settings"
      class="h-16 w-16 flex items-center justify-center cursor-pointer text-2xl"
    >
      <FontAwesomeIcon icon="sliders-h" />
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
      to="/sessions"
      class="h-16 w-16 flex items-center justify-center cursor-pointer text-2xl"
    >
      <FontAwesomeIcon icon="list-ul" />
    </RouterLink>
  </div>
</template>

<script setup>
  import { defineProps, useContext, computed } from "vue";

  const props = defineProps({
    started: Boolean,
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
