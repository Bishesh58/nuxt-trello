<template>
  <div class="">
    <div class="flex gap-2">
      <list-container v-for="item in boards" :key="item.id" :list="myArray" />
      <div class="min-w-[250px] rounded-lg bg-white">
        <!-- <button
          @click="addBoard"
          class="flex-1 py-1 px-2.5 bg-gray-400/40 hover:bg-gray-400/60 rounded-md w-full text-left"
        >
          <IconsPlus
            width="20"
            height="20"
            color="#FFFFFF"
            class="inline mr-2"
          />
          Add a board
        </button> -->
        <div class="m-2">
          <input
            type="text"
            placeholder="Enter board title"
            class="w-full p-2 mb-1 outline-none text-sm placeholder:text-gray-800 rounded-md focus:ring-2 focus:ring-blue-700 focus:ring-inset"
          />
          <button
            class="text-white bg-blue-500 p-2 text-sm rounded-md hover:cursor-pointer"
          >
            Add board
          </button>
          <IconsClose
            width="30"
            height="30"
            color="gray"
            class="inline m-2 p-1 hover:cursor-pointer"
          />
        </div>
      </div>
      <!-- prime -->

      <Button label="Show" icon="pi pi-external-link" @click="visible = true" />

      <Dialog
        v-model:visible="visible"
        header="Header"
        :style="{ width: '50vw' }"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
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
const visible = ref(false);
const numBoards = ref(0); // Number of initial boards

const addBoard = () => {
  //numBoards.value += 1;
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
