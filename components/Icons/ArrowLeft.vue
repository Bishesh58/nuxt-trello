<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
  >
    <path
      :fill="props.color"
      d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
    ></path>
  </svg>
</template>

<script setup>
const props = defineProps(["width", "height", "color"]);
</script>
