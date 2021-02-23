<template>
  <svg
    :height="radius * 2"
    :width="radius * 2"
    class="text-red-100 dark:text-gray-700"
  >
    <circle
      stroke="currentColor"
      :stroke-dasharray="circumference + ' ' + circumference"
      :stroke-width="stroke"
      fill="transparent"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
    <circle
      stroke="tomato"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset: strokeDashoffset }"
      :stroke-width="stroke"
      fill="transparent"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script setup>
  import { computed, defineProps, ref } from "vue";

  const props = defineProps({
    radius: Number,
    percentage: Number,
    stroke: Number,
  });

  const normalizedRadius = ref(props.radius - props.stroke * 2);
  const circumference = ref(normalizedRadius.value * 2 * Math.PI);
  const strokeDashoffset = computed(
    () => circumference.value - (props.percentage / 100) * circumference.value,
  );
</script>

<style scoped>
  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
</style>
