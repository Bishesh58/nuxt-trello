<script setup>
import draggable from "vuedraggable";

const log = (ev) => {
  console.log(ev);
};

const list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
]);

const list2 = ref([]);
</script>

<template>
  <div class="m-20 p-32 border rounded-md flex justify-center items-center h-full">
    <!-- drag containter 1 -->
    <draggable
      class="list-group"
      v-model="list1"
      group="ticket"
      @change="log"
      itemKey="name"
      handle=".handle"
    >
      <template #header>
        <h1 class="px-4">Open Ticket</h1>
      </template>
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
    <!-- drag container 2 -->
    <draggable
      class="list-group"
      v-model="list2"
      group="ticket"
      @change="log"
      itemKey="name"
      handle=".handle"
    >
      <template #header>
        <h1 class="px-4">Assign ticket</h1>
      </template>
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.list-group {
  width: 500px;
}
.list-group-item {
  padding: 20px;
  margin: 5px;
  background: whitesmoke;
  border-radius: 10px;
}
</style>
