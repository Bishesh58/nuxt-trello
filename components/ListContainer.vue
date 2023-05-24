<template>
  <div class="bg-[#f1f2f4] w-[300px] rounded-lg p-2 text-gray-700">
    <draggable
      v-model="list"
      group="people"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #header>
        <div class="flex items-center pb-2">
          <input
            type="text"
            v-model="title"
            class="py-1 px-2.5 bg-transparent flex-grow"
          />

          <div
            class="h-8 w-8 p-1 mx-1 rounded-md flex justify-center items-center hover:bg-gray-500/30 hover:cursor-pointer"
          >
            <IconsMore width="18" height="18" color="black" />
          </div>
        </div>
      </template>
      <template #item="{ element }">
        <div class="bg-[#f1f2f4] my-2 py-2 px-2.5 rounded-lg border shadow-md">
          {{ element.name }}
        </div>
      </template>
      <template #footer>
        <div class="flex items-center">
          <button
            @click="addPeople"
            class="flex-1 text-left py-1 px-2.5 hover:bg-gray-300 rounded-md"
          >
            <IconsPlus width="20" height="20" color="gray" class="inline mr-2" />
            Add a card
          </button>
          <div
            class="h-8 w-8 p-1 mx-1 rounded-md flex justify-center items-center hover:bg-gray-500/30 hover:cursor-pointer"
          >
            <IconsMore width="18" height="18" color="black" />
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
const props = defineProps(["list"]);
const { list } = toRefs(props);
const title = ref("Board 1");
</script>

<style scoped></style>
