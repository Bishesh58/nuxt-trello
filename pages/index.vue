<template>
  <div class="">
    <div>
      <list-container :list="myArray" />
    </div>
  </div>
</template>

<script setup>
const myArray = ref([
  { name: "test 1" },
  { name: "test 2" },
  { name: "test 3" },
  { name: "test 4" },
  { name: "test 5" },
  { name: "test 6" },
]);
</script>

<style scoped></style>
