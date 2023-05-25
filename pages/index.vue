<template>
  <div class="">
    <div>
      <list-container :list="myArray" />
    </div>
  </div>
</template>

<script setup>
const myArray = ref([
  { id: 1, name: "test 1" },
  { id: 2, name: "test 2" },
  { id: 3, name: "test 3" },
  { id: 4, name: "test 4" },
  { id: 5, name: "test 5" },
  { id: 6, name: "test 6" },
]);
</script>

<style scoped></style>
