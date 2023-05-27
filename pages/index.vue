<template>
  <div class="">
    <div class="flex gap-2">
      <list-container v-for="item in boards" :key="item.id" :list="myArray" />
      <div class="min-w-[250px] rounded-lg relative">
        <button
          @click="showModal = true"
          v-show="!showModal"
          ref="showModalButton"
          class="flex-1 p-2.5 bg-white/30 hover:bg-white/40 text-white rounded-md w-full text-left"
        >
          <IconsPlus width="20" height="20" color="#FFFFFF" class="inline" />
          Add a board
        </button>

        <div
          id="modal"
          v-if="showModal"
          class="absolute top-0 bg-white p-2 rounded-md"
        >
          <input
            ref="modalInput"
            type="text"
            placeholder="Enter board title"
            class="w-full p-2 mb-1 outline-none text-sm placeholder:text-gray-800 rounded-md focus:ring-2 focus:ring-blue-700 focus:ring-inset"
          />
          <button
            class="text-white bg-blue-500 p-2 text-xs rounded-md hover:cursor-pointer"
          >
            Add board
          </button>
          <IconsClose
            @click="showModal = false"
            width="30"
            height="30"
            color="gray"
            class="inline m-2 p-1 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// modal
const showModal = ref(false);
const showModalButton = ref(null);
const modalInput = ref(null);

const closeModal = () => {
  showModal.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});

const handleOutsideClick = (ev) => {
  const modalContainer = document.getElementById("modal");
  if (
    modalContainer &&
    !modalContainer.contains(ev.target) &&
    ev.target !== showModalButton.value
  ) {
    closeModal();
  }
};

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
  //numBoards.value += 1;
};

const boards = computed(() => {
  const currentBoards = [];
  for (let i = 0; i < numBoards.value; i++) {
    currentBoards.push({ id: i + 1, name: `Board ${i + 1}` });
  }
  return currentBoards;
});

watch(showModal, (newValue) => {
  if (newValue) {
    nextTick(() => {
      modalInput.value.focus();
    });
  }
});
</script>

<style scoped></style>
