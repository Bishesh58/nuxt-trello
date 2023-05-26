<template>
  <div class="">
    <div class="flex gap-2">
      <list-container v-for="item in boards" :key="item.id" :list="myArray" />
      <div class="text-[#FFFFFF]">
        <button
          @click="addBoard"
          class="flex-1 py-1 px-2.5 hover:bg-gray-400/60 rounded-md"
        >
          <IconsPlus
            width="20"
            height="20"
            color="#FFFFFF"
            class="inline mr-2"
          />
          Add a board
        </button>
      </div>
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

const numBoards = ref(0); // Number of initial boards

const addBoard = () => {
  numBoards.value += 1;
};

const boards = computed(() => {
  const currentBoards = [];
  for (let i = 0; i < numBoards.value; i++) {
    currentBoards.push({ id: i + 1, name: `Board ${i + 1}` });
  }
  return currentBoards;
});
</script>

<style scoped></style>
