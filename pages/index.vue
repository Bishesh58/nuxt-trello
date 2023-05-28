<template>
  <div class="">
    <div class="flex gap-2">
      <list-container
        v-for="board in myBoards"
        :key="board.id"
        :title="board.name"
      />
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
            v-model="inputTitle"
            type="text"
            placeholder="Enter board title"
            class="w-full p-2 mb-1 outline-none text-sm placeholder:text-gray-800 rounded-md ring-2 ring-blue-700 ring-inset"
          />
          <button
            class="text-white bg-blue-500 p-2 text-xs rounded-md hover:cursor-pointer"
            type="submit"
            @click="addNewBoard"
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
const inputTitle = ref("");
const myBoards = ref([]);

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

const addNewBoard = () => {
  if (inputTitle.value === "") {
    modalInput.value.focus();
    return;
  }
  const newBoard = { id: 1, name: inputTitle.value };
  myBoards.value.push(newBoard);
  inputTitle.value = "";
  closeModal();
};

watch(showModal, (newValue) => {
  if (newValue) {
    nextTick(() => {
      modalInput.value.focus();
    });
  }
});
</script>

<style scoped></style>
