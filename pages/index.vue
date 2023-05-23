<template>
  <div class="bg-slate-400 h-full flex justify-center items-center">
    <ClientOnly>
      <draggable
        v-model="myArray"
        group="people"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </ClientOnly>
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
