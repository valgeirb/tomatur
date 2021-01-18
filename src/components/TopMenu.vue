<template>
  <div class="absolute w-full top-0 left-0 flex flex-row-reverse">
    <slot />
    <RouterLink
      to="/about"
      class="h-16 w-16 bg-black text-white flex items-center justify-center text-2xl"
    >
      <FontAwesomeIcon icon="info" />
    </RouterLink>
  </div>
</template>

<script>
  export default {
    name: "TopMenu",
  };
</script>
