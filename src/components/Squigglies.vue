<template>
  <div class="h-full p-6 bg-repeat squiggly">
    <slot />
  </div>
</template>

<style scoped>
  .squiggly {
    background-image: url("../assets/squiggly.svg");
  }
</style>
