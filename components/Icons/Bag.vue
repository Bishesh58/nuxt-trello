<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 14 14"
  >
    <g
      fill="none"
      :stroke="props.color"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="13" height="9.5" x=".5" y="4" rx="2" />
      <path d="M4 13.5V4m6 9.5V4M4.5 4a2.5 2.5 0 0 1 5 0" />
    </g>
  </svg>
</template>

<script setup>
const props = defineProps(["width", "height", "color"]);
</script>
