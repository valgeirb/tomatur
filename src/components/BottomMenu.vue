<template>
  <div
    class="grid grid-cols-3 justify-center justify-items-center items-center"
  >
    <RouterLink to="/settings" class="cursor-pointer text-2xl">
      <FontAwesomeIcon icon="sliders-h" />
    </RouterLink>
    <div
      @click="startOrReset"
      class="cursor-pointer text-2xl bg-red-500 h-16 w-16 flex items-center justify-center text-white rounded-full"
    >
      <FontAwesomeIcon
        :class="mainIcon === 'play' ? 'ml-1' : null"
        :key="mainIcon"
        :icon="mainIcon"
      />
    </div>
    <RouterLink to="/sessions" class="cursor-pointer text-2xl">
      <FontAwesomeIcon icon="list-ul" />
    </RouterLink>
  </div>
</template>

<script setup>
  import { useContext, ref, computed } from "vue";
  const { emit } = useContext();
  const timerStarted = ref(false);
  const mainIcon = computed(() => (timerStarted.value ? "undo-alt" : "play"));

  const startOrReset = () => {
    if (timerStarted.value) {
      emit("reset");
    } else {
      emit("start");
    }
    timerStarted.value = !timerStarted.value;
  };
</script>
