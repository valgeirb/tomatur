<template>
  <div
    class="grid grid-cols-3 justify-center justify-items-center items-center"
  >
    <RouterLink to="/settings" class="text-2xl">
      <FontAwesomeIcon icon="sliders-h" />
    </RouterLink>
    <div
      class="text-2xl bg-red-500 h-16 w-16 flex items-center justify-center text-white rounded-full"
    >
      <FontAwesomeIcon class="ml-1" icon="play" />
    </div>
    <RouterLink to="/sessions" class="text-2xl">
      <FontAwesomeIcon icon="list-ul" />
    </RouterLink>
  </div>
</template>

<script>
  export default {
    name: "BottomMenu",
  };
</script>
